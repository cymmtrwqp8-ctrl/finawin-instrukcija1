---
title: "Avansa norēķini- čeki"
module: avansi
order: 62
module_order: 5
level: 2
layout: doc
permalink: /docs/avansi-avansa-norekini-ceki/
---
## Avansa norēķini- čeki

Šis logs attēlo avansu čeku ievades un uzskaites sarakstu, kas ir daļa no avansa norēķinu (avansa atskaišu) moduļa.

Šeit tiek ievadīti un apkopoti visi darbinieku iesniegtie čeki un rēķini, kas saistīti ar uzņēmuma līdzekļu izmantošanu avansa ietvaros - piemēram, biroja preču, komandējumu vai citu saimniecisko izdevumu apmaksai. Šī sadaļa nodrošina daļu no cikla: čeka ievadi un pārbaudi, vēlāk apskatīsim sadaļu [Avansu norēķinu atskaites](#avansa-norēķini--atskaites), kur čeki tiek sasaistīti ar atskaitēm un iegrāmatoti.

Rezultātā uzņēmums var precīzi kontrolēt darbinieku avansu izmantošanu, nodrošinot caurspīdīgu un grāmatvedības prasībām atbilstošu izdevumu uzskaiti.

### Avansa norēķini- čeki- vispārēji

<img src="{{ site.baseurl }}/assets/images/image135.png" alt="A screenshot of a computer AI-generated content may be incorrect." />

> **Attēls Avansa norēķinu čeki**

Šajā logā iespējams izvēlēties period, pēc kāda apskatīt iesniegtos čekus. Iespējams tos filtrēt pēc vienas norēķinu personas, kā arī izvēlēties iekļaut sarakstā jau atskaitēs pievienotos čekus, vai neiekļaut.

**Šajā logā iespējams veikt dažādas darbības ar čekiem:**

Izveidot jaunu čeku - manuāli uzsākt jauna čeka izveidi.

Pievienot čeka detaļas - manuāli ievadīt čeka detaļas/rindiņas

Apstiprināt čeku

### Jauna čeka ievade

<img src="{{ site.baseurl }}/assets/images/image136.png" alt="A white rectangular sign with black text AI-generated content may be incorrect." /> pēc pogas nospiešanas izveidojas jauna rindiņa čeku sarakstā.

<img src="{{ site.baseurl }}/assets/images/image137.png" />

> **Attēls Jauns čeks**

Rindiņu aizpilda ar čeka informāciju. Ar sarkanu atzīmētie lauki aizpildāmi obligāti.

<img src="{{ site.baseurl }}/assets/images/image138.png" />

> **Attēls Avansa norēķini - jauns čeks**

Pēc čeka izveides nepieciešams apstiprināt čeka izveidi (ctrl+enter)

Atrodoties čeka detaļu tabulā ar + simbolu, jeb insert pogu pievienojam čeka 1. rindiņu un to aizpildām. Ar sarkanu atzīmētie lauki jāaizpilda obligāti, pārējos pēc nepieciešamības.

<img src="{{ site.baseurl }}/assets/images/image139.png" alt="A screenshot of a computer AI-generated content may be incorrect." />

> **Attēls Avansa norēķinu čeki-detaļas**

Atkārto +/insert lai pievienotu papildu rindiņas, ja nepieciešams. Pēc PVN lauka aizpildīšanas spiež uz pogas aprēķināt PVN, lai pievienotos PVN summa.

<img src="{{ site.baseurl }}/assets/images/image140.png" alt="A screenshot of a computer AI-generated content may be incorrect." />

> **Attēls Avansa norēķinu čeki-PVN**

Pārliecināmies, ka visas čeka rindiņas aizpildītas pareizi un spiežam uz Čeks ir pārbaudīts.

N.B. Ja čeka rindiņu summa nesakritīs ar čeka cepurē norādīto summu, sistēma neļaus to apstiprināt! Kā piemērs ir summa 10.00 ur ar PVN. Sistēma neļauj iegrāmatot čeku ar rindu 8,26 + PVN 21%, jo, veicot precīzu matemātisko aprēķinu, šī kombinācija dod kopsummu 9,99, nevis 10,00. Starpība rodas PVN aprēķina noapaļošanas dēļ - sistēma aprēķina PVN kā 8,26 × 0,21 = 1,7346, kas pēc noapaļošanas ir 1,73, un rezultātā kopējā summa ir 9,99. Tā kā grāmatvedības sistēmā jānodrošina precīza atbilstība starp summu bez PVN, PVN un kopējo summu, jebkura, pat 0,01 eiro neatbilstība tiek uzskatīta par kļūdu. Lai ieraksts tiktu pieņemts, summas jāievada tā, lai matemātiski kopā veido tieši 10,00, piemēram, 8,27 + PVN 21%.

<img src="{{ site.baseurl }}/assets/images/image141.png" alt="A screenshot of a computer error AI-generated content may be incorrect." />

> **Attēls Avansa norēķinu summas kļūda**
