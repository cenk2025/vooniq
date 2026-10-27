import type { Locale } from './i18n';

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[]; note?: string };
export type LegalDoc = { title: string; updated: string; intro: string; sections: LegalSection[] };
export type LegalDocId = 'privacy' | 'terms';

const UPDATED_FI = 'Päivitetty 27.10.2026';
const UPDATED_EN = 'Updated 27 October 2026';

const CONTROLLER_FI = [
  'VOON IQ (perustettavana oleva yhtiö)',
  'Vastuuhenkilö: Cenk Yakinlar',
  'Jyväskylä, Suomi',
  'Sähköposti: info@voon.fi',
];

const CONTROLLER_EN = [
  'VOON IQ (company in formation)',
  'Responsible person: Cenk Yakinlar',
  'Jyväskylä, Finland',
  'Email: info@voon.fi',
];

export const legalDocs: Record<LegalDocId, Record<Locale, LegalDoc>> = {
  privacy: {
    fi: {
      title: 'Tietosuojaseloste',
      updated: UPDATED_FI,
      intro:
        'Tässä selosteessa kerromme, miten käsittelemme henkilötietoja voon.fi-sivustolla. Seloste perustuu EU:n yleiseen tietosuoja-asetukseen (2016/679, ”GDPR”) ja tietosuojalakiin (1050/2018). Tuotteillamme (SkillPath, Talent Factory, BizPulse, Nordway) on omat tietosuojaselosteensa, jotka löytyvät kunkin palvelun sivustolta.',
      sections: [
        {
          heading: '1. Rekisterinpitäjä ja yhteyshenkilö',
          list: CONTROLLER_FI,
          note:
            'Yhtiö on perustamisvaiheessa. Päivitämme tähän selosteeseen yhtiön virallisen nimen ja Y-tunnuksen, kun yhtiö on merkitty kaupparekisteriin. Kaikissa tietosuoja-asioissa voit ottaa yhteyttä osoitteeseen info@voon.fi.',
        },
        {
          heading: '2. Mitä tietoja käsittelemme ja miksi',
          paragraphs: [
            'Yhteydenottolomake. Kun lähetät lomakkeen, käsittelemme antamiasi tietoja: organisaatio, nimi, sähköpostiosoite, kiinnostuksen kohde ja viesti. Käytämme tietoja yhteydenottoosi vastaamiseen, tarjousten laatimiseen ja asiakassuhteen hoitamiseen. Käsittelyn peruste on oikeutettu etumme vastata meille osoitettuihin yhteydenottoihin sekä sopimusta edeltävät toimenpiteet (GDPR 6 artiklan 1 kohdan b ja f alakohdat).',
            'Uutiskirje. Kun tilaat uutiskirjeen, käsittelemme sähköpostiosoitettasi, kielivalintaasi sekä tilauksen ja vahvistuksen ajankohtaa. Tilaus vahvistetaan sähköpostiin lähetettävällä linkillä, eikä osoitetta lisätä postituslistalle ennen vahvistusta. Lähetämme uutiskirjeitä noin kerran kuukaudessa. Käsittelyn peruste on suostumuksesi (6 artiklan 1 kohdan a alakohta). Voit peruuttaa suostumuksesi milloin tahansa jokaisen uutiskirjeen lopussa olevasta linkistä tai kirjoittamalla osoitteeseen info@voon.fi.',
            'Tekoälyavustaja Sofia. Chat-ikkunaan kirjoittamasi viestit välitetään tekoälypalvelulle vastauksen tuottamista varten. Emme tallenna keskusteluja omiin järjestelmiimme: keskustelu säilyy vain selaimesi muistissa ja katoaa, kun suljet tai lataat sivun uudelleen. Käytämme IP-osoitettasi hetkellisesti palvelun väärinkäytön estämiseen (pyyntöjen määrän rajoitus, säilytys enintään 10 minuuttia). Käsittelyn peruste on oikeutettu etumme vastata kävijöiden kysymyksiin ja suojata palvelua (6 artiklan 1 kohdan f alakohta). Älä kirjoita chat-ikkunaan arkaluonteisia henkilötietoja.',
            'Tekniset lokitiedot. Sivuston palvelin tallentaa teknisiä tietoja, kuten IP-osoitteen, selaimen tyypin, ajankohdan ja pyydetyn sivun. Tietoja käytetään sivuston toiminnan ja tietoturvan varmistamiseen. Peruste on oikeutettu etumme (6 artiklan 1 kohdan f alakohta).',
          ],
        },
        {
          heading: '3. Evästeet ja selaimen tallennustila',
          paragraphs: [
            'Emme käytä analytiikka-, seuranta- tai mainosevästeitä. Sivusto tallentaa selaimesi paikalliseen tallennustilaan (localStorage) vain seuraavat asetukset: valitsemasi kieli (locale), teema (theme-mode) ja tieto siitä, että olet nähnyt evästeilmoituksen (cookie-consent). Nämä ovat palvelun toiminnan kannalta välttämättömiä tai pyytämiäsi toimintoja, joihin ei sähköisen viestinnän palveluista annetun lain (917/2014) 205 §:n mukaan tarvita suostumusta.',
            'Voit poistaa tallennetut asetukset selaimesi asetuksista milloin tahansa. Jos otamme myöhemmin käyttöön analytiikkaa tai muita evästeitä, joihin tarvitaan suostumus, pyydämme sen ennen käyttöönottoa ja päivitämme tämän selosteen.',
          ],
        },
        {
          heading: '4. Mistä tiedot saadaan',
          paragraphs: [
            'Saamme tiedot sinulta itseltäsi lomakkeen tai chat-ikkunan kautta. Tekniset tiedot syntyvät, kun selaimesi on yhteydessä sivustoon.',
          ],
        },
        {
          heading: '5. Tietojen vastaanottajat ja palveluntarjoajat',
          paragraphs: [
            'Emme myy tai luovuta henkilötietoja markkinointitarkoituksiin. Käytämme seuraavia palveluntarjoajia, jotka käsittelevät tietoja lukuunamme:',
          ],
          list: [
            'Vercel Inc. (Yhdysvallat) – sivuston ylläpito ja tekniset lokit',
            'Resend (Yhdysvallat) – yhteydenottolomakkeen viestien välitys sähköpostiimme sekä uutiskirjeen tilaajalista ja lähetykset',
            'NVIDIA Corporation (Yhdysvallat) – tekoälymallin rajapinta chat-avustajan vastauksia varten',
            'Sähköpostipalveluntarjoajamme – vastaanotettujen viestien säilytys',
          ],
        },
        {
          heading: '6. Tietojen siirto EU:n ja ETA:n ulkopuolelle',
          paragraphs: [
            'Osa palveluntarjoajistamme sijaitsee Yhdysvalloissa. Siirrot perustuvat EU:n ja Yhdysvaltojen väliseen tietosuojakehykseen (EU–U.S. Data Privacy Framework), jos palveluntarjoaja on sitoutunut siihen, tai Euroopan komission hyväksymiin vakiosopimuslausekkeisiin. Saat lisätietoja suojatoimista ottamalla meihin yhteyttä.',
          ],
        },
        {
          heading: '7. Säilytysajat',
          list: [
            'Yhteydenotot: enintään 24 kuukautta viimeisestä yhteydenpidosta, ellei asiakassuhdetta synny.',
            'Asiakassuhteen tiedot: asiakassuhteen ajan ja sen jälkeen lain edellyttämän ajan (esimerkiksi kirjanpitolain mukaiset tositteet 6 vuotta).',
            'Uutiskirjeen tilaajatiedot: niin kauan kuin tilaus on voimassa. Perutun tilauksen osoite säilytetään estolistalla, jotta sinulle ei lähetetä viestejä vahingossa uudelleen; voit pyytää myös sen poistamista.',
            'Chat-keskustelut: emme säilytä. IP-osoite väärinkäytön estoa varten enintään 10 minuuttia.',
            'Tekniset lokit: palveluntarjoajan käytännön mukaisesti, tyypillisesti lyhyen ajan.',
          ],
        },
        {
          heading: '8. Sinun oikeutesi',
          paragraphs: ['Sinulla on oikeus:'],
          list: [
            'saada pääsy tietoihisi (GDPR 15 artikla)',
            'pyytää virheellisten tietojen oikaisua (16 artikla)',
            'pyytää tietojesi poistamista (17 artikla)',
            'pyytää käsittelyn rajoittamista (18 artikla)',
            'vastustaa oikeutettuun etuun perustuvaa käsittelyä (21 artikla)',
            'saada antamasi tiedot koneluettavassa muodossa (20 artikla)',
          ],
        },
        {
          heading: '9. Pyyntöjen tekeminen',
          paragraphs: [
            'Lähetä pyyntösi osoitteeseen info@voon.fi. Vastaamme viimeistään kuukauden kuluessa. Voimme pyytää sinua todentamaan henkilöllisyytesi ennen pyynnön käsittelyä.',
          ],
        },
        {
          heading: '10. Oikeus tehdä valitus',
          paragraphs: [
            'Jos katsot, että henkilötietojesi käsittely rikkoo tietosuojalainsäädäntöä, voit tehdä valituksen valvontaviranomaiselle: Tietosuojavaltuutetun toimisto, www.tietosuoja.fi.',
          ],
        },
        {
          heading: '11. Automaattinen päätöksenteko',
          paragraphs: [
            'Emme tee sivustolla automaattisia päätöksiä, joilla olisi sinuun kohdistuvia oikeusvaikutuksia tai vastaavia merkittäviä vaikutuksia (GDPR 22 artikla). Tekoäly avustaa – päätökset tekevät ihmiset.',
          ],
        },
        {
          heading: '12. Tietoturva',
          paragraphs: [
            'Sivuston liikenne on salattu (HTTPS). Keräämme vain tarpeelliset tiedot, rajaamme pääsyn tietoihin niitä tarvitseville ja huolehdimme palveluntarjoajien asianmukaisista sopimuksista.',
          ],
        },
        {
          heading: '13. Muutokset',
          paragraphs: [
            'Voimme päivittää tätä selostetta esimerkiksi palvelun tai lainsäädännön muuttuessa. Päivityspäivä näkyy selosteen alussa.',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy Notice',
      updated: UPDATED_EN,
      intro:
        'This notice explains how we process personal data on the voon.fi website. It is based on the EU General Data Protection Regulation (2016/679, "GDPR") and the Finnish Data Protection Act (1050/2018). Our products (SkillPath, Talent Factory, BizPulse, Nordway) have their own privacy notices on each service website. In case of differences, the Finnish version prevails.',
      sections: [
        {
          heading: '1. Controller and contact person',
          list: CONTROLLER_EN,
          note:
            'The company is being established. We will add its official name and business ID to this notice once it is entered in the Trade Register. For any data protection matter, contact info@voon.fi.',
        },
        {
          heading: '2. What data we process and why',
          paragraphs: [
            'Contact form. When you submit the form, we process the details you provide: organisation, name, email address, area of interest and message. We use them to reply to you, prepare offers and manage a customer relationship. The legal bases are our legitimate interest in answering enquiries and steps taken prior to entering into a contract (GDPR Article 6(1)(b) and (f)).',
            'AI assistant Sofia. Messages you type in the chat window are sent to an AI service to generate a reply. We do not store conversations in our own systems: the conversation exists only in your browser memory and disappears when you close or reload the page. We use your IP address briefly to prevent abuse (rate limiting, kept for at most 10 minutes). The legal basis is our legitimate interest in answering visitors\' questions and protecting the service (Article 6(1)(f)). Please do not enter sensitive personal data in the chat.',
            'Newsletter. When you subscribe to the newsletter, we process your email address, your language and the time of subscription and confirmation. The subscription is confirmed through a link sent to your email; your address is not added to the mailing list before you confirm. We send the newsletter about once a month. The legal basis is your consent (Article 6(1)(a)). You can withdraw your consent at any time with the link at the end of every newsletter or by writing to info@voon.fi.',
            'Technical logs. The hosting server records technical data such as IP address, browser type, time and requested page to keep the site running and secure. The legal basis is our legitimate interest (Article 6(1)(f)).',
          ],
        },
        {
          heading: '3. Cookies and browser storage',
          paragraphs: [
            'We do not use analytics, tracking or advertising cookies. The site stores only these settings in your browser\'s local storage: your language (locale), theme (theme-mode) and that you have seen the cookie notice (cookie-consent). These are strictly necessary or requested by you and do not require consent under section 205 of the Finnish Act on Electronic Communications Services (917/2014).',
            'You can delete the stored settings in your browser at any time. If we later introduce analytics or other cookies that require consent, we will ask for it first and update this notice.',
          ],
        },
        {
          heading: '4. Sources of data',
          paragraphs: ['We receive data from you through the form or the chat window. Technical data is created when your browser connects to the site.'],
        },
        {
          heading: '5. Recipients and service providers',
          paragraphs: ['We do not sell personal data or disclose it for marketing. The following providers process data on our behalf:'],
          list: [
            'Vercel Inc. (United States) – hosting and technical logs',
            'Resend (United States) – delivering contact form messages to our email, and the newsletter subscriber list and mailings',
            'NVIDIA Corporation (United States) – AI model API for the chat assistant',
            'Our email provider – storing received messages',
          ],
        },
        {
          heading: '6. Transfers outside the EU/EEA',
          paragraphs: [
            'Some providers are located in the United States. Transfers rely on the EU–U.S. Data Privacy Framework where the provider is certified, or on Standard Contractual Clauses approved by the European Commission. Contact us for more information on the safeguards.',
          ],
        },
        {
          heading: '7. Retention',
          list: [
            'Enquiries: up to 24 months after the last contact, unless a customer relationship is formed.',
            'Customer data: for the duration of the relationship and afterwards as required by law (e.g. accounting records 6 years under the Finnish Accounting Act).',
            'Newsletter subscribers: for as long as the subscription is active. After you unsubscribe, the address is kept on a suppression list so that you are not emailed again by mistake; you can also ask us to delete it.',
            'Chat conversations: not stored. IP address for abuse prevention at most 10 minutes.',
            'Technical logs: according to the hosting provider\'s practice, typically a short period.',
          ],
        },
        {
          heading: '8. Your rights',
          paragraphs: ['You have the right to:'],
          list: [
            'access your data (GDPR Article 15)',
            'rectification of inaccurate data (Article 16)',
            'erasure (Article 17)',
            'restriction of processing (Article 18)',
            'object to processing based on legitimate interest (Article 21)',
            'data portability (Article 20)',
          ],
        },
        {
          heading: '9. Making a request',
          paragraphs: ['Send your request to info@voon.fi. We respond within one month and may ask you to verify your identity first.'],
        },
        {
          heading: '10. Right to lodge a complaint',
          paragraphs: ['If you believe your data is processed unlawfully, you can lodge a complaint with the supervisory authority: Office of the Data Protection Ombudsman, www.tietosuoja.fi.'],
        },
        {
          heading: '11. Automated decision-making',
          paragraphs: ['We make no automated decisions on the site that produce legal or similarly significant effects for you (GDPR Article 22). AI assists – people decide.'],
        },
        {
          heading: '12. Security',
          paragraphs: ['Traffic to the site is encrypted (HTTPS). We collect only what is needed, limit access to those who need it and have appropriate agreements with our providers.'],
        },
        {
          heading: '13. Changes',
          paragraphs: ['We may update this notice, for example when the service or legislation changes. The update date is shown at the top.'],
        },
      ],
    },
  },
  terms: {
    fi: {
      title: 'Käyttöehdot',
      updated: UPDATED_FI,
      intro:
        'Nämä ehdot koskevat voon.fi-sivuston käyttöä. Käyttämällä sivustoa hyväksyt ehdot. Tuotteillamme (SkillPath, Talent Factory, BizPulse, Nordway) ja asiakassopimuksilla on omat ehtonsa, joita sovelletaan niiden käyttöön.',
      sections: [
        { heading: '1. Palveluntarjoaja', list: CONTROLLER_FI },
        {
          heading: '2. Sivuston käyttö',
          paragraphs: ['Voit käyttää sivustoa tiedonhakuun ja yhteydenottoon. Sivustoa ei saa käyttää lainvastaisesti tai tavalla, joka haittaa sen toimintaa. Kiellettyä on erityisesti:'],
          list: [
            'sivuston tai sen rajapintojen kuormittaminen automaattisesti tai poikkeuksellisen suurella pyyntömäärällä',
            'tietoturvan kiertäminen tai luvaton pääsy järjestelmiin',
            'chat-avustajan käyttäminen haitallisen, loukkaavan tai lainvastaisen sisällön tuottamiseen',
          ],
        },
        {
          heading: '3. Tekoälyavustaja',
          paragraphs: [
            'Chat-avustaja Sofian vastaukset tuotetaan automaattisesti tekoälyllä. Ne voivat olla puutteellisia tai virheellisiä, eivätkä ne ole oikeudellista, taloudellista tai muuta ammatillista neuvontaa. Avustajan vastaukset eivät ole sitovia tarjouksia tai sitoumuksia. Tarkista tärkeät tiedot meiltä osoitteesta info@voon.fi. Älä kirjoita chat-ikkunaan arkaluonteisia henkilötietoja.',
          ],
        },
        {
          heading: '4. Hinnat ja sopimukset',
          paragraphs: [
            'Sivustolla esitetyt hinnat ovat suuntaa-antavia ja ilman arvonlisäveroa. Sivuston sisältö ei ole sitova tarjous. Sopimus syntyy vasta, kun osapuolet ovat hyväksyneet kirjallisen tarjouksen tai sopimuksen.',
          ],
        },
        {
          heading: '5. Immateriaalioikeudet',
          paragraphs: [
            'Sivuston sisältö, kuten tekstit, kuvat, logot ja ulkoasu, on suojattu tekijänoikeudella ja muilla immateriaalioikeuksilla. VOON IQ, SkillPath, Talent Factory, BizPulse ja Nordway ovat VOON IQ:n tunnuksia. Sisältöä saa katsella ja jakaa linkkinä, mutta sen kopioiminen, muokkaaminen tai kaupallinen käyttö edellyttää kirjallista lupaamme.',
          ],
        },
        {
          heading: '6. Vastuunrajoitus',
          paragraphs: [
            'Sivusto tarjotaan sellaisena kuin se on. Pyrimme pitämään tiedot ajantasaisina ja sivuston käytettävissä, mutta emme takaa tietojen virheettömyyttä tai sivuston keskeytyksetöntä toimintaa. Emme vastaa välillisistä vahingoista, jotka aiheutuvat sivuston käytöstä tai siitä, ettei sitä voi käyttää, siltä osin kuin pakottava lainsäädäntö sen sallii. Ehdot eivät rajoita kuluttajansuojalain mukaisia oikeuksiasi.',
          ],
        },
        {
          heading: '7. Linkit muille sivustoille',
          paragraphs: ['Sivustolla voi olla linkkejä muiden ylläpitämille sivustoille. Emme vastaa niiden sisällöstä tai tietosuojakäytännöistä.'],
        },
        {
          heading: '8. Henkilötiedot',
          paragraphs: ['Käsittelemme henkilötietoja tietosuojaselosteemme mukaisesti: voon.fi/tietosuoja.'],
        },
        {
          heading: '9. Muutokset',
          paragraphs: ['Voimme muuttaa näitä ehtoja. Muutokset tulevat voimaan, kun päivitetyt ehdot julkaistaan sivustolla.'],
        },
        {
          heading: '10. Sovellettava laki ja riitojen ratkaisu',
          paragraphs: [
            'Ehtoihin sovelletaan Suomen lakia. Pyrimme ratkaisemaan erimielisyydet ensisijaisesti neuvottelemalla. Yritysten väliset riidat ratkaistaan Keski-Suomen käräjäoikeudessa. Kuluttaja voi viedä asian Kuluttajariitalautakunnan käsiteltäväksi (www.kuluttajariita.fi) tai nostaa kanteen kotipaikkansa käräjäoikeudessa.',
          ],
        },
        { heading: '11. Yhteystiedot', paragraphs: ['Kysymykset ehdoista: info@voon.fi.'] },
      ],
    },
    en: {
      title: 'Terms of Use',
      updated: UPDATED_EN,
      intro:
        'These terms apply to the use of the voon.fi website. By using the site you accept them. Our products (SkillPath, Talent Factory, BizPulse, Nordway) and customer agreements have their own terms. In case of differences, the Finnish version prevails.',
      sections: [
        { heading: '1. Service provider', list: CONTROLLER_EN },
        {
          heading: '2. Use of the site',
          paragraphs: ['You may use the site to find information and contact us. The site must not be used unlawfully or in a way that disrupts it. In particular, the following are prohibited:'],
          list: [
            'loading the site or its APIs with automated or unusually high volumes of requests',
            'circumventing security or gaining unauthorised access to systems',
            'using the chat assistant to produce harmful, offensive or unlawful content',
          ],
        },
        {
          heading: '3. AI assistant',
          paragraphs: [
            'Replies from the chat assistant Sofia are generated automatically by AI. They may be incomplete or wrong and are not legal, financial or other professional advice. They are not binding offers or commitments. Please confirm important information with us at info@voon.fi. Do not enter sensitive personal data in the chat.',
          ],
        },
        {
          heading: '4. Prices and agreements',
          paragraphs: ['Prices on the site are indicative and exclude VAT. Site content is not a binding offer. An agreement is formed only when both parties have accepted a written offer or contract.'],
        },
        {
          heading: '5. Intellectual property',
          paragraphs: [
            'Site content such as texts, images, logos and layout is protected by copyright and other intellectual property rights. VOON IQ, SkillPath, Talent Factory, BizPulse and Nordway are names and marks of VOON IQ. You may view the content and share links to it; copying, modifying or commercial use requires our written permission.',
          ],
        },
        {
          heading: '6. Limitation of liability',
          paragraphs: [
            'The site is provided as is. We aim to keep information up to date and the site available but do not guarantee accuracy or uninterrupted operation. To the extent permitted by mandatory law, we are not liable for indirect damages arising from use of, or inability to use, the site. These terms do not limit your rights under consumer protection law.',
          ],
        },
        {
          heading: '7. Links to other sites',
          paragraphs: ['The site may link to sites maintained by others. We are not responsible for their content or privacy practices.'],
        },
        {
          heading: '8. Personal data',
          paragraphs: ['We process personal data according to our privacy notice: voon.fi/tietosuoja.'],
        },
        {
          heading: '9. Changes',
          paragraphs: ['We may change these terms. Changes take effect when the updated terms are published on the site.'],
        },
        {
          heading: '10. Governing law and disputes',
          paragraphs: [
            'These terms are governed by Finnish law. We aim to resolve disagreements by negotiation first. Disputes between businesses are settled in the Central Finland District Court. Consumers may refer the matter to the Finnish Consumer Disputes Board (www.kuluttajariita.fi) or bring an action in the district court of their place of residence.',
          ],
        },
        { heading: '11. Contact', paragraphs: ['Questions about these terms: info@voon.fi.'] },
      ],
    },
  },
};
