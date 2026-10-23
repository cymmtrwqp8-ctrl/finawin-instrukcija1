---
title: "NPI un IPI dokumenti"
module: dokumenti
order: 624
module_order: 4
level: 2
layout: doc
permalink: /docs/dokumenti-npi-ipi/
---

## NPI un IPI dokumentu izveide

NPI un IPI funkcijas izmanto, lai izmaksas attiecinātu uz periodu, kurā tās faktiski rodas, nevis tikai uz rēķina saņemšanas datumu.

- **NPI jeb nākamo periodu izmaksas** izmanto ilgāka perioda izmaksu sadalīšanai. Saņemšanas brīdī summu iegrāmato bilances aktīva kontā un pēc tam pakāpeniski noraksta izmaksās.
- **IPI jeb iepriekšējo periodu izmaksas** izmanto, ja saņemtais rēķins attiecas uz agrāku periodu. Piemēram, rēķins saņemts 2026. gada novembrī, bet izmaksas attiecas uz 2026. gada oktobri.

**Piezīme.** Attēlos redzamie dati ir izdomāti un izmantoti testa versijā.

### NPI uzskaite

#### Saņemtā rēķina apstrāde

Saņemto rēķinu iegrāmato kā parasti, bet izmaksu konta vietā norāda konfigurācijā noteikto NPI kontu. Pēc noklusējuma tas parasti ir konts 2410.

Pēc dokumenta saglabāšanas sadaļā “Dokumenta papildus informācija” tiek parādīts paziņojums “Jāizveido NPI ieraksts!”.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image01.svg" alt="Paziņojums par nepieciešamību izveidot NPI ierakstu" />

#### NPI dokumenta izveide

1. Nospiediet pogu “Sakārtot”. Tiks atvērta forma “Nākamo periodu izdevumi”.
2. Cilnē “Saraksts” var apskatīt NPI dokumentu pamatdatus. Šī cilne paredzēta informācijas apskatei.
3. Cilnē “Forma” izveido un rediģē NPI dokumentu.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image02.svg" alt="Nākamo periodu izdevumu saraksts" />

Daļa lauku tiek aizpildīta automātiski no saņemtā rēķina, un programma automātiski piešķir NPI kodu.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image03.svg" alt="NPI dokumenta forma" />

Obligāti pārbaudiet un, ja nepieciešams, aizpildiet šādus laukus:

- Piegādātājs;
- NPI kods, kuru programma piešķir automātiski;
- Summa;
- Norakstīšanas sākuma un beigu datums;
- Norakstīšanas periods;
- Korespondējošais izdevumu konts.

#### NPI pārbaude un akceptēšana

Poga “Pārbaudīt un akceptēt” vispirms pārbauda obligātos laukus. Ja kāds lauks nav aizpildīts vai tajā ievadīta nekorekta vērtība, programma parāda atbilstošu paziņojumu.

Ja kļūdu nav, NPI dokuments tiek akceptēts un sadaļā “Norakstīšanas grafiks” tiek atjaunoti norakstīšanas datumi un summas.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image04.svg" alt="NPI dokumenta pārbaude un akceptēšana" />

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image05.svg" alt="NPI norakstīšanas grafiks" />

NPI dokuments netiek iekļauts sadaļā “Nākamo periodu izdevumu norakstīšana”, kamēr tas nav akceptēts.

Ja pēc akceptēšanas jāmaina summa, periods vai datumi:

1. Nospiediet “Noņemt akcepta statusu”.
2. Veiciet nepieciešamās izmaiņas.
3. Nospiediet “Aprēķins”, lai pārrēķinātu norakstīšanas grafiku.
4. Atkārtoti pārbaudiet un akceptējiet dokumentu.
5. Nospiediet “Saglabāt”.

Ja NPI dokuments ir saglabāts, bet nav akceptēts, dokumenta papildinformācijā tiek parādīts paziņojums “Jāakceptē NPI”. Tajā redzams arī NPI kods un norakstīšanas sākuma datums. Piešķirtais kods ir redzams dokumenta operāciju laukā “NPI”.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image06.svg" alt="NPI informācija sākotnējā dokumentā" />

#### NPI norakstīšanas dokumentu izveide

NPI norakstīšanas dokumentus izveido izvēlnē **Datubāze → Nākamo periodu izdevumu norakstīšana**.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image07.svg" alt="Nākamo periodu izdevumu norakstīšanas izvēlne" />

1. Norādiet atlases datumu. Aprēķinu veic uz mēneša pēdējo datumu.
2. Nospiediet “Atlasīt”.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image08.svg" alt="NPI norakstīšanas ierakstu atlase" />

