---
title: "Bankas izraksta imports"
module: maksajumi
order: 703
module_order: 5
level: 2
layout: doc
permalink: /docs/bankas-izraksta-imports/
---
## Bankas izraksta imports

Bankas izraksta imports ļauj ielasīt FinaWin bankas konta izraksta failu un pēc iepriekš konfigurētiem nosacījumiem automātiski izveidot dokumentus un grāmatojumus.

### Bankas datu importa darbības princips

Importa laikā programma no faila nolasa darījuma datumu, summu, valūtu, maksātāja vai saņēmēja informāciju, maksājuma mērķi, bankas piešķirtos darījuma identifikatorus un citus failā pieejamos datus.

### Darījumu atpazīšana

Katrs darījums tiek salīdzināts ar bankas importa konfigurācijā norādītajiem atpazīšanas nosacījumiem. Tie var būt:

- bankas darījuma veids vai klasifikācijas kods;
- ienākošais vai izejošais maksājums;
- maksājuma mērķī ietvertais teksts;
- maksātāja vai saņēmēja informācija;
- bankas konts;
- citi konkrētās bankas failā pieejamie parametri.

Pēc atrastās atbilstības programma nosaka:

- FinaWin darījuma veidu;
- veidojamā dokumenta tipu;
- debeta un kredīta kontu;
- nepieciešamo partnera analītiku;
- strukturālo vienību, projektu vai citas dimensijas, ja tās paredzētas konfigurācijā.

Specifiskāki atpazīšanas nosacījumi parasti tiek pārbaudīti pirms vispārīgajiem. Tādēļ nosacījumu secība var ietekmēt importa rezultātu.

### Partnera atpazīšana

Ja darījumam nepieciešams partneris, programma mēģina to atrast partneru katalogā pēc bankas konta un citas importētajā failā pieejamās informācijas, piemēram, reģistrācijas numura vai nosaukuma.

Ja partneri neizdodas atpazīt, darījums atkarībā no konfigurācijas var tikt piesaistīts noklusētajam partnerim, atzīmēts kā neatpazīts vai atstāts manuālai precizēšanai.

### Dublikātu pārbaude

Lai vienu bankas darījumu neielasītu atkārtoti, programma pārbauda bankas failā norādīto darījuma identifikatoru un citus unikālos ieraksta parametrus.

Ja darījums jau iepriekš importēts, programma to atkārtoti neizveido vai parāda atbilstošu paziņojumu. Tādēļ nav ieteicams manuāli mainīt bankas failā norādītos identifikatorus.

### Importa rezultāta pārbaude

Pēc importa lietotājam jāpārbauda:

- vai ielasīti visi nepieciešamie darījumi;
- vai nav izveidoti dublikāti;
- vai izvēlēts pareizais dokumenta tips;
- vai korekti noteikti debeta un kredīta konti;
- vai atpazīts pareizais partneris;
- vai aizpildīta nepieciešamā analītika;
- vai pareizi apstrādātas komisijas un citas ar maksājumu saistītās summas.

Ja darījums neatbilst nevienam konfigurētajam nosacījumam, tas var tikt ielasīts kā neatpazīts darījums vai arī tam var netikt automātiski izveidots pilns grāmatojums. Šāds ieraksts pirms apstiprināšanas jāprecizē manuāli.

> **Svarīgi!** Bankas importa atpazīšanas nosacījumus un grāmatojumu shēmas parasti konfigurē konsultants, jo tie ir atkarīgi no bankas faila formāta, uzņēmuma kontu plāna un grāmatvedības uzskaites kārtības. Ja imports neatpazīst darījumu vai izveido nekorektu dokumentu vai grāmatojumu, lūdzu, sazinieties ar mums un pievienojiet konkrētā darījuma piemēru, bankas failu un aprakstu par sagaidāmo rezultātu.

[Bankas importa noskaņas]({{ site.baseurl }}/docs/dokumenti-konfiguracija/) aprakstītas sadaļā “Konfigurācija”. Dokumentu piesaiste un atlikumu pārbaude aprakstīta sadaļā [Dokumentu sasaiste un norēķinu pārbaude]({{ site.baseurl }}/docs/dokumenti-dokumentu-sasaiste/).
