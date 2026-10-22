(function () {
  "use strict";
  var journalIds = ["59", "63.5", "61.5", "66.5"];
  var legacyJournals = { avansi: "61.5", rekini: "63.5", kase: "66.5" };
  function read(params, allModules) {
    var requested = (params.get("modules") || "").split(",").filter(Boolean);
    var journals = (params.get("journal_sections") || "").split(",").filter(function (id) {
      return journalIds.indexOf(id) >= 0;
    });
    var legacy = params.get("structure") !== "2";
    var mapped = [];
    function add(id) { if (mapped.indexOf(id) < 0) mapped.push(id); }
    requested.forEach(function (id) {
      if (legacyJournals[id]) {
        add("pirmdokumenti");
        if (!params.has("journal_sections")) journals.push(legacyJournals[id]);
      } else if (legacy && id === "maksajumi") {
        add("pirmdokumenti");
        if (!params.has("journal_sections") || journals.indexOf("59") >= 0) add("maksajumi");
      } else if (id === "atskaisu-noskanas") {
        add("papildfunkcijas");
      } else {
        add(id);
        if (legacy && id === "dokumenti") add("sasaistes");
      }
    });
    if (legacy && requested.indexOf("maksajumi") >= 0 && !params.has("journal_sections")) journals = journalIds.slice();
    if (!params.has("journal_sections") && !journals.length) journals = journalIds.slice();
    var modules = requested.length ? allModules.filter(function (id) { return id === "pamati" || mapped.indexOf(id) >= 0; }) : allModules.slice();
    journals = modules.indexOf("pirmdokumenti") >= 0 ? journalIds.filter(function (id) { return journals.indexOf(id) >= 0; }) : [];
    return { modules: modules, journalSections: journals };
  }
  function includes(state, module, section) {
    return state.modules.indexOf(module) >= 0 &&
      (module !== "pirmdokumenti" || state.journalSections.indexOf(String(section)) >= 0);
  }
  window.FinawinSelection = { read: read, includes: includes, journalIds: journalIds };
}());
