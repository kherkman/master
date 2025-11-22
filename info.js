TERVETULOA WEBMASTERING STUDIOON!

Tämä työkalu on suunniteltu viimeistelemään äänitiedostosi (masterointi). Alla on lyhyt opas työvaiheisiin ja ominaisuuksiin.

1. ALOITUS
   - Lataa masteroitava tiedosto ("Lataa Master").
   - Lataa halutessasi referenssikappale ("Lataa Ref"). Tämä auttaa vertailemaan omaa soundiasi ammattilaisen miksaukseen.
   - Ohjelma tunnistaa automaattisesti tiedostojen näytteenottotaajuuden (Sample Rate) ja bittisyvyyden.

2. SUODATTIMET (FILTERS)
   - HPF (High Pass Filter): Leikkaa turhat matalat taajuudet pois. Yleensä 20-30 Hz on turvallinen alue poistamaan "mutaa" ja vapauttamaan energiaa.
   - LPF (Low Pass Filter): Leikkaa ultra-korkeat taajuudet.
   - Slope (Jyrkkyys): Valitse kuinka jyrkästi suodatin leikkaa. 12dB on loiva ja luonnollinen, Brickwall leikkaa kaiken kuin seinään.

3. 16-KAISTAINEN EQ (TAAJUUSKORJAIN)
   - Säädä taajuuksia liukusäätimillä.
   - Gain: Nosta tai laske taajuuden voimakkuutta.
   - Q-arvo: Säätimen alla oleva vaakaslideri. Pieni arvo = laaja vaikutusalue (pehmeä). Suuri arvo = kapea vaikutusalue (tarkka korjaus).

4. DYNAAMINEN EQ (TÄRKEÄ!)
   Liukusäätimien alla on "Dyn"-osio (Threshold & Ratio). Tämä tekee EQ:sta älykkään. Se ei vaikuta koko ajan, vaan ainoastaan silloin, kun kyseinen taajuus soi liian lujaa.

   Käyttöohje:
   1. Etsi ongelmakohta (esim. virveli on liian kireä 3kHz kohdalla tai basso kumisee 120Hz kohdalla).
   2. Mene kyseisen taajuuden kohdalle.
   3. Aseta numerokenttään (Threshold) kynnysarvo, esim. -20. Tämä tarkoittaa: "Reagoi, kun tämän taajuuden voimakkuus ylittää -20dB".
   4. Nosta vieressä olevaa pientä liukusäädintä (Ratio). Tämä määrittää kuinka paljon ääntä painetaan alas.
   5. Tarkkaile punaista palkkia EQ:n yläpuolella. Se näyttää reaaliajassa, kuinka paljon dynaaminen EQ vaimentaa ääntä.

   Esimerkki: Haluat kirkkaan laulun, mutta "S"-kirjaimet sihisevät. Aseta 8kHz tai 12kHz kohdalle dynaaminen EQ, joka iskee kiinni vain kovissa s-äänteissä.

5. MATCH EQ (TAIKA-NAPPI)
   - Jos olet ladannut referenssiraidan, paina "Match EQ to Ref".
   - Ohjelma analysoi molempien kappaleiden spektrin ja säätää EQ:n automaattisesti siten, että masterisi muistuttaa referenssin taajuusbalanssia.

6. MASTER LIMITER
   Tämä on viimeinen palikka ketjussa.
   - Ceiling: Ehdoton kattoraja. Oletus -1.0 dB on turvallinen suoratoistopalveluille (Spotify, YouTube).
   - Gain: Nosta äänenvoimakkuutta tästä, kunnes saavutat halutun voimakkuuden. Limiter estää säröytymisen (leikkaa huiput Ceiling-arvoon).

7. VIENTI (EXPORT)
   - Valitse haluttu Sample Rate (esim. 44100 Hz CD-laadulle).
   - Valitse Bit Depth (16-bit CD:lle, 24-bit/32-bit arkistointiin).
   - Paina "Tallenna WAV". Prosessointi tapahtuu offline-tilassa korkealla laadulla.

VINKKI: Käytä "Soita vain referenssi" -nappia ja vertaile omaa masteriasi usein referenssiin korvakuulolta.