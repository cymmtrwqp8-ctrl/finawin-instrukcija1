---
title: "Partneri"
module: katalogi
order: 38
module_order: 2
level: 2
layout: doc
permalink: /docs/katalogi-partneri/
---
## Partneri

Partneru katalogā glabā klientu, piegādātāju, avansa norēķinu personu un sava uzņēmuma rekvizītus. Šos datus izmanto dokumentu ievadē, maksājumos un atskaitēs.

### Partneru kataloga uzbūve

<img src="{{ site.baseurl }}/assets/images/partneri-kataloga-uzbuve.png" alt="Partneru kataloga trīs daļas: analītikas grupas, personālie konti un papildinformācija" />

| Loga daļa | Kādam nolūkam to izmanto |
| --- | --- |
| **1. Analītikas grupas** | Izvēlas, kuras grupas partnerus parādīt sarakstā. |
| **2. Personālie konti** | Atrod un izvēlas partneri, izveido jaunu ierakstu vai labo esošā partnera datus. |
| **3. Personālkonta papildus informācija** | Apskata un papildina izvēlētā partnera informāciju, tostarp bankas kontus. |

Standarta grupas ir:

- **Klienti/piegādātāji** — pircēji un piegādātāji.
- **Darbinieki / avansa norēķinu personas** — personas, kuras izmanto avansa norēķinu uzskaitē.
- **Mūsu uzņēmumi** — sava uzņēmuma rekvizīti.

Grupu nosaukumi un kodi var atšķirties atkarībā no datubāzes iestatījumiem. Izvēle **“Visi partneri”** ļauj skatīt visu grupu partnerus.

### Partnera atrašana

Pirms veidojat jaunu partneri, pārbaudiet, vai tas katalogā jau nav ievadīts.

1. Izvēlieties atbilstošo grupu vai **“Visi partneri”**.
2. Meklējiet partneri pēc nosaukuma vai reģistrācijas numura.
3. Pārbaudiet atrastā ieraksta rekvizītus.

**Partnera kods** ir ieraksta identifikators programmā. Tas nav tas pats, kas **reģistrācijas numurs** vai **PVN maksātāja numurs**.

Ja partneris nav atrodams, pārbaudiet arī aktīvos filtrus. Darbību aprakstus skatiet Darba pamatu sadaļās <a href="{{ site.baseurl }}/docs/pamati-meklesana/">Meklēšana</a> un <a href="{{ site.baseurl }}/docs/pamati-datu-filtresana/">Datu filtrēšana</a>.

### Jauna partnera izveide

1. Izvēlieties grupu, kurā partneris jāizveido.
2. Nospiediet jauna ieraksta izveides pogu vai taustiņu **Insert** partneru saraksta tabulā.
3. Aizpildiet partnera nosaukumu, reģistrācijas numuru, PVN maksātāja numuru, ja attiecināms, juridisko adresi un valsti.
4. Saglabājiet ierakstu.
5. Pārbaudiet saglabātos rekvizītus un papildiniet bankas kontus.

<img src="{{ site.baseurl }}/assets/images/partneri-jauna-ieraksta-izveide.png" alt="Jauna partnera rekvizītu ievade un saglabāšanas poga" />

Partnera datus iespējams iegūt arī no **Uzņēmumu reģistra**, ja attiecīgā iespēja ir pieejama. Skatiet <a href="{{ site.baseurl }}/docs/papildfunkcijas-citas-funkcijas/#lur-imports">LUR imports</a>.

### Partnera kartītes atvēršana no dokumenta

Lai atvērtu dokumentā (**realizācijas rēķinā**) izvēlētā partnera kartīti, nospiediet pogu **“Kods”** pie partnera lauka.

Pirms datu labošanas pārbaudiet partnera nosaukumu un reģistrācijas numuru.

<img src="{{ site.baseurl }}/assets/images/partneri-kartite-no-rekina.png" alt="Poga Kods realizācijas rēķinā partnera kartītes atvēršanai" />

### Partnera bankas konti

Bankas kontus pievieno izvēlētā partnera papildinformācijā, sadaļā **“Bankas konti”**.

<img src="{{ site.baseurl }}/assets/images/partneri-bankas-atversana.png" alt="Partnera atrašana un pogas Bankas izvēle" />

1. Izvēlieties partneri.
2. Atveriet tā bankas kontus un pievienojiet jaunu rindiņu.
3. Aizpildiet konta datus un saglabājiet.
4. Ja tas ir galvenais bankas konts, atzīmējiet attiecīgo izvēli.
5. Atjaunojiet partneru sarakstu un pārbaudiet rezultātu.

**Partneru sarakstā attēlojamajam bankas kontam jābūt atzīmētam kā galvenajam.**

Lai dzēstu kļūdainu bankas kontu, sadaļā **“Bankas konti”** izvēlieties attiecīgo rindiņu un nospiediet **Ctrl+Delete**.

<img src="{{ site.baseurl }}/assets/images/partneri-galvenais-bankas-konts.png" alt="Galvenā bankas konta atzīme logā Norēķinu konti bankās" />

### Dublikātu pārbaude

Ja datubāzē ir aktivizēta dublikātu kontrole, izveidojot jaunu partneri vai labojot esošo, programma pārbauda, vai partneris ar tādu pašu reģistrācijas numuru jau pastāv.

<img src="{{ site.baseurl }}/assets/images/partneri-regnum-kontrole.png" alt="Paziņojums par partneri ar jau esošu reģistrācijas numuru 40003048719" />

Saņemot paziņojumu par dublikātu, vispirms atrodiet esošo partneri un pārbaudiet, vai jāizmanto tā kartīte.

Ja atsevišķs ieraksts ar vienādu reģistrācijas numuru ir nepieciešams, partneru katalogā kolonnā **ALLOW_DUBLICATE_REGNUMS** var atzīmēt izņēmumu.

Esošu ierakstu pārbaudei izmantojiet atskaiti **Nr. 868** atskaišu grupā **“Kontrole”**. Tā uzrāda reģistrācijas numurus, kuri atkārtojas **neaizslēgto partneru** sarakstā.

<img src="{{ site.baseurl }}/assets/images/partneri-dublikatu-atskaite-868.png" alt="Atskaite 868: reģistrācijas numurs 40003048719 atrasts divos ierakstos" />

Atskaite nepārbauda nosaukumu līdzību. Ja vienai personai ievadīti atšķirīgi reģistrācijas numuri, šādi ieraksti tajā var neparādīties.

### Partneru apvienošana

Apvienošanu izmanto, ja pārbaudīts, ka divi kataloga ieraksti attiecas uz vienu un to pašu personu un turpmāk jāsaglabā viens ieraksts.

Pirms apvienošanas:

1. Salīdziniet abu ierakstu rekvizītus.
2. Nosakiet, kuru ierakstu saglabāsiet.
3. Pārbaudiet abu ierakstu dokumentus un atlikumus.

Apvienošanu veic ar pogu **“Apvienošana”**, norādot saglabājamo partneri.

> **Uzmanību!** Apvienošanas rezultātā partneris tiek nomainīts arī apvienojamā ieraksta vēsturiskajos dokumentos.

<img src="{{ site.baseurl }}/assets/images/partneri-apvienosana.png" alt="Partneru apvienošana un saglabājamā partnera koda ievade" />

<img src="{{ site.baseurl }}/assets/images/partneri-apvienosanas-apstiprinajums.png" alt="Apvienošanas apstiprinājums ar saglabājamo un dzēšamo partneri" />
