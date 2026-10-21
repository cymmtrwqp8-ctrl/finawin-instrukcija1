---
title: "Citas funkcijas"
module: papildfunkcijas
order: 76
module_order: 7
level: 1
layout: doc
permalink: /docs/papildfunkcijas-citas-funkcijas/
---
# Citas funkcijas 

Šeit apkopotas papildu funkcijas, kas pieejamas lietotājam sistēmas darbam un datu apstrādei.

<img src="{{ site.baseurl }}/assets/images/image181.png" alt="A screenshot of a computer AI-generated content may be incorrect." />

**Attēls Citas funkcijas**

1.  PVN → EDS – izveido PVN deklarāciju EDS formātā iesniegšanai Valsts ieņēmumu dienesta sistēmā.

2.  Bankas izraksta imports – bankas konta transakciju imports un automātiski grāmatojumi virsgrāmatā.

3.  Līgumi– papildu maksas modulis, kas nodrošina līgumu saraksta uzturēšanu un uzskaiti.

4.  Parādu kontrole – papildu maksas modulis, kas paredzēts debitoru parādu uzraudzībai, atgādinājumu un kontroles pārskatiem.

5.  <span id="lur-imports">**LUR imports**</span> – datu imports no Latvijas Uzņēmumu reģistra (LUR) jauna partnera izveidei, automātiski ielasot uzņēmuma datus.

    **Pirms importa**

    Pārbaudiet [Partneru katalogā]({{ site.baseurl }}/docs/katalogi-partneri/), vai uzņēmums jau nav ievadīts. Salīdziniet reģistrācijas numuru, lai neveidotu atkārtotu partnera ierakstu.

    **Uzņēmuma atrašana un partnera izveide**

    1. Atveriet funkciju **“LUR imports”**. Tiek atvērts logs **“Imports no Uzņēmumu reģistra”**.
    2. Ievadiet uzņēmuma **reģistrācijas numuru** vai **nosaukumu**. Piemēram, laukā “Nosaukums” ievadiet “solcraft”.
    3. Nospiediet **“Atlasīt UR”**. Rezultātu tabulā pārbaudiet uzņēmuma nosaukumu, reģistrācijas numuru un adresi un izvēlieties vajadzīgo ierakstu.
    4. Nospiediet **“Pievienot partneru sarakstam”**.
    5. Saņemot paziņojumu **“Izveidots partneris …”**, nospiediet **“Labi”**. Paziņojumā norādīts jaunā partnera kods programmā.


    **Importēto datu pārbaude un papildināšana**

    Pēc importa atrodiet izveidoto ierakstu Partneru katalogā. Pārbaudiet nosaukumu, reģistrācijas numuru, PVN maksātāja numuru, juridisko adresi un valsti. Papildiniet darbam nepieciešamos rekvizītus, piemēram, bankas kontus un kontaktinformāciju, un saglabājiet izmaiņas. Detalizēti skatiet sadaļu [Partneri]({{ site.baseurl }}/docs/katalogi-partneri/).


    **Partnera nosūtīšana uz Noliktavas/PL moduli**

    Ja izveidotais partneris jāizmanto arī Noliktavas/PL modulī, izvēlieties to Partneru katalogā un loga augšpusē nospiediet **“Eksportēt uz FWS Materiāli”**. Pēc nosūtīšanas pārbaudiet, vai partneris pieejams attiecīgajā modulī.


    **Ja reģistrācijas numurs datubāzē jau pastāv**

    Reģistrācijas numura dublikātu pārbaude darbojas arī LUR importā. Ja datubāzē jau ir partneris ar tādu pašu reģistrācijas numuru, nospiežot **“Pievienot partneru sarakstam”**, programma rāda kļūdu par jau esošu partneri un jaunu ierakstu neizveido.

    Atveriet Partneru katalogu, atrodiet esošo ierakstu pēc reģistrācijas numura un pārbaudiet tā rekvizītus. Ja nepieciešams atsevišķs ieraksts ar vienādu reģistrācijas numuru, dublikātu kontrole un izņēmumi aprakstīti sadaļā [Partneri]({{ site.baseurl }}/docs/katalogi-partneri/).

    **Ja neizdodas**

    - Ja vajadzīgais uzņēmums nav atrasts, pārbaudiet ievadīto numuru vai nosaukumu un atkārtojiet atlasi. Ja uzņēmums joprojām nav atrodams, partneri iespējams [izveidot manuāli]({{ site.baseurl }}/docs/katalogi-partneri/).

6.  Apgrozījuma bilance – pārskats, kas rāda kontu apgrozījumus un atlikumus noteiktā periodā.

7.  PZA – peļņas un zaudējumu aprēķins, kas atspoguļo uzņēmuma finanšu rezultātu (ieņēmumus un izdevumus).

8.  Menu/komandu meklētājs – rīks, kas ļauj ātri atrast un atvērt jebkuru sistēmas izvēlni vai komandu, izmantojot meklēšanas logu.
