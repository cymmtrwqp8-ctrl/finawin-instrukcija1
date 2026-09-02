---
title: "Datu filtrēšana"
module: pamati
order: 32
module_order: 1
level: 2
layout: doc
permalink: /docs/pamati-datu-filtresana/
---
## Datu filtrēšana

Ja vēlaties, lai tabulā tiktu attēloti tikai tie dati, kas atbilst kādam Jūsu izvēlētam kritērijiem, bet pārējie dati tiktu paslēpti, jālieto filtri. Katru **filtrus iespējams saglabāt**, norādot nosaukumu, un lietot to atkārtoti; jau izveidotu filtru iespējams labot vai ņemt par pamatu jauna filtra izveidošanai.

Filtru saraksts pieejams rīkjoslā <img src="{{ site.baseurl }}/assets/images/image60.png" /> vai brīdī, kad veidojat jaunu filtru, izsaukt ar pogu **Nolasīt**.

Programma piedāvā vairākus filtrēšanas veidus- gan **ātro filtrēšanu**, ko izsauc ar peles labo taustiņu, gan iespēju veidot sarežģītus**, daudzlīmeņu filtrus**, izsaucot tos ar rīkjoslas pogu <img src="{{ site.baseurl }}/assets/images/image61.png" alt="A black and orange funnel Description automatically generated" />. Atcelt filtru iespējams ar pogu <img src="{{ site.baseurl }}/assets/images/image62.png" alt="A black funnel with a white background Description automatically generated" />

### Ātrais filtrs

Lai **ĀTRI** atlasītu visus ierakstus, kas atbilst Jūsu izvēlētajai vērtībai, ar peles labo taustiņu uzklikšķina uz šīs vērtības un izvēlas ***Ātrais filtrs***:

<img src="{{ site.baseurl }}/assets/images/image63.png" alt="A screenshot of a computer AI-generated content may be incorrect." />

**Attēls Ātrais filtrs**

Un tieši pretēji- ja nepieciešami visi ieraksti, kuri neatbilst izvēlētajai vērtībai, tad jāizvēlas ***Ātrais filtrs (izņemt)***.

Lai turpinātu atlasīt jau esošā filtrā, ar peles labo taustiņu uzklikšķina uz izvēlētās vērtības un izvēlas ***Filtrēt filtrā***. Turpināt filtrēšanu varat tik reižu, cik nepieciešams.

<img src="{{ site.baseurl }}/assets/images/image64.png" alt="A screenshot of a computer AI-generated content may be incorrect." />

**Attēls Filtrēt filtrā**

Ja vienu vai vairākas reizes ir lietota opcija Filtrēt filtrā, bet vēlaties atgriezties soli vai vairākus atpakaļ, lietojiet pogu ***Iepriekšējais filtrs*** <img src="{{ site.baseurl }}/assets/images/image65.png" />.

### Daudzlīmeņu filtrs

Lai definētu **DAUDZLĪMEŅA FILTRU**, izvēlieties pogu no rīkjoslas - programma atver tukšu Filtra definēšanas logu, TAČU, ja esat pielietojuši Ātro filtrēšanu un neesat to atcēluši, Filtru definēšanas logā būs redzami Ātrās filtrēšanas iestatījumi- šo sarakstu varat papildināt vai ***Iztīrīt*** un sākt veidot no jauna, spiežot ***Ģenerēt***. <img src="{{ site.baseurl }}/assets/images/image66.png" alt="A grey and blue funnel AI-generated content may be incorrect." />

<img src="{{ site.baseurl }}/assets/images/image67.png" alt="A screenshot of a computer AI-generated content may be incorrect." />

**Attēls Definēts filtrs**

<img src="{{ site.baseurl }}/assets/images/image68.png" />

**Attēls Filtra definēšana**

Iepriekš saglabātie filtri pieejami, nospiežot pogu ***Nolasīt***. Ja filtra nosacījumos kādu parametru nepieciešams izmainīt, tad klikšķina uz šī ieraksta un logā izvēlas vai ieraksta vajadzīgo parametru.

Filtrēšanu apstiprina ar pogu ***Labi***.

<img src="{{ site.baseurl }}/assets/images/image69.png" alt="A screenshot of a computer Description automatically generated" />

**Attēls Ātrā filtru ģenerēšana**

**Ģenerējot jaunu filtru, norāda:**

> 1.1. **OPERĀCIJU**, kādu vēlamies veikt**: ieraksts ir vienāds (=), lielāks vai mazāks (\>,\<) , nav vienāds (nav =), ir tukšs** un citus. Atšķirību starp operācijām ”līdzīgs’’, ”satur” un “ir sarakstā” skatiet zemāk:

1)  **Līdzīgs** - precīzi jānorāda meklējamā vērtība, ievērojot lielos un mazos burtus. Ja meklē fragmentu, piemēram, ‘Prece’, tad rakstība būtu %Prece**%**. % zīme aizvieto jebkuru simbolu kombināciju. Piemēram, ja norādītu **%ur%,** tad tiktu atlasīti visi ieraksti, kas satur ”ur” - piemēram, ”Num**ur**s”.

2)  **Satur** - šeit nav būtiski lielie un mazie burti, mīkstinājuma- un garumzīmes, kā arī tas, kurā vietā meklējamā vērtība atrodas. Ja meklējam “Saņēmējs”, tad varam ievadīt ***sanem**,* un Saņēmēji tiks atrasti.

3)  **Ir sarakstā** - šeit ir svarīgi ievadīt konkrētus meklētos vārdus precīzi; šī operācija ir ērta arī tad, ja Jūs vēlāties meklēt pēc vairākām kritērija vērtībām vienlaikus, bet nevēlaties veidot vairākas nosacījumu rindas. Piemēram, vēlaties filtrēt dokumentus, kam “Tips” laukā ir dažādas abreviatūras- RP1, RK1 un BZ1: tāda gadījumā rakstiet vērtības vienā rindā, liekot tās apostrofos un atdalot ar komatu ‘RP1’, ‘RK1’, ‘BZ1’

> 1.2. **VĒRTĪBU**, kuru vēlaties filtrēt - skaitli, simbolus vai meklējamo vārdu.

Ja **pievienotais nosacījums ir jānoņem**, uzklikšķinot uz nosacījuma numuru- parādās opcija ***Dzēst šo rindu***.

Ja vajag **filtrēt, norādot vērtību robežas**, piemēram, summa no 500-1000 eiro, tad sākumā logā ***Jauna filtra ģenerēšana*** norāda vienu robežu, apstiprina izvēli un, atkārtoti piespiežot pogu “\*” pašā augšā <img src="{{ site.baseurl }}/assets/images/image70.png" />, izvēlās ***Izveidot pakārtotu nosacījumu***, kurā uzstāda otru robežu. Iepriekš izveidotais filtrs tiks papildināts.

**Filtru iespējams saglabāt**, piespiežot pogu <img src="{{ site.baseurl }}/assets/images/image71.png" />, kur ievada jaunā filtra nosaukumu. Turpmāk, atverot izveidotos filtrus, būs redzams arī šis. Piespiežot pogu ***Labi***, programma aizver logu un izfiltrē sarakstu.

Filtru atceļ, piespiežot pogu<img src="{{ site.baseurl }}/assets/images/image72.png" />.
