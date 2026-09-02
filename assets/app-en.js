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

  function applyModules() {
    document.querySelectorAll("[data-module]").forEach(function (element) { element.hidden = selected.indexOf(element.dataset.module) < 0; });
    document.querySelectorAll(".module-options input").forEach(function (box) { box.checked = selected.indexOf(box.value) >= 0; });
    document.querySelectorAll("a[href]").forEach(function (link) {
      if (!link.href || link.origin !== window.location.origin) return;
      var url = new URL(link.href);
      url.searchParams.set("modules", selected.join(","));
      link.href = url.toString();
    });
  }
  function openDialog() { dialog.showModal(); }
  function openMenu() { sidebar.classList.add("open"); backdrop.hidden = false; }
  function closeMenu() { sidebar.classList.remove("open"); backdrop.hidden = true; }

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
    var url = new URL(baseurl + "/en/", window.location.origin);
    url.searchParams.set("modules", selected.join(","));
    navigator.clipboard.writeText(url.toString()).then(function () {
      var button = document.getElementById("copy-link");
      button.textContent = "Link copied";
      window.setTimeout(function () { button.textContent = "Copy client link"; }, 1800);
      applyModules();
    });
  });
  applyModules();
}());
