(function () {
  var state = { kategorie: "", alter: "", staerke: "", phase: "", q: "" };
  var cards = Array.prototype.slice.call(document.querySelectorAll("#uebungen-grid .card-exercise"));
  var countEl = document.getElementById("filter-count");
  var emptyEl = document.getElementById("filter-empty");
  var searchEl = document.getElementById("filter-search");

  function apply() {
    var visible = 0;
    cards.forEach(function (card) {
      var ok =
        (!state.kategorie || card.dataset.kategorie === state.kategorie) &&
        (!state.alter || card.dataset.alter.split(" ").indexOf(state.alter) !== -1) &&
        (!state.staerke || card.dataset.staerke === state.staerke) &&
        (!state.phase || card.dataset.phase === state.phase) &&
        (!state.q || card.dataset.text.indexOf(state.q) !== -1);
      card.hidden = !ok;
      if (ok) visible++;
    });
    countEl.textContent = visible + " von " + cards.length + " Übungen";
    emptyEl.hidden = visible !== 0;
  }

  document.querySelectorAll(".filter-group").forEach(function (group) {
    var facet = group.dataset.facet;
    group.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      state[facet] = btn.dataset.value;
      group.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
      btn.classList.add("is-active");
      apply();
    });
  });

  searchEl.addEventListener("input", function () {
    state.q = searchEl.value.trim().toLowerCase();
    apply();
  });

  apply();
})();
