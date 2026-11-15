/* ============================================================================
   src/api.js — PyroNull backend API client
   Reads base URL from VITE_API_URL env var (Vite default) with sensible
   fallbacks for local dev and Render production.

   Usage:
     import { api } from './src/api.js';
     const data = await api.profiles.get();
     const ranked = await api.rank.post({ scenario });
     // etc.
   ============================================================================ */

(function (global) {
  'use strict';

  // ---- Base URL resolution ---------------------------------------------------
  // Priority:
  // 1. Vite runtime: window.VITE_API_URL set from index.html meta tag
  // 2. Vite build-time: import.meta.env.VITE_API_URL (replaced during build)
  // 3. process.env.VITE_API_URL (Node.js / SSR / Render runtime injection)
  // 4. Defaults: localhost for local, Render production URL otherwise

  var API_BASE;
  var API_CONNECTED = false;

  // Step 1: Check for window.VITE_API_URL set from index.html meta tag
  var windowViteUrl = (typeof window !== 'undefined' && window.VITE_API_URL)
    ? window.VITE_API_URL
    : null;

  // Step 2: Check process.env (Render injects env vars at runtime, and Vite
  // makes import.meta.env.VITE_API_URL available at build time)
  var processViteUrl = (typeof process !== 'undefined' && process.env
    && process.env.VITE_API_URL)
    ? process.env.VITE_API_URL
    : null;

  // Choose the first available URL
  var chosenUrl = windowViteUrl || processViteUrl;

  if (chosenUrl) {
    API_BASE = chosenUrl;
  } else {
    // No env var set: use localhost for local development,
    // or Render production URL when deployed
    if (typeof window !== 'undefined' && window.location) {
      // Browser: check if we're on localhost
      var hostname = window.location.hostname;
      if (hostname === 'localhost' || hostname === '127.0.0.1') {
        API_BASE = 'http://localhost:8000';
      } else {
        // Not on localhost and no env var: assume Render production
        API_BASE = 'https://pyronull-backend.onrender.com';
      }
    } else {
      // Node.js or no window: use localhost default
      API_BASE = 'http://localhost:8000';
    }
  }

  var API_PROD_OVERRIDE = 'https://pyronull-backend.onrender.com';

  // If API_BASE is localhost and we're not on localhost in the browser,
  // override to Render production URL
  if (API_BASE && API_BASE.includes('localhost') && typeof window !== 'undefined') {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      API_BASE = API_PROD_OVERRIDE;
    }
  }

  var TIMEOUT_MS = 60000; // 60 seconds – Render free instances take time to wake

  // ---- Endpoint paths (matching backend FastAPI router prefix /api/v1) -----
  var ENDPOINTS = {
    // Mission Intelligence
    profiles: { method: 'GET',  path: '/api/v1/mission-intelligence/profiles' },
    scenario: { method: 'POST', path: '/api/v1/mission-intelligence/scenario' },
    discover: { method: 'POST', path: '/api/v1/mission-intelligence/discover' },
    rank:     { method: 'POST', path: '/api/v1/mission-intelligence/rank' },
    gaps:     { method: 'POST', path: '/api/v1/mission-intelligence/gaps' },
    report:   { method: 'POST', path: '/api/v1/mission-intelligence/report' },

    // Burn-time prediction
    burnTime: { method: 'POST', path: '/api/v1/predictions/burn-time' },

    // PSI-10 model endpoints
    psi10Tad:     { method: 'POST', path: '/api/v1/predictions/psi10/adiabatic-flame-temperature' },
    psi10Zst:     { method: 'POST', path: '/api/v1/predictions/psi10/stoichiometric-mixture-fraction' },
    psi10Pressure:{ method: 'POST', path: '/api/v1/predictions/psi10/pressure-rise' },

    // PSI-159 ignition endpoint
    psi159Ignition: { method: 'POST', path: '/api/v1/predictions/psi159/ignition' },
  };

  // ---- Request function with timeout + one retry ---------------------------
  function request(ep, payload) {
    var controller = new AbortController();
    var timeoutId = setTimeout(function () { controller.abort(); }, TIMEOUT_MS);

    var opts = {
      method: ep.method,
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal
    };

    if (ep.method !== 'GET' && payload !== undefined) {
      opts.body = JSON.stringify(payload);
    }

    return fetch(API_BASE + ep.path, opts).then(function (res) {
      clearTimeout(timeoutId);
      return res.json().catch(function () { return null; }).then(function (body) {
        if (!res.ok) {
          var detail = body && body.detail;
          throw {
            status: res.status,
            body: body,
            message: typeof detail === 'string' ? detail : 'Request failed (' + res.status + ')',
            code: res.status >= 500 ? 'SERVER_ERROR' : 'CLIENT_ERROR'
          };
        }
        return body;
      });
    }).catch(function (err) {
      clearTimeout(timeoutId);
      // AbortError from timeout
      if (err && err.name === 'AbortError') {
        throw {
          code: 'TIMEOUT',
          message: 'The request timed out after 60 seconds. The Render server may be '
                   + 'waking up from sleep. Please try again.',
          retry: true
        };
      }
      if (err && err.status) throw err; // already-shaped HTTP error

      // Network failure / CORS etc.
      throw {
        code: 'OFFLINE',
        message: 'Could not reach the API. Check your internet connection and '
                 + 'that the backend service is running.',
        retry: true
      };
    });
  }

  // ---- Retry wrapper (one retry on TIMEOUT/OFFLINE) -----------------------
  function withRetry(ep, payload) {
    return request(ep, payload).catch(function (err) {
      if (err && err.retry) {
        // One retry
        return request(ep, payload).catch(function (err2) {
          throw err2;
        });
      }
      throw err;
    });
  }

  // ---- API methods matching the pages.js actionLabels keys -----------------
  function call(epKey, payload) {
    var ep = ENDPOINTS[epKey];
    if (!ep) return Promise.reject({ code: 'UNKNOWN_ENDPOINT', message: 'Unknown endpoint: ' + epKey });
    if (!API_CONNECTED) return Promise.reject({ code: 'NOT_CONNECTED', message: 'Backend not connected.' });
    return withRetry(ep, payload);
  }

  /** Reachability check (used by the API status indicator). */
  function ping() {
    if (!API_CONNECTED) return Promise.resolve(false);
    return request(ENDPOINTS.profiles).then(function () { return true; }, function () { return false; });
  }

  // ---- Public API object ----------------------------------------------------
  global.PN_API = {
    API_BASE: API_BASE,
    ENDPOINTS: ENDPOINTS,
    isConnected: function () { return API_CONNECTED; },
    call: call,
    ping: ping,
    // Convenience: manually set connected status (e.g. after successful ping)
    setConnected: function (val) { API_CONNECTED = val; }
  };

})(window);