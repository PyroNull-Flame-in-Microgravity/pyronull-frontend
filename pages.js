/* ============================================================================
   pages.js — logic for the workflow pages (visual layer only).
   Mission Workspace form + summary, Investigations / Relevance / Gaps / Reports
   action buttons, Burn Time Estimator form, API status indicator.
   No research data or predictions are generated here. Without a backend every
   action shows the shared "Backend not connected" state.
   ============================================================================ */
(function (global) {
  'use strict';

  var U = global.PN_UI;
  var A = global.PN_API;
  var esc = U.escapeHtml;
  function $(id) { return document.getElementById(id); }

  var SCENARIO_KEY = 'pyronull.scenario';
  var BURN_KEY = 'pyronull.burntime.inputs';

  var TEXT = {
    noRecords: 'No matching records in the currently indexed dataset.',
    gapNote: 'A gap means the currently indexed dataset lacks matching evidence. It does not prove the wider scientific literature lacks research.'
  };

  var actionLabels = {
    discover: { path: 'POST /api/v1/mission-intelligence/discover', busy: 'Discovering…' },
    rank:     { path: 'POST /api/v1/mission-intelligence/rank',     busy: 'Analysing…' },
    gaps:     { path: 'POST /api/v1/mission-intelligence/gaps',     busy: 'Identifying…' },
    report:   { path: 'POST /api/v1/mission-intelligence/report',   busy: 'Generating…' },
    burnTime: { path: 'POST /api/v1/predictions/burn-time',         busy: 'Estimating…' }
  };

  // ---- Field definitions (config-driven: edit here when the schema is confirmed) ----
  var PROFILE_PLACEHOLDERS = ['Spacecraft', 'Space Station', 'Lunar Habitat', 'Mars Habitat', 'Pressurized Rover'];

  var SCENARIO_FIELDS = [
    { key: 'profile', label: 'Mission profile', type: 'select', required: true, group: 'Mission Environment',
      options: PROFILE_PLACEHOLDERS, placeholder: 'Select a profile',
      hint: 'Placeholder list; replaced by the backend profiles when connected.' },
    { key: 'habitatType', label: 'Habitat type', type: 'text', group: 'Mission Environment', hint: 'Optional. May be derived from the profile.' },
    { key: 'gravity', label: 'Gravity regime', type: 'select', required: true, group: 'Mission Environment',
      options: ['Microgravity', 'Lunar', 'Martian', 'Earth'], placeholder: 'Select a regime' },
    { key: 'oxygen', label: 'Oxygen concentration', unit: '%', type: 'number', required: true, min: 0, max: 100, group: 'Atmosphere / Flow' },
    // Units below follow the labels in the UI only; confirm against the backend schema when it is available.
    { key: 'pressure', label: 'Pressure', unit: 'kPa', type: 'number', required: true, gt0: true, group: 'Atmosphere / Flow' },
    { key: 'airflow', label: 'Airflow', unit: 'cm/s', type: 'number', min: 0, group: 'Atmosphere / Flow', hint: 'Optional.' },
    { key: 'fuel', label: 'Fuel / material', type: 'text', group: 'Fuel / Material', hint: 'Optional.' }
  ];

  // The eight PSI-159 model features, in the exact model order.
  var BURN_FIELDS = [
    { key: 'flameType', label: 'Flame Type', type: 'text', required: true, placeholder: 'Normal', group: 'PSI-159 model features (model order)' },
    { key: 'fuel', label: 'Fuel', type: 'text', required: true, placeholder: '30% ethane', group: 'PSI-159 model features (model order)' },
    { key: 'approxP', label: 'approx p', unit: 'bar', type: 'number', required: true, gt0: true, placeholder: '0.506650', group: 'PSI-159 model features (model order)' },
    { key: 'tad', label: 'Tad (adiabatic flame temperature)', unit: 'K', type: 'number', required: true, gt0: true, placeholder: '2483.47', group: 'PSI-159 model features (model order)' },
    { key: 'hcBurnrate', label: 'HC burnrate', unit: 'mg/s', type: 'number', required: true, min: 0, placeholder: '0.75', group: 'PSI-159 model features (model order)' },
    { key: 'o2Flow', label: 'O2 flow rate', unit: 'mg/s', type: 'number', required: true, min: 0, placeholder: '0.85', group: 'PSI-159 model features (model order)' },
    { key: 'xo2', label: 'XO2 (oxygen mole fraction)', type: 'number', required: true, min: 0, max: 1, placeholder: '0.15', group: 'PSI-159 model features (model order)' },
    { key: 'xf', label: 'Xf (fuel fraction)', type: 'number', required: true, min: 0, max: 1, placeholder: '0.300', group: 'PSI-159 model features (model order)' }
  ];
  // Sample values recorded in the model README (inputs only, not results).
  var BURN_SAMPLE = { flameType: 'Normal', fuel: '30% ethane', approxP: 0.50665, tad: 2483.47, hcBurnrate: 0.75, o2Flow: 0.85, xo2: 0.15, xf: 0.3 };

  var state = { scenario: null, burnInputs: null };

  // ---- Safe session storage ---------------------------------------------------
  function load(key) {
    try { var raw = sessionStorage.getItem(key); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }
  function save(key, value) {
    try { if (value == null) sessionStorage.removeItem(key); else sessionStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable: app still works */ }
  }

  // ---- Form rendering / validation -------------------------------------------
  function fieldHtml(f, values, prefix) {
    var id = prefix + '-' + f.key;
    var v = values && values[f.key] != null ? values[f.key] : '';
    var unit = f.unit ? ' <span class="pn-unit">(' + esc(f.unit) + ')</span>' : '';
    var req = f.required ? ' <span class="pn-req" aria-hidden="true">*</span>' : '';
    var describedBy = id + '-err' + (f.hint ? ' ' + id + '-hint' : '');
    var control;
    if (f.type === 'select') {
      control = '<select id="' + id + '" name="' + esc(f.key) + '" class="pn-input" aria-describedby="' + describedBy + '"' + (f.required ? ' aria-required="true"' : '') + '>' +
        '<option value="">' + esc(f.placeholder || 'Select…') + '</option>' +
        f.options.map(function (o) { return '<option value="' + esc(o) + '"' + (String(o) === String(v) ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') +
        '</select>';
    } else {
      control = '<input id="' + id + '" name="' + esc(f.key) + '" class="pn-input" type="' + (f.type === 'number' ? 'number' : 'text') + '"' +
        (f.type === 'number' ? ' step="any" inputmode="decimal"' : '') +
        ' value="' + esc(v) + '" placeholder="' + esc(f.placeholder || '') + '" aria-describedby="' + describedBy + '"' + (f.required ? ' aria-required="true"' : '') + ' autocomplete="off" />';
    }
    return '<div class="pn-field">' +
      '<label for="' + id + '" class="pn-label">' + esc(f.label) + unit + req + '</label>' + control +
      (f.hint ? '<div id="' + id + '-hint" class="pn-hint">' + esc(f.hint) + '</div>' : '') +
      '<div id="' + id + '-err" class="pn-error" aria-live="polite"></div></div>';
  }

  function renderForm(container, fields, values, prefix) {
    if (!container) return;
    var groups = [];
    fields.forEach(function (f) {
      var g = groups.filter(function (x) { return x.name === f.group; })[0];
      if (!g) { g = { name: f.group, fields: [] }; groups.push(g); }
      g.fields.push(f);
    });
    container.innerHTML = groups.map(function (g) {
      return '<fieldset class="pn-fieldset"><legend class="pn-legend">' + esc(g.name) + '</legend>' +
        '<div class="pn-form-grid">' + g.fields.map(function (f) { return fieldHtml(f, values, prefix); }).join('') + '</div></fieldset>';
    }).join('');
  }

  function validate(fields, prefix) {
    var values = {}, errors = {};
    fields.forEach(function (f) {
      var el = $(prefix + '-' + f.key);
      var raw = el ? String(el.value).trim() : '';
      values[f.key] = raw;
      if (raw === '') { if (f.required) errors[f.key] = f.label + ' is required.'; return; }
      if (f.type === 'number') {
        var n = Number(raw);
        if (!isFinite(n)) { errors[f.key] = f.label + ' must be a finite number.'; return; }   // rejects NaN / ±Infinity
        if (f.gt0 && n <= 0) { errors[f.key] = f.label + ' must be greater than 0.'; return; }
        if (f.min != null && n < f.min) { errors[f.key] = f.label + ' must be at least ' + f.min + '.'; return; }
        if (f.max != null && n > f.max) { errors[f.key] = f.label + ' must be at most ' + f.max + '.'; return; }
        values[f.key] = n;
      }
    });
    return { values: values, errors: errors };
  }

  function showErrors(fields, prefix, errors) {
    var firstBad = null;
    fields.forEach(function (f) {
      var el = $(prefix + '-' + f.key), out = $(prefix + '-' + f.key + '-err');
      var msg = errors[f.key] || '';
      if (out) out.textContent = msg;
      if (el) {
        el.classList.toggle('pn-invalid', !!msg);
        if (msg) { el.setAttribute('aria-invalid', 'true'); if (!firstBad) firstBad = el; } else el.removeAttribute('aria-invalid');
      }
    });
    if (firstBad) firstBad.focus();
  }

  // ---- Scenario summary / strips ---------------------------------------------
  function scenarioRows(s) {
    var rows = [['Mission profile', s.profile], ['Habitat type', s.habitatType], ['Gravity regime', s.gravity],
      ['Oxygen concentration', s.oxygen !== '' && s.oxygen != null ? s.oxygen + ' %' : ''],
      ['Pressure', s.pressure !== '' && s.pressure != null ? s.pressure + ' kPa' : ''],
      ['Airflow', s.airflow !== '' && s.airflow != null ? s.airflow + ' cm/s' : ''],
      ['Fuel / material', s.fuel]];
    return rows.filter(function (r) { return r[1] !== '' && r[1] != null; });
  }

  function renderSummary() {
    var box = $('scenarioSummary');
    if (!box) return;
    var s = state.scenario;
    if (!s) {
      box.innerHTML = U.stateBox('empty', 'No scenario submitted yet', 'Fill in the form and select “Submit scenario”. The summary appears here and stays available on the other pages during this browser session.');
      return;
    }
    box.innerHTML =
      '<dl class="pn-dl">' + scenarioRows(s).map(function (r) { return '<div class="pn-dl-row"><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join('') + '</dl>' +
      '<p class="pn-hint" style="margin-top:.75rem">Stored in this browser session only. ' + (A.isConnected() ? '' : 'Backend validation is not connected.') + '</p>' +
      '<div class="pn-actions">' +
        '<button type="button" id="scenarioEdit" class="pn-btn-secondary px-4 py-2 text-xs">Edit scenario</button>' +
        '<button type="button" id="scenarioContinue" class="btn-pill-action px-4 py-2 text-xs">Continue to Investigations →</button>' +
      '</div>';
    $('scenarioEdit').addEventListener('click', function () { var f = $('sc-' + SCENARIO_FIELDS[0].key); if (f) { f.scrollIntoView({ behavior: 'smooth', block: 'center' }); f.focus(); } });
    $('scenarioContinue').addEventListener('click', function () { global.switchView('explorer'); });
  }

  function updateStrips() {
    var s = state.scenario;
    var html;
    if (!s) {
      html = '<span class="pn-strip-label">No active scenario</span><span class="pn-strip-text">Submit a scenario in Mission Workspace first.</span>' +
        '<button type="button" class="pn-btn-secondary px-3 py-1.5 text-xs" onclick="switchView(\'mission\')">Open Mission Workspace</button>';
    } else {
      html = '<span class="pn-strip-label">Active scenario</span><span class="pn-strip-text">' +
        scenarioRows(s).map(function (r) { return '<span class="pn-chip"><b>' + esc(r[0]) + ':</b> ' + esc(r[1]) + '</span>'; }).join('') + '</span>' +
        '<button type="button" class="pn-btn-secondary px-3 py-1.5 text-xs" onclick="switchView(\'mission\')">Edit scenario</button>';
    }
    Array.prototype.forEach.call(document.querySelectorAll('[data-pn-strip]'), function (el) { el.innerHTML = html; });
  }

  function submitScenario(e) {
    e.preventDefault();
    var res = validate(SCENARIO_FIELDS, 'sc');
    showErrors(SCENARIO_FIELDS, 'sc', res.errors);
    if (Object.keys(res.errors).length) return;
    state.scenario = res.values;
    save(SCENARIO_KEY, res.values);
    renderSummary();
    updateStrips();
    if (A.isConnected()) {
      // Later: POST the scenario and map 422 field errors back with showErrors().
      A.call('scenario', res.values).catch(function () { /* surfaced on the result pages */ });
    }
  }

  function resetScenario() {
    state.scenario = null;
    save(SCENARIO_KEY, null);
    renderForm($('missionForm'), SCENARIO_FIELDS, {}, 'sc');
    renderSummary();
    updateStrips();
  }

  // ---- Running an action (shared by every API-backed button) -----------------
  function retryBtn(key) { return '<button type="button" class="btn-pill-action px-4 py-2 text-xs" style="margin-top:.6rem" data-pn-retry="' + key + '">Retry</button>'; }

  function renderResponse(key, data) {
    // Formatted views are added when the response schema is confirmed. Until then show it as-is.
    if (key === 'discover' && Array.isArray(data) && data.length === 0) return U.stateBox('empty', TEXT.noRecords);
    return U.stateBox('info', 'Response received', 'A formatted view will replace this once the response schema is mapped.') +
      '<pre class="pn-pre" tabindex="0">' + esc(JSON.stringify(data, null, 2)) + '</pre>';
  }

  function run(key, btn, resultEl, payload) {
    var meta = actionLabels[key];
    resultEl.innerHTML = U.stateBox('loading', 'Running…', meta.path);
    U.setBusy(btn, true, meta.busy);
    A.call(key, payload).then(function (data) {
      resultEl.innerHTML = renderResponse(key, data);
    }).catch(function (err) {
      err = err || {};
      if (err.code === 'NOT_CONNECTED') {
        resultEl.innerHTML = U.stateBox('notconnected', 'Backend not connected',
          'This action will call ' + meta.path + ' once the API is wired. No results are shown because none were requested from a backend.');
      } else if (err.status === 422) {
        resultEl.innerHTML = U.stateBox('error', 'Check the highlighted values', err.message || 'The backend rejected one or more values.');
      } else if (err.code === 'OFFLINE' || err.code === 'TIMEOUT') {
        resultEl.innerHTML = U.stateBox('offline', 'API offline', err.message || 'Could not reach the API.', retryBtn(key));
      } else if (err.status >= 500 || err.status === 501) {
        resultEl.innerHTML = U.stateBox('unavailable', 'Feature unavailable', err.message || 'The backend could not complete this request.', retryBtn(key));
      } else {
        resultEl.innerHTML = U.stateBox('error', 'Unexpected response', err.message || 'The response could not be read.', retryBtn(key));
      }
      var r = resultEl.querySelector('[data-pn-retry]');
      if (r) r.addEventListener('click', function () { run(key, btn, resultEl, payload); });
    }).then(function () { U.setBusy(btn, false); });
  }

  function runScenarioAction(key, btn) {
    var result = $('pn-result-' + key);
    if (!result) return;
    if (!state.scenario) {
      result.innerHTML = U.stateBox('empty', 'No active scenario', 'Submit a scenario in Mission Workspace before running this step.',
        '<button type="button" class="btn-pill-action px-4 py-2 text-xs" style="margin-top:.6rem" onclick="switchView(\'mission\')">Go to Mission Workspace</button>');
      return;
    }
    run(key, btn, result, state.scenario);
  }

  // ---- Burn Time Estimator -----------------------------------------------------
  function burnPlaceholder() {
    return '<div class="pn-result-card"><div class="pn-result-label">Predicted burn time</div>' +
      '<div class="pn-result-value">— <span class="pn-unit">s</span></div>' +
      '<p class="pn-hint">No estimate yet. Enter the eight model features and select “Estimate burn time”.</p></div>';
  }

  function submitBurn(e) {
    e.preventDefault();
    var res = validate(BURN_FIELDS, 'bt');
    showErrors(BURN_FIELDS, 'bt', res.errors);
    var out = $('pn-result-burnTime');
    if (Object.keys(res.errors).length) {
      out.innerHTML = U.stateBox('error', 'Check the highlighted inputs', 'All eight model features are required and must be valid numbers where a unit is shown.');
      return;
    }
    state.burnInputs = res.values;
    save(BURN_KEY, res.values);
    run('burnTime', $('burnSubmit'), out, res.values);
  }

  // ---- API status indicator ------------------------------------------------------
  function setApiStatus(kind) {
    var map = {
      off:      { pill: 'API: OFF', title: 'Backend not connected', badge: 'API: NOT CONNECTED' },
      checking: { pill: 'API: …',   title: 'Checking API connection', badge: 'API: CHECKING' },
      ok:       { pill: 'API: OK',  title: 'API reachable (this does not mean NASA data is verified)', badge: 'API: REACHABLE' },
      down:     { pill: 'API: DOWN', title: 'API offline', badge: 'API: OFFLINE' }
    };
    var m = map[kind] || map.off;
    var pill = $('pnApiPill'), badge = $('pnApiStatus');
    if (pill) { pill.textContent = m.pill; pill.title = m.title; pill.setAttribute('aria-label', m.title); pill.setAttribute('data-state', kind); }
    if (badge) badge.textContent = m.badge;
  }

  function refreshApiStatus() {
    if (!A.isConnected()) { setApiStatus('off'); return; }
    setApiStatus('checking');
    A.ping().then(function (ok) { setApiStatus(ok ? 'ok' : 'down'); });
  }

  // ---- Init ------------------------------------------------------------------------
  function init() {
    state.scenario = load(SCENARIO_KEY);
    state.burnInputs = load(BURN_KEY);

    renderForm($('missionForm'), SCENARIO_FIELDS, state.scenario || {}, 'sc');
    renderForm($('burnForm'), BURN_FIELDS, state.burnInputs || {}, 'bt');

    var mf = $('missionFormEl'); if (mf) mf.addEventListener('submit', submitScenario);
    var mr = $('missionReset'); if (mr) mr.addEventListener('click', resetScenario);
    var bf = $('burnFormEl'); if (bf) bf.addEventListener('submit', submitBurn);
    var bs = $('burnSample');
    if (bs) bs.addEventListener('click', function () {
      renderForm($('burnForm'), BURN_FIELDS, BURN_SAMPLE, 'bt');
      showErrors(BURN_FIELDS, 'bt', {});
    });
    var br = $('burnReset');
    if (br) br.addEventListener('click', function () {
      state.burnInputs = null; save(BURN_KEY, null);
      renderForm($('burnForm'), BURN_FIELDS, {}, 'bt');
      $('pn-result-burnTime').innerHTML = burnPlaceholder();
    });
    if ($('pn-result-burnTime')) $('pn-result-burnTime').innerHTML = burnPlaceholder();

    Array.prototype.forEach.call(document.querySelectorAll('[data-pn-action]'), function (btn) {
      btn.addEventListener('click', function () { runScenarioAction(btn.getAttribute('data-pn-action'), btn); });
    });

    renderSummary();
    updateStrips();
    refreshApiStatus();
  }

  global.PN_PAGES = { init: init, TEXT: TEXT };
})(window);
