---
section_id: 56
title: "Dokumentu sasaiste un norēķinu pārbaude"
module: sasaistes
order: 750
module_order: 6
level: 1
layout: doc
permalink: /docs/dokumenti-dokumentu-sasaiste/
---
# Dokumentu sasaiste un norēķinu pārbaude

Dokumentu sasaiste ļauj norādīt, kurš maksājums, kredītrēķins vai avanss sedz konkrēto rēķinu. Pēc katras sasaistes pārbauda sasaistīto summu un abu dokumentu atlikumus.

Turpinām darbu ar sadaļā [Faktūrrēķini]({{ site.baseurl }}/docs/rekini-fakturrekini/) izveidotajiem dokumentiem partnerim **SOLCRAFT SIA**, kods **01016282**:

| Dokuments | Summa vai segšanas apmērs |
|---|---:|
| R-001 | 121,00 EUR |
| KR-001 | 24,20 EUR |
| M-001 | 50,00 EUR |
| M-002 | 46,80 EUR |

R-002 ir atsevišķa rēķina kopija par **121,00 EUR** un šajā norēķinu ķēdē netiek izmantota.

### Pārbaudes pirms sasaistes

Salīdzina partnera kodu, norēķinu kontu un analītiku, valūtu, dokumentu statusu un pieejamos atlikumus. Pārbauda arī esošās sasaistes.

Piemērā izmanto norēķinu kontu **2310**. Kredītrēķina un saņemto maksājumu pieejamās summas norēķinu logā var būt redzamas ar mīnusa zīmi. Turpmāk sasaistes apmēru norādām kā pozitīvu segšanas summu.

### Sasaistes loga atvēršana

1. Virsgrāmatas dokumentu sarakstā izvēlas **R-001**. Sērijas dēļ tas attēlos redzams kā **D 1R-001**.
2. Nospiež **“Apmaksas”** vai izmanto **Ctrl+F9**.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image23.png" alt="Rēķina izvēle un darbība Apmaksas ar Ctrl+F9" />

*Rēķina izvēle un darbība Apmaksas ar Ctrl+F9*

Loga augšdaļā ir **“Pieejamie dokumenti”**, bet apakšdaļā — **“Piesaistītie dokumenti”**. Poga ar informācijas simbolu parāda izvēlētā dokumenta informāciju, tostarp numuru, parādu un valūtu.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image24.png" alt="Pieejamie dokumenti un izvēlētā rēķina informācija" />

*Pieejamie dokumenti un izvēlētā rēķina informācija*

Pieejamās sasaistes darbības:

- **Piesaistīt izvēlētos / visus dokumentus** — piesaista atlasītos dokumentus atbilstoši darbības tvērumam.
- **Atsaistīt izvēlētos / visus dokumentus** — atceļ attiecīgās sasaistes.
- **Piesaistīt** — atver sasaistes summas ievades logu.
- **Atsaistīt** — atceļ konkrētā dokumenta sasaisti.

Pirms darbības ar vairākiem dokumentiem pārbauda atlasi un tās kopējo summu.

### Kredītrēķina piesaiste

Sarakstā “Pieejamie dokumenti” izvēlas **KR-001**. Attēlā tas redzams ar sēriju **D Kr3KR-001** un pieejamo summu **−24,20 EUR**.

Nospiež **“Piesaistīt”**, summas logā norāda **24,20** un apstiprina ar **“Labi”**.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image26.png" alt="Kredītrēķina piesaiste ar summu 24,20 EUR" />

*Kredītrēķina piesaiste ar summu 24,20 EUR*

Pārbauda rezultātu:

| Dokuments | Nesegtais apmērs pirms | Segšanas summa | Nesegtais apmērs pēc |
|---|---:|---:|---:|
| R-001 | 121,00 EUR | 24,20 EUR | 96,80 EUR |
| KR-001 | 24,20 EUR | 24,20 EUR | 0,00 EUR |

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image27.png" alt="R-001 atlikums pēc kredītrēķina piesaistes ir 96,80 EUR" />

*R-001 atlikums pēc kredītrēķina piesaistes ir 96,80 EUR*

### Maksājumu sagatavošana demonstrācijai

