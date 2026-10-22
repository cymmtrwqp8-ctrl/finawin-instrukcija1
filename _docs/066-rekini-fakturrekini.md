---
title: "Faktūrrēķini"
module: pirmdokumenti
order: 531
module_order: 3
level: 2
layout: doc
permalink: /docs/rekini-fakturrekini/
---
## Faktūrrēķini

**Atvēršana:** Pirmdokumentu žurnāli → Faktūrrēķini.

Faktūrrēķinu sarakstā apkopoti izrakstītie realizācijas rēķini, tostarp šajā logā sagatavotie avansa rēķini. Rēķinā norāda klientu, datumu, pārdotās preces vai sniegtos pakalpojumus, summu, valūtu un apmaksas termiņu.

Rēķinus izmanto ieņēmumu uzskaitei, klientu norēķinu un apmaksas kontrolei, kā arī atskaitēm.

### Rēķinu saraksts un atlase

Sarakstā rēķinus meklē pēc perioda, klienta, rēķina numura un citiem pieejamajiem atlases laukiem.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image1.png" alt="Faktūrrēķinu saraksts un pieejamās darbības" />

*Faktūrrēķinu saraksts un pieejamās darbības*

Attēlā redzams saraksta vispārīgs piemērs. Turpmākajos soļos izmantoti 2026. gada demonstrācijas dokumenti.

Šajā logā datuma intervāla beigu robeža netiek iekļauta atlasē. Piemēram, lai atlasītu rēķinus no 01.01.2026. līdz 30.09.2026. ieskaitot, laukā “Datums līdz” norāda **01.10.2026.**

Sarakstā pieejama jauna rēķina izveide, kopēšana, nosūtīšana e-pastā un izdruka. Izvēlnē “Darbības” atkarībā no pieejamajām funkcijām var atvērt klienta kartīti vai virsgrāmatas dokumentu, saglabāt PDF vai e-rēķina XML failu un dzēst dokumentu.

### Demonstrācijas dokumenti

Izveidosim realizācijas rēķinu **R-001** partnerim **SOLCRAFT SIA**, kods **01016282**, par **100,00 EUR bez PVN**. Aprēķinātais PVN ir **21,00 EUR**, un kopējā summa ir **121,00 EUR**.

Pēc tam sagatavosim kopiju **R-002** un kredītrēķinu **KR-001**. Darbu ar šiem pašiem dokumentiem turpināsim sadaļā [Dokumentu sasaiste un norēķinu pārbaude]({{ site.baseurl }}/docs/dokumenti-dokumentu-sasaiste/).

### Jauna rēķina izveide

1. Faktūrrēķinu sarakstā nospiež **“Jauns rēķins”**.
2. Pēc paziņojuma par dokumenta izveidi nospiež **“Labi”**.
3. Atrod tikko izveidoto rēķinu un pārslēdzas uz cilni **“2. Rediģēt”**.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image2.png" alt="Jauna faktūrrēķina izveide" />

*Jauna faktūrrēķina izveide*


<img src="{{ site.baseurl }}/assets/images/instr-20261022/image3.png" alt="Paziņojums par rēķina izveidi un pāreja uz rediģēšanu" />

*Paziņojums par rēķina izveidi un pāreja uz rediģēšanu*

### Rēķina rekvizītu aizpildīšana

Rēķina galvenē ievada darījuma datus.

| Lauks | Piemēra vērtība |
|---|---|
| Rēķina numurs | R-001 |
| Datums | 22.10.2026. |
| Klients | SOLCRAFT SIA |
| Partnera kods | 01016282 |
| Valūta | EUR |
| Apmaksas datums | 06.11.2026. |
| GP konts | 2310 |
| Komentārs | Pakalpojums saskaņā ar rēķinu R-001 |

Partneri izvēlas no kataloga. Ja nosaukumi ir līdzīgi, salīdzina partnera kodu un reģistrācijas numuru. Projektu, līgumu un pārējās dimensijas aizpilda, ja to prasa darījums vai uzņēmuma noskaņas.

Pēc galvenes aizpildīšanas un katras tās labošanas nospiež **apstiprināšanas pogu ar ķeksīti**.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image4.png" alt="Rēķina R-001 rekvizīti un galvenes izmaiņu apstiprināšana" />

*Rēķina R-001 rekvizīti un galvenes izmaiņu apstiprināšana*

Ja parādās brīdinājums par atkārtotu numuru, pirms turpināšanas pārbauda, vai dokuments jau nav ievadīts. Salīdzina partneri, datumu un summu.

### Pakalpojuma vai preces pievienošana

Rēķina detaļās pievieno preci vai pakalpojumu. Demonstrācijas piemērā izmanto katalogā sagatavoto testa pakalpojumu.

| Rādītājs | Vērtība |
|---|---|
| Pakalpojums | tests — Testa pakalpojums |
| Pakalpojuma nosaukums | Testa pakalpojuma garais apraksts |
| Debets | 2310 — Norēķini ar pircējiem un pasūtītājiem |
| Kredīts | 6110 — Ieņēmumi no pamatdarbības prod. un pak. pārdošanas |
| Daudzums | 1 |
| Cena bez PVN | 100,00 EUR |
| Summa bez PVN | 100,00 EUR |
| PVN 21% | 21,00 EUR |
| Kopējā summa | 121,00 EUR |

Katrai rindai pārbauda nosaukumu, daudzumu, cenu, atlaidi, kontus un dimensijas. Klientam paredzētajam rindas aprakstam jābūt saprotamam arī izdrukā.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image5.png" alt="Pakalpojuma rinda un rēķina kopsumma 121,00 EUR" />