3. Atzīmējiet ierakstus, kuriem jāizveido norakstīšanas dokumenti. Ar pogu “Atzīmēt visus” var atzīmēt visus atlasītos ierakstus, bet poga “Noņemt atzīmi” noņem visas atzīmes.
4. Lai atvērtu izvēlētā ieraksta NPI formu, novietojiet kursoru uz ieraksta un nospiediet “Apskatīt NPI”.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image09.svg" alt="NPI ierakstu atzīmēšana norakstīšanai" />

5. Nospiediet “Iegrāmatot atlasītos NPI”.
6. Apstipriniet darbību, nospiežot “Jā”.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image10.svg" alt="NPI norakstīšanas apstiprināšana" />

Pēc iegrāmatošanas programma parāda izveidoto dokumentu skaitu.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image11.svg" alt="Paziņojums par izveidoto NPI dokumentu skaitu" />

Izveidotos dokumentus var atrast pēc NPI koda. Tas pats kods ir norādīts sākotnējā NPI dokumentā un izveidotajos norakstīšanas dokumentos.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image12.svg" alt="Izveidotā NPI norakstīšanas dokumenta kods" />

#### NPI pārtraukšana ar kredītrēķinu

NPI kredītrēķinu veido, ja turpmākā NPI norakstīšana jāpārtrauc vai daļa atlikušās summas jāatgriež.

1. Atveriet sākotnējo rēķinu vai kādu no NPI norakstīšanas dokumentiem.
2. Nospiediet “Sakārtot”, lai atvērtu formu “Nākamo periodu izdevumi”.
3. Pārbaudiet jau sasaistītos norakstīšanas dokumentus un piefiksējiet NPI kodu.
4. Izveidojiet kredītrēķinu. Kredīta kontā norādiet NPI kontu, ievadiet pārtraucamo summu un laukā “NPI” manuāli ierakstiet iepriekš piefiksēto NPI kodu.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image13.svg" alt="NPI koda norādīšana kredītrēķinā" />

Pēc kredītrēķina saglabāšanas dokumenta papildinformācijā tiek parādīts NPI, uz kuru kredītrēķins attiecas.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image14.svg" alt="NPI informācija kredītrēķinā" />

5. Kredītrēķinā nospiediet “Sakārtot”. Sadaļā “Sasaistāmie dokumenti” būs redzami gan iepriekš norakstītie dokumenti, gan izveidotais kredītrēķins.
6. Norakstīšanas beigu datumā norādiet kredītrēķina datumu.
7. Nospiediet “Aprēķināt”, pārbaudiet atjaunoto norakstīšanas grafiku un saglabājiet izmaiņas.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image15.svg" alt="NPI grafika pārrēķins pēc kredītrēķina" />

8. Atveriet sadaļu “Nākamo periodu izdevumu norakstīšana”, norādiet kredītrēķina datumu un atlasiet ierakstus.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image16.svg" alt="NPI pārtraukšanas ieraksta atlase" />

9. Atzīmējiet attiecīgo NPI ierakstu un nospiediet “Iegrāmatot atzīmētos NPI”. Pēc pārtraukšanas izveidotajiem dokumentiem summa ir 0,00.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image17.svg" alt="NPI pārtraukšanas rezultāts" />

#### NPI konfigurācija

NPI iestatījumi atrodas sadaļā “Dimensiju kontrole”. NPI funkciju nosaka ieraksts “+NPI”, un pēc noklusējuma NPI debeta konts ir 2410.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image18.svg" alt="NPI funkcija dimensiju kontrolē" />

Lai izmantotu citu NPI kontu, kolonnā “Debets (Scr dacc)” ievadiet uzņēmuma nākamo periodu izdevumu kontu, piemēram, 2411, un saglabājiet izmaiņas.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image19.svg" alt="NPI konta iestatījums dimensiju kontrolē" />

Lai NPI funkciju atslēgtu, ieraksta kolonnā “Is active” norādiet vērtību 0. Vērtība 1 nozīmē, ka funkcija ir aktīva.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image20.svg" alt="NPI funkcijas aktivizēšana un deaktivizēšana" />

### IPI uzskaite

#### Saņemtā rēķina apstrāde

Saņemto rēķinu iegrāmato kā parasti, bet izmaksu konta vietā norāda konfigurācijā noteikto IPI uzkrājumu kontu. Pēc noklusējuma kredīta konta maska sākas ar 46, bet debeta konta maska - ar 47.

Laukā “Dok. datums” norāda datumu, uz kuru izmaksas jāattiecina. Piemēram, ja rēķins saņemts oktobrī, bet izmaksas attiecas uz septembri, laukā norāda 30.09.2026.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image21.svg" alt="IPI konts un attiecināšanas datums dokumentā" />

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image22.svg" alt="IPI dokumenta grāmatojuma piemērs" />