Turpmākajiem soļiem vajadzīgi divi saņemti bankas maksājumi no tā paša klienta. Ja maksājumi jau ir ielasīti vai ievadīti sistēmā, izmanto esošos dokumentus.

| Lauks | Pirmais maksājums | Otrais maksājums |
|---|---|---|
| Numurs | M-001 | M-002 |
| Tips demonstrācijas vidē | BI1 — Bankas ieņēmumi - klients | BI1 — Bankas ieņēmumi - klients |
| Partneris | SOLCRAFT SIA, 01016282 | SOLCRAFT SIA, 01016282 |
| Summa | 50,00 EUR | 46,80 EUR |
| Debets | Bankas konts, kurā saņemta nauda | Bankas konts, kurā saņemta nauda |
| Kredīts | 2310 | 2310 |

Pirms sasaistes pārbauda maksājuma grāmatojumu un partnera analītiku kontā 2310. Maksājumu sagatavošanas kopējā kārtība aprakstīta nodaļā [Maksājumi un banka]({{ site.baseurl }}/docs/maksajumi-un-banka/).

### Daļēja apmaksa

R-001 piesaista **M-001 par 50,00 EUR**. To var sākt no maksājuma, izvēloties rēķinu, vai no rēķina, izvēloties pieejamo maksājumu.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image28.png" alt="Maksājuma M-001 un rēķina R-001 izvēle pirms sasaistes" />

*Maksājuma M-001 un rēķina R-001 izvēle pirms sasaistes*

Pēc piesaistes R-001 atlikums samazinās no **96,80 EUR** līdz **46,80 EUR**, bet M-001 nepiesaistītais atlikums ir **0,00 EUR**.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image29.png" alt="Daļēji apmaksātā rēķina atlikums 46,80 EUR" />

*Daļēji apmaksātā rēķina atlikums 46,80 EUR*

Daļēja apmaksa samazina atlikumu tikai par sasaistīto summu.

### Pilna apmaksa

R-001 piesaista **M-002 par 46,80 EUR**.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image30.png" alt="Maksājums M-002 un rēķina atlikusī summa pirms sasaistes" />

*Maksājums M-002 un rēķina atlikusī summa pirms sasaistes*

Pēc darbības R-001 un M-002 atlikumi ir **0,00 EUR**.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image31.png" alt="R-001 un maksājumu atlikumi pēc pilnas apmaksas" />

*R-001 un maksājumu atlikumi pēc pilnas apmaksas*

Ja konkrētajā sarakstā nulle attēlota kā tukša šūna, rezultātu pārbauda arī sasaistes informācijā.

| Segšanas dokuments | Summa |
|---|---:|
| KR-001 | 24,20 EUR |
| M-001 | 50,00 EUR |
| M-002 | 46,80 EUR |
| Kopā | 121,00 EUR |

### Maksājums pārsniedz rēķina summu

Atsevišķā piemērā izmanto rēķinu **R-003 par 1456,84 EUR** un maksājumu **M-003 par 1500,00 EUR**. Šis piemērs nav saistīts ar R-002 kopiju.

Rēķina summu veido **1204,00 EUR bez PVN** un **252,84 EUR PVN**.

Piesaista **1456,84 EUR** un pārbauda:

| Dokuments | Summa | Sasaistītā summa | Atlikuma apmērs |
|---|---:|---:|---:|
| R-003 | 1456,84 EUR | 1456,84 EUR | 0,00 EUR |
| M-003 | 1500,00 EUR | 1456,84 EUR | 43,16 EUR |

Norēķinu sarakstā saņemtā maksājuma atlikums var būt redzams kā **−43,16 EUR**. Tā nepiesaistītais apmērs ir **43,16 EUR**. Atlikuma turpmāko izmantošanu nosaka darījuma būtība un uzņēmuma uzskaites kārtība.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/maksajuma-parmaksa-r003-m003.png" alt="Rēķins R-003 ir segts, maksājuma M-003 nepiesaistītais atlikums ir 43,16 EUR" />

*Rēķins R-003 ir segts; maksājumam M-003 palicis nepiesaistīts atlikums 43,16 EUR.*

### Kā pārbaudīt ar ko rēķins segts

