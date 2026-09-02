(function () {
  "use strict";
  var body = document.body;
  var baseurl = body.dataset.baseurl || "";
  var params = new URLSearchParams(window.location.search);
  var allModules = Array.from(document.querySelectorAll(".module-options input")).map(function (box) { return box.value; });
  var requested = (params.get("modules") || "").split(",").filter(Boolean);
  var selected = requested.length ? Array.from(new Set(["pamati"].concat(requested.filter(function (id) { return allModules.indexOf(id) >= 0; })))) : allModules;
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("backdrop");
  var dialog = document.getElementById("module-dialog");
  var search = document.getElementById("search");
  var searchResults = document.getElementById("search-results");
  var navigation = document.getElementById("navigation");
  var searchIndex = null;

  function applyModules() {
    document.querySelectorAll("[data-module]").forEach(function (element) {
      element.hidden = selected.indexOf(element.dataset.module) < 0;
    });
    document.querySelectorAll(".module-options input").forEach(function (box) {
      box.checked = selected.indexOf(box.value) >= 0;
    });
    document.querySelectorAll("a[href]").forEach(function (link) {
      if (!link.href || link.origin !== window.location.origin) return;
      var url = new URL(link.href);
      url.searchParams.set("modules", selected.join(","));
      link.href = url.toString();
    });
  }

  function openDialog() {
    document.querySelectorAll(".module-options input").forEach(function (box) {
      box.checked = selected.indexOf(box.value) >= 0;
    });
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

  document.querySelectorAll(".module-options input").forEach(function (box) {
    box.addEventListener("change", function () {
      selected = Array.from(document.querySelectorAll(".module-options input:checked")).map(function (input) { return input.value; });
      if (selected.indexOf("pamati") < 0) selected.unshift("pamati");
    });
  });

  document.getElementById("copy-link").addEventListener("click", function () {
    var url = new URL(baseurl + "/", window.location.origin);
    url.searchParams.set("modules", selected.join(","));
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
      var url = new URL(item.url, window.location.origin);
      url.searchParams.set("modules", selected.join(","));
      link.href = url.toString();
      link.textContent = item.title;
      var module = document.createElement("small");
      module.textContent = item.module;
      link.appendChild(module);
      searchResults.appendChild(link);
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
        return selected.indexOf(item.module) >= 0 && (item.title + " " + item.content).toLocaleLowerCase("lv").indexOf(term) >= 0;
      });
      renderSearch(matches);
    };
    if (searchIndex) show();
    else fetch(baseurl + "/search.json").then(function (response) { return response.json(); }).then(function (data) { searchIndex = data; show(); });
  });

  applyModules();
}());
