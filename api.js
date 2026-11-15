/* ============================================================================
   api.js — backend connection point (NOT CONNECTED in this build).
   The frontend task is visual-only, so API_CONNECTED is false and every call
   rejects with { code: 'NOT_CONNECTED' }. Pages already handle that state.

   To wire the backend later:
     1. Set API_BASE (local default below, or the deployed backend URL).
     2. Set API_CONNECTED = true.
     3. Confirm request/response field names in the backend's /docs and map them.
   ============================================================================ */
(function (global) {
  'use strict';

  var API_BASE = 'http://127.0.0.1:8001';   // later: deployed backend URL
  var API_CONNECTED = false;                // later: true
  var TIMEOUT_MS = 20000;

  var PREFIX = '/api/v1';
  var ENDPOINTS = {
    profiles: { method: 'GET',  path: PREFIX + '/mission-intelligence/profiles' },
    scenario: { method: 'POST', path: PREFIX + '/mission-intelligence/scenario' },
    discover: { method: 'POST', path: PREFIX + '/mission-intelligence/discover' },
    rank:     { method: 'POST', path: PREFIX + '/mission-intelligence/rank' },
    gaps:     { method: 'POST', path: PREFIX + '/mission-intelligence/gaps' },
    report:   { method: 'POST', path: PREFIX + '/mission-intelligence/report' },
    burnTime: { method: 'POST', path: PREFIX + '/predictions/burn-time' }
  };

  function request(ep, payload) {
    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, TIMEOUT_MS);
    var opts = { method: ep.method, headers: { 'Content-Type': 'application/json' }, signal: controller.signal };
    if (ep.method !== 'GET' && payload !== undefined) opts.body = JSON.stringify(payload);

    return fetch(API_BASE + ep.path, opts).then(function (res) {
      return res.json().catch(function () { return null; }).then(function (body) {
        if (!res.ok) {
          var detail = body && body.detail;
          throw { status: res.status, body: body, message: typeof detail === 'string' ? detail : 'Request failed (' + res.status + ')' };
        }
        return body;
      });
    }).catch(function (err) {
      if (err && err.status) throw err;                                   // HTTP error, already shaped
      if (err && err.name === 'AbortError') throw { code: 'TIMEOUT', message: 'The request timed out.' };
      throw { code: 'OFFLINE', message: 'Could not reach the API.' };      // network failure
    }).then(function (v) { clearTimeout(timer); return v; }, function (e) { clearTimeout(timer); throw e; });
  }

  function call(key, payload) {
    var ep = ENDPOINTS[key];
    if (!ep) return Promise.reject({ code: 'UNKNOWN_ENDPOINT', message: 'Unknown endpoint: ' + key });
    if (!API_CONNECTED) return Promise.reject({ code: 'NOT_CONNECTED', message: 'Backend not connected.' });
    return request(ep, payload);
  }

  /** Lightweight reachability check (used by the API status indicator). */
  function ping() {
    if (!API_CONNECTED) return Promise.resolve(false);
    return request(ENDPOINTS.profiles).then(function () { return true; }, function () { return false; });
  }

  global.PN_API = {
    API_BASE: API_BASE,
    ENDPOINTS: ENDPOINTS,
    isConnected: function () { return API_CONNECTED; },
    call: call,
    ping: ping
  };
})(window);
