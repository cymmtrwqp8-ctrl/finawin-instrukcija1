(function () {
  "use strict";
  function initialisePrint() {
    var documentBody = document.querySelector('.print-document');
    if (!documentBody) return;
    var params = new URLSearchParams(window.location.search);
    var group = params.get('section');
    var sections = Array.from(documentBody.querySelectorAll('.print-section'));
    var toc = document.getElementById('print-toc');
    var tocList = document.getElementById('print-toc-list');
    var english = document.documentElement.lang === 'en';
    var legacyMap = { avansi: '61.5', rekini: '63.5', kase: '66.5' };
    var journalIds = ['59', '61.5', '63.5', '66.5'];
    var requested = (params.get('modules') || '').split(',').filter(Boolean);
    var allowed = Array.from(new Set(requested.map(function (id) { return legacyMap[id] ? 'maksajumi' : id; })));
    if (allowed.length && allowed.indexOf('pamati') < 0) allowed.unshift('pamati');
    var journals = (params.get('journal_sections') || '').split(',').filter(function (id) { return journalIds.indexOf(id) >= 0; });
    if (!params.has('journal_sections')) {
      journals = requested.map(function (id) { return legacyMap[id]; }).filter(Boolean);
      if (!journals.length || requested.indexOf('maksajumi') >= 0) journals = journalIds.slice();
    }
    var headingSelector = 'h1,h2,h3,h4,h5,h6';
    var sectionMap = new Map();
    var fragmentMaps = new Map();
    function decoded(value) { try { return decodeURIComponent(value); } catch (error) { return value; } }
    function pathOf(url) { return url.pathname.replace(/\/+$/, '') || '/'; }
    function visible(section) { return !section.hidden && section.style.display !== 'none'; }
    sections.forEach(function (section, index) {
      section.id = 'print-doc-' + (section.dataset.docOrder || String(index + 1)).replace(/[^a-zA-Z0-9_-]/g, '-');
      var fragments = new Map();
      var ids = Array.from(section.querySelectorAll('[id]'));
      ids.forEach(function (element, idIndex) {
        var original = element.id;
        var unique = section.id + '-' + original + '-' + idIndex;
        if (!fragments.has(original)) fragments.set(original, unique);
        element.id = unique;
      });
      Array.from(section.querySelectorAll(headingSelector)).forEach(function (heading, headingIndex) {
        if (!heading.id) heading.id = section.id + '-heading-' + headingIndex;
      });
      fragmentMaps.set(section, fragments);
      if (section.dataset.docUrl) {
        sectionMap.set(pathOf(new URL(section.dataset.docUrl, window.location.href)), section);
      }
      // The source uses bold standalone paragraphs for some subsection titles.
      section.querySelectorAll('p').forEach(function (paragraph) {
        if (paragraph.children.length === 1 && paragraph.firstElementChild.tagName === 'STRONG' &&
            paragraph.textContent.trim() === paragraph.firstElementChild.textContent.trim()) {
          paragraph.classList.add('print-subheading');
        }
      });
    });
    function addLink(item, text, id) {
      var link = document.createElement('a');
      link.href = '#' + id;
      link.dataset.pdfInternal = 'true';
      link.textContent = text;
      item.appendChild(link);
    }
    function buildContents() {
      if (!tocList) return;
      tocList.replaceChildren();
      var parent = null;
      var sublist = null;
      sections.filter(visible).forEach(function (section) {
        var headings = Array.from(section.querySelectorAll(headingSelector));
        if (!headings.length) return;
        var level = section.dataset.level === '1' ? 1 : 2;
        var item = document.createElement('li');
        item.className = 'print-toc-item print-toc-level-' + level;
        addLink(item, headings[0].textContent.trim(), section.id);
        if (level === 1) {
          tocList.appendChild(item); parent = item; sublist = null;
        } else if (parent) {
          if (!sublist) {
            sublist = document.createElement('ol'); sublist.className = 'print-toc-sublist'; parent.appendChild(sublist);
          }
          sublist.appendChild(item);
        } else tocList.appendChild(item);
        if (headings.length > 1) {
          var children = document.createElement('ol');
          children.className = 'print-toc-sublist print-toc-headings';
          headings.slice(1).forEach(function (heading) {
            var child = document.createElement('li'); child.className = 'print-toc-item';
            addLink(child, heading.textContent.trim(), heading.id); children.appendChild(child);
          });
          item.appendChild(children);
        }
      });
      toc.hidden = !tocList.children.length;
    }
    function linkWithinPDF() {
      documentBody.querySelectorAll('a[href]').forEach(function (link) {
        var raw = link.dataset.pdfSourceHref || link.getAttribute('href');
        link.dataset.pdfSourceHref = raw;
        link.removeAttribute('data-pdf-internal');
        link.setAttribute('href', raw);
        var source = link.closest('.print-section');
        if (!source || !visible(source)) return;
        var url;
        try { url = new URL(raw, window.location.href); } catch (error) { return; }
        if (url.origin !== window.location.origin) return;
        var destination = raw.charAt(0) === '#' ? source : sectionMap.get(pathOf(url));
        if (!destination && /\/section\/?$/.test(url.pathname)) {
          destination = sections.find(function (section) { return visible(section) && section.dataset.printGroup === url.searchParams.get('section'); });
        }
        if (!destination && /\/module\/?$/.test(url.pathname)) {
          destination = sections.find(function (section) { return visible(section) && section.dataset.module === url.searchParams.get('module'); });
        }
        if (!destination || !visible(destination)) return;
        var target = destination.id;
        if (url.hash) target = fragmentMaps.get(destination).get(decoded(url.hash.slice(1))) || target;
        link.setAttribute('href', '#' + target);
        link.dataset.pdfInternal = 'true';
      });
    }
    function refresh() {
      sections.forEach(function (section) {
        var included = (!group || section.dataset.printGroup === group) &&
          (!allowed.length || allowed.indexOf(section.dataset.module) >= 0) &&
          (section.dataset.module !== 'maksajumi' || journals.indexOf(section.dataset.printGroup) >= 0);
        section.hidden = !included;
        section.style.display = included ? '' : 'none';
        section.classList.remove('print-first-visible');
      });
      var first = sections.find(visible);
      if (first) first.classList.add('print-first-visible');
      buildContents(); linkWithinPDF();
      if (group && first) {
        var heading = first.querySelector(headingSelector);
        var title = heading ? heading.textContent.trim() : (english ? 'Selected section' : 'Izvēlētā sadaļa');
        document.getElementById('print-title').textContent = title;
        document.getElementById('print-description').textContent = english ? 'The PDF includes the selected section and its subsections.' : 'PDF tiks iekļauta virssadaļa un visas tai piederošās apakšsadaļas.';
        document.getElementById('print-button').textContent = english ? 'Save section as PDF' : 'Saglabāt sadaļu PDF';
        document.title = title + ' · FinaWin';
      } else if (allowed.length) {
        document.getElementById('print-description').textContent = english ? 'The PDF includes the modules selected for this client. Contents and section links remain clickable.' : 'PDF tiks iekļauti klientam izvēlētie moduļi. Satura rādītājs un sadaļu atsauces būs klikšķināmas.';
      }
    }
    document.addEventListener('finawin:selectionchange', function (event) {
      allowed = event.detail.modules.slice();
      if (event.detail.journalSections) journals = event.detail.journalSections.slice();
      refresh();
    });
    window.addEventListener('beforeprint', refresh);
    document.getElementById('print-button').addEventListener('click', async function () {
      var button = this; button.disabled = true;
      try {
        refresh();
        if (document.fonts) await document.fonts.ready;
        var images = Array.from(documentBody.images).filter(function (image) { return visible(image.closest('.print-section')); });
        await Promise.all(images.map(function (image) {
          if (image.complete) return Promise.resolve();
          return new Promise(function (resolve) {
            image.addEventListener('load', resolve, { once: true });
            image.addEventListener('error', resolve, { once: true });
            setTimeout(resolve, 8000);
          });
        }));
        window.print();
      } finally { button.disabled = false; }
    });
    refresh();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialisePrint);
  else initialisePrint();
}());
