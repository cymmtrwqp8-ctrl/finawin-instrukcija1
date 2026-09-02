---
title: "E-pasts"
module: pamati
order: 25
module_order: 1
level: 2
layout: doc
permalink: /docs/pamati-e-pasts/
---
## E-pasts

Šī ir sadaļa “E-pasts”, kur tiek iestatīti parametri, lai sistēma varētu nosūtīt e-pastus (piemēram, rēķinus, atskaites vai paziņojumus).

**E-pastu sūtīšanas veids**

**Izvēle starp diviem e-pasta sūtīšanas režīmiem:**

No e-pasta programmas (MAPI) - izmanto lokāli datorā instalētu e-pasta programmu (piemēram, Outlook). Nospiežot “Sūtīt”, sistēma atver e-pasta programmu ar sagatavotu vēstuli.

Pa tiešo no programmas (SMTP) - sistēma pati nosūta e-pastus, izmantojot tiešu savienojumu ar e-pasta serveri (ieteicamais veids uzņēmumiem).

**SMTP iestatījumi**

Lauks SMTP sadaļā konfigurē servera pieslēguma datus:

Serveris - e-pasta servera adrese, piemēram, smtp.hostings.lv.

Ports - ports, ko izmanto e-pasta sūtīšanai (parasti 587 vai 465).

Login - e-pasta lietotājvārds (pilna e-pasta adrese).

Parole - parole konkrētajam e-pasta kontam.

SSL - ja atzīmēts, tiek izmantots drošs SSL savienojums.

AutoTLS - automātiski mēģina izmantot drošu TLS savienojumu, ja tas pieejams (parasti ieteicams).

**Nosūtītāja informācija**

Vārds Uzvārds (no) - vārds vai nosaukums, kas tiks rādīts kā e-pasta sūtītājs (piemēram, Demo FinaWin Finanses).

E-pasta adrese (no) - e-pasta adrese, no kuras vēstule tiks nosūtīta.

Organizācija - (pēc izvēles) var norādīt uzņēmuma vai nodaļas nosaukumu, kas tiks pievienots vēstules informācijā.

Paraksts

\- Teksta lauks, kurā var ievadīt standarta e-pasta parakstu (piemēram, uzņēmuma kontaktinformāciju vai juridisku paziņojumu).

Šis paraksts automātiski pievienosies katrai nosūtītajai vēstulei.

**Papildu funkcijas**

Sūtīt testa e-pastu- Izmanto, lai pārbaudītu, vai e-pasta iestatījumi (SMTP serveris, ports, lietotājvārds, parole u.c.) darbojas pareizi.

Sistēma nosūta testa vēstuli uz norādīto e-pasta adresi un parāda ziņojumu par veiksmīgu vai neveiksmīgu sūtīšanu.

Atskaite par noskaņām- Šis logs parāda atskaiti “Visas E-mail noskaņas no DbRegistry visiem lietotājiem”, kas sniedz pārskatu par e-pasta iestatījumiem (noskaņām) visiem sistēmas lietotājiem.
