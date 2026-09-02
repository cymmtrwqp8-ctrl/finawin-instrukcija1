---
title: "Atskaišu ģenerators"
module: atskaisu-noskanas
order: 74
module_order: 9
level: 2
layout: doc
permalink: /docs/atskaisu-noskanas-atskaisu-generators/
---
## Atskaišu ģenerators

Atskaišu ģenerators ir centrālā atskaišu administrēšanas un izsaukšanas vieta.

### Atskaišu grupas

Atskaites tiek piešķirtas kādai no grupām: Piem. Debitori, PVN u.t.t.

### Atskaišu izsaukšana

Atskaiti var izsaukt dažādos veidos atkarībā no pielietojuma

#### Atskaišu izsaukšana apskatei

Atskaites izsaukšana tiek veikta ar pogu \[Aprēķināt atskaiti\]

<img src="{{ site.baseurl }}/assets/images/image175.png" alt="A screenshot of a computer AI-generated content may be incorrect." />

Rezultāts ir atbilstošs atskaites veidam - PDF , Word vai Pivot Atskaite

#### Atskaišu izsaukšan**a** eksportam uz Excel

Atskaites izsaukšana tiek veikta ar pogu \[Atskaites tabula\]

Tiek atvērta tabula, kuru visu var eksportēt uz Excel failu vai apgabalu iezīmējot ar Copy+Paste

#### Atskaišu izsaukšana no datu konteksta (Atskaišu piesaistīšana)

Katrai tabulai - piemēram projektu līgumu saraksts var piesaistīt noteiktas atskaites - piem. Līguma sagatave, Pieņemšanas-nodošanas akts, Līgum summu kontrole u.c.

Ērti izmantojams, ja nepieciešams ātri izsaukt noteiktas atskaites no noteikta konteksta .

Piesaistītajai atskaitei var norādīt kādi atskaites parametri tiks padoti uz atskaites ieejošo parametru vērtībām.

<img src="{{ site.baseurl }}/assets/images/image176.png" alt="A screenshot of a computer AI-generated content may be incorrect." />**Attēls Atskaišu piesaistīšana**

### Atskaites kopēšana

Vienkāršākais veids kā iegūt jaunu atskaiti ir kopēt esošu atskaiti un to modificēt.

Atskaiti kopē ar funkciju “Kopēt atskaiti”

### Atskaites pieprasījums

Atskaites pieprasījums jāsagatavo Firebird SQL valodā.

Parasti pieprasījums ir procedūra vai vienkārša SELECT komanda

Pieprasījums var saturēt procedūras parametrus un filtra parametrus.

Parametri tiek definēti ar funkciju “Atskaites parametri”

<img src="{{ site.baseurl }}/assets/images/image177.png" alt="A screenshot of a computer AI-generated content may be incorrect." />

**Attēls Atskaišu pieprasījums**

Atskaites pieprasījumā var ievadīt fiksētus (no atskaišu izsaukšanas loga nemaināmus) parametrus.

Šajā piemērā ievadīts, ka šī atskaite izmantos Atskaišu rindiņu komplekta kodu 103 (PZA) un PZA slēguma kontu 8610 (neatkarīgi no tā , kas ir kontu plānā)

### Atskaites parametri

Atskaites parametri var tikt izmantoti kā pieprasījuma procedūras ieejošie parametri un/vai kā filtra parametri.

Parametrs var būt noteikta tipa - skaitlis, datums, konts, projekts, aģents u.t.t.

Iespējams veidot jaunus parametru tipus atbilstoši datu specifikai.

### Atskaites dizains

#### PDF-tipa atskaites dizains

Sīkāka informācija <https://www.fast-report.com/public_download/html/FR5UserManual-HTML-en/index.html>

#### Pivot-tipa atskaites dizains

Pivot atskaites dizainēšanas režīmā iespējams izveidot sākotnējo rindiņu, kolonu izkārtojumu un filtru.

### Citas darbības ar atskaitēm

Ar peles labās pogas menu var veikt citas darbības ar atskaiti:

<img src="{{ site.baseurl }}/assets/images/image178.png" alt="A screenshot of a computer AI-generated content may be incorrect." /> **Attēls Atskaišu pārsaukšana**

#### Labot nosaukumu

#### Uz augšu/uz leju

Maina pozīciju sarakstā

#### Dzēst atskaiti

Lietot ar piesardzību vai nelietot.

Ieteicamā alternatīva - pārvietot uz citu grupu “Nezināma pielietojuma atskaites”

#### Pārvietot uz grupu

Tiek piedāvāts pārvietot atskaiti uz citu grupu

#### Pievienot manām atskaitēm

Ja atskaite pievienota “Manām atskaitēm”, tad lietotājs tās redzēs MainMenu punkta Atskaites sarakstā

<img src="{{ site.baseurl }}/assets/images/image179.png" alt="A screenshot of a computer AI-generated content may be incorrect." />
