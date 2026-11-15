/* ============================================================================
   ui.js — shared UI helpers for PyroNull pages.
   No data and no network access here. Provides: escapeHtml, state boxes
   (loading / empty / error / offline / unavailable / not connected / info),
   button busy state, provenance label, modal open/close.
   ============================================================================ */
(function (global) {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var ICONS = { info: 'i', empty: '∅', error: '!', offline: '!', unavailable: '!', notconnected: '⚡' };

  /**
   * One visual component for every non-success state.
   * kind: loading | empty | error | offline | unavailable | notconnected | info
   * actionHtml is trusted developer markup (e.g. a Retry button), never API data.
   */
  function stateBox(kind, title, body, actionHtml) {
    var role = (kind === 'error' || kind === 'offline' || kind === 'unavailable') ? 'alert' : 'status';
    var icon = kind === 'loading'
      ? '<span class="pn-spinner" aria-hidden="true"></span>'
      : '<span class="pn-state-glyph" aria-hidden="true">' + (ICONS[kind] || 'i') + '</span>';
    return '<div class="pn-state pn-state-' + kind + '" role="' + role + '">' +
      '<div class="pn-state-icon">' + icon + '</div>' +
      '<div class="pn-state-text">' +
        '<div class="pn-state-title">' + escapeHtml(title) + '</div>' +
        (body ? '<p class="pn-state-body">' + escapeHtml(body) + '</p>' : '') +
        (actionHtml || '') +
      '</div></div>';
  }

  /** Disable a button and show a busy label while a request runs. */
  function setBusy(btn, busy, busyLabel) {
    if (!btn) return;
    if (busy) {
      if (!btn.dataset.label) btn.dataset.label = btn.textContent;
      btn.disabled = true;
      btn.setAttribute('aria-busy', 'true');
      btn.textContent = busyLabel || 'Running…';
    } else {
      btn.disabled = false;
      btn.removeAttribute('aria-busy');
      if (btn.dataset.label) btn.textContent = btn.dataset.label;
    }
  }

  /** Provenance is always a text label, never colour alone. Status comes from the API only. */
  function provenanceBadge(status) {
    if (!status) return '<span class="pn-prov pn-prov-none">Not provided</span>';
    return '<span class="pn-prov">' + escapeHtml(String(status).replace(/_/g, ' ')) + '</span>';
  }

  // ---- Modal (reuses #appModal from index.html) -----------------------------
  var lastFocus = null;

  function openModal(badge, title, html) {
    var modal = document.getElementById('appModal');
    if (!modal) return;
    document.getElementById('modalBadge').textContent = badge || '';
    document.getElementById('modalTitle').textContent = title || '';
    document.getElementById('modalContent').innerHTML = html || '';
    lastFocus = document.activeElement;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    var closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    var modal = document.getElementById('appModal');
    if (!modal || modal.classList.contains('hidden')) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) { /* ignore */ } }
  }

  // Keep Tab inside the open modal.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var modal = document.getElementById('appModal');
    if (!modal || modal.classList.contains('hidden')) return;
    var focusables = modal.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    var first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  global.PN_UI = { escapeHtml: escapeHtml, stateBox: stateBox, setBusy: setBusy, provenanceBadge: provenanceBadge, openModal: openModal, closeModal: closeModal };
  global.openModal = openModal;
  global.closeModal = closeModal;
})(window);