Atver R-001 sasaistes informāciju un sadaļā “Piesaistītie dokumenti” pārbauda dokumentu numurus, datumus, kontu un summas.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image32.png" alt="Rēķinam R-001 piesaistītais kredītrēķins un abi maksājumi" />

*Rēķinam R-001 piesaistītais kredītrēķins un abi maksājumi*

R-001 nulles atlikumu veido kredītrēķins un divi bankas maksājumi. Nulles atlikums pats par sevi nenozīmē, ka visa summa saņemta bankā.

### Sasaistes atcelšana un atkārtota piesaiste

Ja piesaistīts nepareizs dokuments vai summa, izvēlas konkrēto sasaisti un nospiež **“Atsaistīt”**.

Piemērā atceļ tikai M-002 piesaisti par **46,80 EUR**. KR-001 un M-001 sasaistes saglabā.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image36.png" alt="Maksājuma M-002 sasaistes izvēle un atsaistīšanas darbība" />

*Maksājuma M-002 sasaistes izvēle un atsaistīšanas darbība*

Pēc atsaistīšanas M-002 atkal ir sadaļā “Pieejamie dokumenti”, bet R-001 parāds ir **46,80 EUR**.

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image37.png" alt="M-002 pieejams atkārtotai piesaistei un R-001 parāds ir 46,80 EUR" />

*M-002 pieejams atkārtotai piesaistei un R-001 parāds ir 46,80 EUR*


<img src="{{ site.baseurl }}/assets/images/instr-20261022/image38.png" alt="Rēķina un maksājuma atlikumi pēc atsaistīšanas" />

*Rēķina un maksājuma atlikumi pēc atsaistīšanas*

Pēc pārbaudes M-002 piesaista atkārtoti par **46,80 EUR**. R-001 un M-002 atlikumi atkal ir nulle.

### Automātiskā sasaiste

Ja uzņēmuma konfigurācijā paredzēta automātiskā sasaiste, tā var izveidoties maksājuma apstrādes laikā. Pēc apstrādes pārbauda faktiski piesaistīto rēķinu, summu un atlikumus.

Ja sasaiste nav izveidojusies, pārbauda dokumentu datus un pieejamos atlikumus. Ja sasaiste ir nepareiza, vispirms noskaidro tās pamatojumu un pēc tam veic vajadzīgo labojumu.

### Ja dokuments nav redzams vai nav sasaistāms

1. Pārbauda periodu, atlases laukus un tabulas filtrus.
2. Salīdzina partnera kodu abos dokumentos.
3. Pārbauda norēķinu kontus un analītiku.
4. Pārbauda valūtu.
5. Pārbauda dokumenta statusu un grāmatojumu.
6. Pārbauda pieejamo atlikumu un esošās sasaistes.
7. Pēc labojumiem atjauno sarakstu.

Ja pēc maksājuma konta maiņas trūkst grāmatojuma rindas, vispirms pārbauda maksājuma dokumentu. Ja bankā maksājums jau izpildīts, pirms atkārtotas maksāšanas pārbauda tā esamību un sasaisti sistēmā.

Ja problēma saglabājas, pieteikumam pievieno dokumentu numurus, partnera kodu, summas, kontus, darbību secību un pilnu kļūdas paziņojumu.

### Gala rezultāta pārbaude

Pēc M-002 atkārtotas piesaistes pārbauda galvenā scenārija atlikumus:

| Dokuments | Atlikums |
|---|---:|
| R-001 | 0,00 EUR |
| KR-001 | 0,00 EUR |
| M-001 | 0,00 EUR |
| M-002 | 0,00 EUR |
| R-002 | 121,00 EUR |

<img src="{{ site.baseurl }}/assets/images/instr-20261022/image39.png" alt="Gala sarakstā R-002 kopijai paliek 121,00 EUR, bet R-001 ir segts" />

*Gala sarakstā R-002 kopijai paliek 121,00 EUR, bet R-001 ir segts*

R-002 paliek neapmaksāts, jo kopija šajā sasaistes piemērā netika izmantota. Atsevišķi izveidotais **VG-001** ir izmaksu korekcija un nepiedalās šajā dokumentu ķēdē.
