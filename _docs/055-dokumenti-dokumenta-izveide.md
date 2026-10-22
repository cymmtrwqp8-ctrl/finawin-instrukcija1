---
title: "Dokumenta izveide"
module: dokumenti
order: 623
module_order: 4
level: 2
layout: doc
permalink: /docs/dokumenti-dokumenta-izveide/
---

## Dokumenta izveide virsgrāmatā

Šajā sadaļā aprakstīta dokumenta ievade tieši virsgrāmatas dokumentu logā. Šo ievades veidu izmanto darījumiem un grāmatvedības korekcijām, kurus uzņēmuma darba kārtība paredz ievadīt šajā logā.

Faktūrrēķina sagatavošana klientam aprakstīta sadaļā “Faktūrrēķini”. Ja darījums jau ievadīts pirmdokumentu logā un tam izveidots grāmatojums, pirms tiešas ievades virsgrāmatā pārbauda, vai netiks izveidots atkārtots ieraksts.

Pārbauda periodu un atlases nosacījumus. Lai ievadītu dokumentu, izvēlas jauna dokumenta izveides darbību un nepieciešamo dokumenta tipu.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image13.png" alt="Virsgrāmatas dokumenta izveides piemērs" />

### Dokumenta rekvizīti

Veidojot jaunu dokumentu atveras izvēlne kur jāizvēlas dokumenta tips. To iespējams meklēt pēc dokumenta tipa, nosaukuma vai grupas.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image14.png" alt="Virsgrāmatas dokumenta izveides piemērs" />

Attēls Virsgrāmatas dokumenta izveide - šablons

Ar visiem dokumentu tipiem varat iepazīties izvēlnē Konfigurācija → Dokumentu tipi.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image15.png" alt="Virsgrāmatas dokumenta izveides piemērs" />

Attēls Dokumentu tipi

### Pamatinformācijas ievade

Pamatinformācijas ievades sadaļā lietotājs aizpilda galvenos datus, kas nepieciešami virsgrāmatas dokumenta izveidei. Šajā posmā tiek definēti dokumenta pamatparametri - datums, partneris, saturs, summa, valūta un citas vispārējās pazīmes, kas nodrošina korektu grāmatošanas procesa sākumu.

Ar sarkanu krāsu atzīmētie lauki ir obligāti aizpildāmi. Bez šo lauku aizpildes dokumentu nebūs iespējams saglabāt vai turpināt tā apstrādi.

Ar dzeltenu krāsu atzīmētie lauki - “Tips” un “Kods” - tiek aizpildīti automātiski pēc dokumenta veida izvēles. Šie lauki ir informatīvi un kalpo kā sistēmas norāde par dokumenta klasifikāciju.

Pārējie lauki aizpildāmi pēc nepieciešamības, atkarībā no konkrētā dokumenta satura vai uzņēmuma uzskaites specifikas.

Demonstrācijas piemērā izmanto numuru VG-001 un summu 50,00 EUR. Piemēram izvēlas konkrētu, uzņēmuma uzskaitei atbilstošu grāmatvedības korekciju.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image16.png" alt="Virsgrāmatas dokumenta izveides piemērs" />

### Grāmatojuma ievade

Pievieno grāmatojuma rindu un norāda debeta kontu, kredīta kontu un summu. Aizpilda kontiem nepieciešamo analītiku: partneri, projektu, līgumu vai citas dimensijas.

Ja darījums ietver vairākus grāmatojumus, katru ievada atsevišķā rindā.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image17.png" alt="Virsgrāmatas dokumenta izveides piemērs" />

Pirms saglabāšanas pārbauda kontus, summu, analītiku un darījuma datumu.

### Saglabāšana un rezultāta pārbaude

Dokumentu saglabā un pārbauda tā statusu un grāmatojumu.

Pēc visu nepieciešamo datu, tostarp PVN informācijas, ievadīšanas lietotājam jānospiež poga “OK” dokumenta “cepurē” (augšējā daļā). Šī darbība aktivizē sistēmas automātisko aprēķinu:

- sistēma aprēķina PVN summu,

- dokumenta grāmatojuma rindās automātiski pievienojas papildu rinda PVN grāmatojumam,

- informatīvajos logos tiek atjaunota informācija par dokumenta saldo un kopsummām pa kontiem,

- pie dokumenta tiek automātiski ielikts akcepta ķeksītis, kas norāda, ka dokuments ir sagatavots apstiprināšanai.

NB!

Ja dokumentā nepieciešams veikt labojumus vai izmaiņas, vispirms jānoņem akcepta ķeksītis, jāveic nepieciešamās korekcijas un pēc tam atkārtoti jānospiež “OK”, lai sistēma pārrēķinātu summas, PVN un atjaunotu saldo informāciju.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image18.png" alt="Virsgrāmatas dokumenta izveides piemērs" />

Dokumentu sarakstā atrod VG-001 un pārliecinās, ka saglabāts pareizais datums, saturs, summa un kontējums.

### Papildus informācijas logs

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image19.png" alt="Virsgrāmatas dokumenta izveides piemērs" />

Šis logs tiek attēlots gadījumos, kad sistēma konstatē kļūdas vai neatbilstības virsgrāmatas dokumentā.

Kamēr šīs kļūdas nav novērstas, dokumentu nav iespējams apstiprināt. Logs kalpo kā kontroles mehānisms, kas nodrošina datu korektumu un atbilstību grāmatvedības prasībām. Katram uzņēmumam ir iespēja šos kontroles nosacījumus konfigurēt individuāli - pielāgojot tos uzņēmuma vajadzībām un iekšējām uzskaites prasībām.

Šajā piemērā sistēma brīdina, ka dokumentā izmantots konts, kuram obligāti jābūt aizpildītai papildu dimensijai - projektam.

Lai novērstu kļūdu:

Uzspiediet “Labi”, lai aizvērtu brīdinājuma logu.

Pēc tam izvēlieties darbību “Sakārtot” - sistēma automātiski atvērs atbilstošo izvēlni no kataloga,

kur iespējams ievadīt trūkstošo informāciju (šajā gadījumā - projektu). Pēc nepieciešamo lauku aizpildīšanas dokumentu iespējams saglabāt un apstiprināt atkārtoti.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image20.png" alt="Virsgrāmatas dokumenta izveides piemērs" />

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image21.png" alt="Virsgrāmatas dokumenta izveides piemērs" />

Attēls Sakārtot

### <a href="{{ site.baseurl }}/docs/dokumenti-dokumentu-sasaiste/" style="text-decoration: underline;">Sasaistu informācijas logs</a>

No dokumenta formas skata lietotājam ir iespēja pāriet uz dokumentu sasaistes (apmaksas) logu, kurā tiek attēlotas visas savstarpējās saistības starp dokumentiem - piemēram, rēķinu un tā apmaksu vai avansa un rēķina dzēšanu.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image22.png" alt="Virsgrāmatas dokumenta izveides piemērs" />

Sasaistu informācijas logs nodrošina pārskatāmu informāciju par to, kā konkrētais virsgrāmatas dokuments ir saistīts ar citiem dokumentiem sistēmā.
