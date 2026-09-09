(function () {
  "use strict";
  var body = document.body;
  var baseurl = body.dataset.baseurl || "";
  var params = new URLSearchParams(window.location.search);
  var moduleBoxes = Array.from(document.querySelectorAll(".module-options input[data-module-option]"));
  var journalBoxes = Array.from(document.querySelectorAll(".module-options input[data-journal-option]"));
  var allModules = moduleBoxes.map(function (box) { return box.value; });
  var allJournalSections = journalBoxes.map(function (box) { return box.value; });
  var requested = (params.get("modules") || "").split(",").filter(Boolean);
  var legacyJournalSections = [];
  if (requested.indexOf("avansi") >= 0) legacyJournalSections.push("61.5");
  if (requested.indexOf("rekini") >= 0) legacyJournalSections.push("63.5");
  if (requested.indexOf("kase") >= 0) legacyJournalSections.push("66.5");
  var explicitlyRequestedJournal = requested.indexOf("maksajumi") >= 0;
  if (legacyJournalSections.length) {
    requested.push("maksajumi");
  }
  var selected = requested.length ? Array.from(new Set(["pamati"].concat(requested.filter(function (id) { return allModules.indexOf(id) >= 0; })))) : allModules;
  var requestedJournalSections = (params.get("journal_sections") || "").split(",").filter(function (id) {
    return allJournalSections.indexOf(id) >= 0;
  });
  var selectedJournalSections = selected.indexOf("maksajumi") < 0 ? [] :
    (params.has("journal_sections") ? requestedJournalSections :
      (!explicitlyRequestedJournal && legacyJournalSections.length ? legacyJournalSections : allJournalSections.slice()));
  selectedJournalSections = allJournalSections.filter(function (id) { return selectedJournalSections.indexOf(id) >= 0; });
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("backdrop");
  var dialog = document.getElementById("module-dialog");
  var search = document.getElementById("search");
  var searchResults = document.getElementById("search-results");
  var navigation = document.getElementById("navigation");
  var searchIndex = null;

  var currentSection = params.get("section");
  var currentSectionLink = currentSection ? document.querySelector('.doc-link[data-section="' + currentSection + '"]') : null;
  var openModuleId = body.dataset.pageModule || (currentSectionLink ? currentSectionLink.dataset.module : "");

  function setSelectionParams(url) {
    url.searchParams.set("modules", selected.join(","));
    if (selected.indexOf("maksajumi") >= 0 && selectedJournalSections.length) {
      url.searchParams.set("journal_sections", selectedJournalSections.join(","));
    } else {
      url.searchParams.delete("journal_sections");
    }
    return url;
  }

  function syncSelectionControls() {
    moduleBoxes.forEach(function (box) {
      box.checked = selected.indexOf(box.value) >= 0;
      box.indeterminate = false;
    });
    journalBoxes.forEach(function (box) {
      box.checked = selectedJournalSections.indexOf(box.value) >= 0;
    });
    var parent = document.querySelector('input[data-module-option][value="maksajumi"]');
    if (parent) {
      parent.checked = selectedJournalSections.length === allJournalSections.length;
      parent.indeterminate = selectedJournalSections.length > 0 && selectedJournalSections.length < allJournalSections.length;
    }
  }

  function syncModuleMenu() {
    document.querySelectorAll(".module-toggle").forEach(function (toggle) {
      var isOpen = toggle.dataset.moduleToggle === openModuleId;
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    document.querySelectorAll(".module-links").forEach(function (links) {
      links.hidden = links.dataset.moduleLinks !== openModuleId;
    });
  }

  if (currentSection) {
    document.querySelectorAll(".doc-link[data-section]").forEach(function (link) {
      link.classList.toggle("active", link.dataset.section === currentSection);
    });
  }

  function applyModules() {
    document.querySelectorAll("[data-module]").forEach(function (element) {
      element.hidden = selected.indexOf(element.dataset.module) < 0;
    });
    document.querySelectorAll('.doc-link[data-module="maksajumi"][data-journal-section]').forEach(function (link) {
      link.hidden = selected.indexOf("maksajumi") < 0 || selectedJournalSections.indexOf(link.dataset.journalSection) < 0;
    });
    syncSelectionControls();
    document.querySelectorAll("a[href]").forEach(function (link) {
      if (!link.href || link.origin !== window.location.origin) return;
      link.href = setSelectionParams(new URL(link.href)).toString();
    });
    syncModuleMenu();
  }

  function openDialog() {
    syncSelectionControls();
    dialog.showModal();
  }

  function openMenu() {
    sidebar.classList.add("open");
    backdrop.hidden = false;
  }

  function closeMenu() {
    sidebar.classList.remove("open");
    backdrop.hidden = true;
  }

  document.getElementById("menu-button").addEventListener("click", openMenu);
  backdrop.addEventListener("click", closeMenu);
  document.getElementById("module-button").addEventListener("click", openDialog);
  document.getElementById("mobile-module-button").addEventListener("click", openDialog);
  document.querySelectorAll(".doc-link").forEach(function (link) { link.addEventListener("click", closeMenu); });
  document.querySelectorAll(".module-toggle").forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var wasOpen = toggle.getAttribute("aria-expanded") === "true";
      openModuleId = wasOpen ? "" : toggle.dataset.moduleToggle;
      syncModuleMenu();
      if (!wasOpen && toggle.dataset.firstUrl) {
        var targetUrl = toggle.dataset.firstUrl;
        if (toggle.dataset.moduleToggle === "maksajumi" && selectedJournalSections.length) {
          var firstJournalLink = document.querySelector('.doc-link.major[data-module="maksajumi"][data-journal-section="' + selectedJournalSections[0] + '"]');
          if (firstJournalLink) targetUrl = firstJournalLink.href;
        }
        window.location.assign(setSelectionParams(new URL(targetUrl, window.location.origin)).toString());
      }
    });
  });

  moduleBoxes.forEach(function (box) {
    box.addEventListener("change", function () {
      if (box.value === "maksajumi") {
        selectedJournalSections = box.checked ? allJournalSections.slice() : [];
      }
      if (box.checked) {
        if (selected.indexOf(box.value) < 0) selected.push(box.value);
      } else {
        selected = selected.filter(function (id) { return id !== box.value; });
      }
      if (selected.indexOf("pamati") < 0) selected.unshift("pamati");
      syncSelectionControls();
    });
  });

  journalBoxes.forEach(function (box) {
    box.addEventListener("change", function () {
      if (box.checked && selectedJournalSections.indexOf(box.value) < 0) selectedJournalSections.push(box.value);
      if (!box.checked) selectedJournalSections = selectedJournalSections.filter(function (id) { return id !== box.value; });
      selectedJournalSections = allJournalSections.filter(function (id) { return selectedJournalSections.indexOf(id) >= 0; });
      if (selectedJournalSections.length && selected.indexOf("maksajumi") < 0) selected.push("maksajumi");
      if (!selectedJournalSections.length) selected = selected.filter(function (id) { return id !== "maksajumi"; });
      syncSelectionControls();
    });
  });

  document.getElementById("copy-link").addEventListener("click", function () {
    var url = new URL(baseurl + "/", window.location.origin);
    setSelectionParams(url);
    navigator.clipboard.writeText(url.toString()).then(function () {
      var button = document.getElementById("copy-link");
      button.textContent = "Saite nokopēta";
      window.setTimeout(function () { button.textContent = "Kopēt klienta saiti"; }, 1800);
      applyModules();
    });
  });

  function renderSearch(items) {
    searchResults.innerHTML = "";
    var count = document.createElement("p");
    count.className = "search-count";
    count.textContent = "Atrasts: " + items.length;
    searchResults.appendChild(count);
    items.slice(0, 40).forEach(function (item) {
      var link = document.createElement("a");
      link.className = "search-result";
      link.href = setSelectionParams(new URL(item.url, window.location.origin)).toString();
      link.textContent = item.title;
      var module = document.createElement("small");
      module.textContent = item.module;
      link.appendChild(module);
      searchResults.appendChild(link);
    });
  }

  function enableImageLightbox() {
    var lightbox = document.getElementById("image-lightbox");
    var preview = document.getElementById("image-lightbox-preview");
    var caption = document.getElementById("image-lightbox-caption");
    var closeButton = lightbox ? lightbox.querySelector(".image-lightbox-close") : null;
    if (!lightbox || !preview || !caption || !closeButton) return;

    function closeLightbox() {
      lightbox.close();
    }

    document.querySelectorAll(".manual-content img").forEach(function (image) {
      image.classList.add("zoomable-image");
      image.setAttribute("tabindex", "0");
      image.setAttribute("role", "button");
      image.setAttribute("aria-label", (image.alt ? image.alt + ". " : "") + "Atvērt attēlu lielākā skatā");

      function openLightbox() {
        preview.src = image.currentSrc || image.src;
        preview.alt = image.alt || "Palielināts instrukcijas attēls";
        caption.textContent = image.alt || "";
        caption.hidden = !image.alt;
        lightbox.showModal();
      }

      image.addEventListener("click", openLightbox);
      image.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox();
        }
      });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener("close", function () {
      preview.removeAttribute("src");
    });
  }

  search.addEventListener("input", function () {
    var term = search.value.trim().toLocaleLowerCase("lv");
    if (!term) {
      searchResults.hidden = true;
      navigation.hidden = false;
      return;
    }
    navigation.hidden = true;
    searchResults.hidden = false;
    var show = function () {
      var matches = searchIndex.filter(function (item) {
        var journalMatches = item.module !== "maksajumi" || selectedJournalSections.indexOf(String(item.section)) >= 0;
        return selected.indexOf(item.module) >= 0 && journalMatches && (item.title + " " + item.content).toLocaleLowerCase("lv").indexOf(term) >= 0;
      });
      renderSearch(matches);
    };
    if (searchIndex) show();
    else fetch(baseurl + "/search.json").then(function (response) { return response.json(); }).then(function (data) { searchIndex = data; show(); });
  });

  applyModules();
  enableImageLightbox();
}());