*Pakalpojuma rinda un rēķina kopsumma 121,00 EUR*

### Pakalpojumu kataloga un kontējuma pārbaude

Pakalpojumu kataloga noskaņas pieejamas izvēlnē **Katalogi → Pakalpojumu katalogs**. Tās var ietekmēt dokumentā piedāvātos kontus un citas vērtības.

Ja vajadzīgais pakalpojums vai konts nav pieejams, pārbauda kataloga ierakstu. Pēc labojumiem atjauno izvēles sarakstu un pārbauda jau ievadīto rēķina rindu. Kataloga maiņa pati par sevi neapliecina, ka esošā dokumenta rinda ir mainīta.

Pārbauda norēķinu kontu, ieņēmumu kontu, PVN uzskaiti un nepieciešamo analītiku. Realizācijas rēķina piemērā **21,00 EUR ir aprēķinātais PVN par pārdošanu**.

### Rēķina iegrāmatošana

Pēc galvenes un detaļu pārbaudes nospiež **“Iegrāmatot”**.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image6.png" alt="Rēķina iegrāmatošanas poga" />

*Rēķina iegrāmatošanas poga*

Pārbauda, ka rēķins ir iegrāmatots, kopsumma ir **121,00 EUR**, grāmatojums atbilst darījumam un pirms sasaistes nesegtais atlikums ir **121,00 EUR**. Virsgrāmatas dokumentu var atvērt izvēlnē **Darbības → Atvērt VG dokumentu**.

### Izdruka un pārējās darbības ar rēķinu

Poga **“Izdrukāt”** piedāvā pieejamās drukas formas. Priekšskatījumā pārbauda uzņēmuma un klienta rekvizītus, numuru, datumu, pakalpojuma nosaukumu, summas, PVN un apmaksas informāciju.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image7.png" alt="Rēķina izdruka un papildu darbības" />

*Rēķina izdruka un papildu darbības*

Pieejamās darbības:

- **Jauns rēķins** — sāk jauna rēķina ievadi.
- **Kopēt rēķinu** — sagatavo jaunu dokumentu, izmantojot esošā rēķina informāciju.
- **Noņemt grāmatojumu** — atceļ iegrāmatošanu, ja nepieciešami labojumi.
- **Dzēst rēķinu** — paredzēta neiegrāmatota rēķina dzēšanai; iepriekš iegrāmatotam rēķinam vispirms noņem grāmatojumu. Ņem vērā piekļuves tiesības, sasaistes un programmas paziņojumus.
- **Darbības** — ļauj atvērt virsgrāmatas dokumentu, saglabāt e-rēķina XML failu vai nosūtīt rēķinu e-pastā.

Ja izdrukā trūkst pakalpojuma nosaukuma, pārbauda dokumenta rindas datus un izmantoto drukas formu.

### Faktūrrēķina kopēšana

1. Izvēlas **R-001**.
2. Nospiež **“Kopēt rēķinu”** sarakstā vai rēķina rediģēšanas logā.
3. Jaunajam dokumentam piešķir numuru **R-002**.
4. Pārbauda datumu, partneri, apmaksas termiņu, rindas, summas un kontējumu.
5. Apstiprina izmaiņas un iegrāmato kopiju.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image9.png" alt="Rēķina R-001 izvēle un kopēšana no saraksta" />

*Rēķina R-001 izvēle un kopēšana no saraksta*

R-002 ir patstāvīgs rēķins. Šajā piemērā tā kopsumma ir **121,00 EUR**. Turpmāk maksājumus un kredītrēķinu sasaista ar **R-001**, tādēļ R-002 atlikums paliek **121,00 EUR**.

### Kredītrēķina sagatavošana

Kredītrēķinu izveido, ja jāsamazina iepriekš izrakstītā rēķina summa. Piemērā samazina R-001 pakalpojuma vērtību par **20,00 EUR bez PVN**, PVN par **4,20 EUR**, kopā par **24,20 EUR**.

1. Izveido jaunu faktūrrēķinu un norāda numuru **KR-001**.
2. Laukā **“Veids”** izvēlas **“Kredītrēķins”**.
3. Izvēlas to pašu partneri **SOLCRAFT SIA**, kods **01016282**.
4. Komentārā norāda **“Rēķina R-001 labojums”**.
5. Demonstrācijas rindā ievada daudzumu **1** un cenu **−20,00 EUR**.
6. Pārbauda kopsummas un nospiež **“Iegrāmatot”**.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image11.png" alt="Dokumenta veida Kredītrēķins izvēle" />

*Dokumenta veida Kredītrēķins izvēle*


<img src="{{ site.baseurl }}/assets/images/instr-20261022/image12.png" alt="Kredītrēķins KR-001 ar summu −24,20 EUR" />

*Kredītrēķins KR-001 ar summu −24,20 EUR*

Šajā piemērā kredītrēķina summas dokumentā ir negatīvas: **−20,00 EUR bez PVN**, **−4,20 EUR PVN** un **−24,20 EUR kopā**. Saistību samazinājuma apmērs ir **24,20 EUR**.

Virsgrāmatas sarakstā numuram var būt pievienota dokumenta sērija: attēlos R-001 redzams kā **D 1R-001**, bet KR-001 — kā **D Kr3KR-001**. Dokumenta atbilstību pārbauda arī pēc partnera un summas.

Kredītrēķina piesaisti turpina sadaļā [Dokumentu sasaiste un norēķinu pārbaude]({{ site.baseurl }}/docs/dokumenti-dokumentu-sasaiste/). Preču atgriešanas gadījumā veic arī attiecīgajā procesā paredzētās noliktavas darbības.
