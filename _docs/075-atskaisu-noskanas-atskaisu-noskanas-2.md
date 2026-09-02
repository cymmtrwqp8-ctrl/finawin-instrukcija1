---
title: "Atskaišu noskaņas"
module: atskaisu-noskanas
order: 75
module_order: 9
level: 2
layout: doc
permalink: /docs/atskaisu-noskanas-atskaisu-noskanas-2/
---
## Atskaišu noskaņas

MenuDatubāzeAtskaišu noskaņas

Funkcijā definē atskaišu rindas un rindu formulas.

Pielietojuma piemēri: PZA, Bilance, Naudas plūsma, PVN deklarācija, Budžeta izpildes pārskats u.t.t.

### Atskaites

Definē dažādas atskaites -rindiņu komplektus

### Atskaišu rindas

Definē atskaišu rindiņas

### Atskaišu rindu formulas

Definē atskaišu rindiņu satura formulas.

Vienai rindiņai var būt viena, vairākas vai neviena formulas rindiņa.

Formulas rindiņa satur filtra informāciju, pēc kura atlasīt virsgrāmatas datus.

Izmantojamie lauki:

Konts: Filtrs uz kontu

Kor.konts: Filtrs uz korespondējošo kontu

F (Funkcija): Var būt vērtības : \> vai \< vai + vai - vai D vai K

\> Virsgrāmatas Debeta apgrozījums

\< Virsgrāmatas Kredīta apgrozījums

\+ Kopējais Virsgrāmatas Debeta saldo

\- Kopējais Virsgrāmatas Kredīta saldo

D Virsgrāmatas Debeta saldo summa partneriem, kam ir debeta saldo

K Virsgrāmatas Kredīta saldo summa partneriem, kam ir kredīta saldo

Koef: Koeficients, ar kuru pareizināt summu beigās

Komentārs: Formulas komentārs

Partneris: Filtrs uz grāmatojuma partnera kodu

Adr: Filtrs uz grāmatojuma dimensiju «Iekšējā adrese»

Projekts: Filtrs uz grāmatojuma dimensiju «Projekts»

BU Kods: Filtrs uz grāmatojuma dimensiju «Budžeta kods»

Process: Filtrs uz grāmatojuma dimensiju «Process»

Pveids: Filtrs uz grāmatojuma dimensiju «Preces/Pakalpojuma veids»

Filtri darbojas pēc principa «iekļaut visus, kas sākas ar norādīto filtra vērtību.

<img src="{{ site.baseurl }}/assets/images/image180.png" alt="A screenshot of a computer AI-generated content may be incorrect." />

**Attēls Atskaišu noskaņas**

### Atskaišu noskaņu pielietojums atskaišu ģeneratorā

Atskaites kods, kas izveidots funkcijā “Atskaišu noskaņas” ietver atskaites rindu un to satura definīcijas. Tas nenosaka , kā atskaite izskatīsies vizuāli.

Atskaites vizuālais noformējums tiek noteikts ar rīku “Atskaišu ģenerators” , ar kura palīdzību var zīmēt atskaites vizuālos elementus.

Viena “Atskaišu ģenerators” atskaite var izmantot dažādus “Atskaišu noskaņu” kodus - tad nemainoties vizuālajam noformējumam, tiks parādīti dažādi rindiņu komplekti un summas.

Vienam “Atskaišu noskaņu” kodam var sagatavot dažādas “Atskaišu ģenerators” atskaites - tad nemainoties rindiņu komplektam un summu aprēķina algoritmam, tiks parādīti dažādi vizuālie noformējumi. Piemēram. “Atskaišu noskaņu” kodu 103 (PZA rindiņas) var attēlot kā:

- PZA ar 2 summu kolonām - Atskaites periods un Salīdzinošais periods

- PZA ar summām pa mēnešiem - Summas par norādīto periodu tiek parādītas pa mēnešiem

- PZA rindiņu atšifrējums - Parāda kādi konti iekļauti summā