Pēc dokumenta datu pārbaudes nospiediet “OK”. Sadaļā “Dokumenta papildus informācija” tiek parādīts paziņojums “Jāizveido IPI ieraksts!”.

#### IPI dokumenta izveide

1. Nospiediet “Sakārtot”.
2. Programma parāda paziņojumu par IPI dokumenta izveidi un piešķirto IPI kodu.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image23.svg" alt="Paziņojumi par IPI dokumenta izveidi" />

3. Atjaunojiet sākotnējo dokumentu un pārbaudiet lauku “NPI” sadaļā “Dokumenta operācijas”. Tajā ir redzams automātiski piešķirtais IPI kods.

Izveidotajā IPI dokumentā:

- dokumenta kods sākas ar “IPI”;
- numura beigās ir pievienots “IPI”;
- datums atbilst sākotnējā dokumenta laukam “Dok. datums”;
- laukā “Dok. datums” ir sākotnējā dokumenta datums;
- komentāra sākumā ir “IPI” un sākotnējā dokumenta kods;
- laukā “NPI” ir automātiski piešķirtais IPI kods.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image24.svg" alt="Izveidotā IPI dokumenta rekvizīti" />

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image25.svg" alt="IPI dokumenta kods un grāmatojums" />

IPI dokumenta summa atbilst summai, kas sākotnējā rēķinā iegrāmatota IPI kontā. Kontējums tiek izveidots atbilstoši IPI konta konfigurācijai.

Jaunais IPI dokuments tiek izveidots neakceptēts. Pirms akceptēšanas pārbaudiet grāmatojumu un aizpildiet nepieciešamās dimensijas, piemēram, projektu vai struktūrvienību.

#### IPI konfigurācija

IPI iestatījumi atrodas sadaļā “Dimensiju kontrole”. IPI funkciju nodrošina ieraksti “+IPI”.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image18.svg" alt="IPI funkcijas dimensiju kontrolē" />

- Ieraksts “D46 Izveidots ieņēmumu uzkrājuma dokuments” pārbauda dokumenta kredīta kontu. Pēc noklusējuma konfigurācijā izmantota maska 47%.
- Ieraksts “D47 Tiks izveidots izmaksu uzkrājumu dokuments” pārbauda dokumenta debeta kontu. Pēc noklusējuma konfigurācijā izmantota maska 46%.

Lai kontu maskas pielāgotu uzņēmuma kontu plānam, laukā “Scr dacc” vai “Scr kacc” norādiet vajadzīgo konta sākumu un beigās pievienojiet `%`. Ja funkcijai jādarbojas tikai vienam konkrētam kontam, norādiet pilnu kontu bez `%` zīmes.

Piemēram, maska 47% ietver visus kontus, kas sākas ar 47, bet 46% - visus kontus, kas sākas ar 46.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image26.svg" alt="IPI kontu masku konfigurācija" />

Pēc izmaiņu veikšanas saglabājiet tās. Lai IPI funkciju atslēgtu, attiecīgā ieraksta kolonnā “Is active” norādiet 0. Vērtība 1 nozīmē, ka funkcija ir aktīva.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image27.svg" alt="IPI funkcijas aktivizēšana un deaktivizēšana" />

#### IPI dokumenta kontu veidošana

Pēc noklusējuma IPI konta maskas garums ir 1. Veidojot IPI dokumenta kontējumu, programma no IPI uzkrājumu konta sākuma noņem vienu ciparu un iegūst atbilstošo izmaksu vai ieņēmumu kontu.

Piemēri:

- ja uzkrājumu IPI kredīta konts ir 46110, izveidotajā IPI dokumentā debeta konts ir 46110, bet kredīta konts - 6110;
- ja uzkrājumu IPI debeta konts ir 47710, izveidotajā IPI dokumentā debeta konts ir 7710, bet kredīta konts - 47710.

IPI konti jāveido tā, lai pēc konfigurācijā noteiktā ciparu skaita noņemšanas iegūtais konts eksistētu uzņēmuma kontu plānā.

Lai mainītu noņemamo zīmju skaitu:

1. Atveriet **Administrēšana → Noskaņu repozitorijs**.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image28.svg" alt="Noskaņu repozitorija atvēršana" />

2. Logā “Darba vietas noskaņas” izvēlieties “Kopējās noskaņas”.
3. Kreisajā sarakstā izvēlieties “IPI”.
4. Atrodiet iestatījumu “Maskas_zimju_skaits”.
5. Atveriet vērtības rediģēšanu ar rediģēšanas ikonu vai dubultklikšķi.
6. Norādiet nepieciešamo zīmju skaitu un nospiediet “Labi”.
7. Aizveriet noskaņu logu.

<img src="{{ site.baseurl }}/assets/images/npi-ipi-20261023/image29.svg" alt="IPI maskas zīmju skaita iestatīšana" />
