// ===================== DEFAULT SCHOOL DATA =====================
// Pre-loaded classes, teachers, and students for the school
// This runs once on first visit to populate the system

// Class-to-Group mapping
const CLASS_GROUPS = {
    'A': ['ZOE', 'RHEMA', 'SHALOM', 'ELEOS', 'EZER', 'BARACH', 'YADAH', 'AGAPE', 'KAIROS', 'EXOUSIA', 'HAGIAZO', 'CHARIS', 'HALLAL', 'PNEUMA', 'KOINONIA', 'SIMCHAH'],
    'B': ['DUNAMIS'],
    'C': ['HESED', 'KAVOD', 'SOPHIA', 'TOWDAH', 'SHABACH', 'ZAMAR', 'AHAVA'],
    'D': ['TEHILLAH'],
};

function getGroupForClass(className) {
    for (const [group, classes] of Object.entries(CLASS_GROUPS)) {
        if (classes.includes(className)) return group;
    }
    return '';
}

const DEFAULT_CLASSES = [
    // Group A
    'ZOE',
    'RHEMA',
    'SHALOM',
    'ELEOS',
    'EZER',
    'BARACH',
    'YADAH',
    'AGAPE',
    'KAIROS',
    'EXOUSIA',
    'HAGIAZO',
    'CHARIS',
    'HALLAL',
    'PNEUMA',
    'KOINONIA',
    'SIMCHAH',
    // Group B
    'DUNAMIS',
    // Group C
    'HESED',
    'KAVOD',
    'SOPHIA',
    'TOWDAH',
    'SHABACH',
    'ZAMAR',
    'AHAVA',
    // Group D
    'TEHILLAH',
];

const DEFAULT_TEACHERS = [
    // ZOE
    { name: 'Ms. Happiness Usulor', subject: 'Head Teacher', classes: 'ZOE', phone: '', email: '' },
    { name: 'Mr. Fiyinfoluwa Paul Adeyemi', subject: 'Assistant Teacher', classes: 'ZOE', phone: '', email: '' },

    // RHEMA
    { name: 'Ms. Azuka Chukwuma', subject: 'Head Teacher', classes: 'RHEMA', phone: '', email: '' },
    { name: 'Mr. Oluwatosin Timothy', subject: 'Assistant Teacher', classes: 'RHEMA', phone: '', email: '' },

    // SHALOM
    { name: 'Mr. Emmanuel Oluwabamise Alade', subject: 'Head Teacher', classes: 'SHALOM', phone: '', email: '' },
    { name: 'Ms. Toluwanimi Odetola', subject: 'Assistant Teacher', classes: 'SHALOM', phone: '', email: '' },

    // ELEOS
    { name: 'Ms. Ayanwale Ayooluwa', subject: 'Head Teacher', classes: 'ELEOS', phone: '', email: '' },
    { name: 'Ms. Ayanbanjo Oluwabunmi', subject: 'Assistant Teacher', classes: 'ELEOS', phone: '', email: '' },

    // EZER
    { name: 'Ms. Ruth Adeyemo', subject: 'Head Teacher', classes: 'EZER', phone: '', email: '' },
    { name: 'Ms. Titilayo Akingoroye', subject: 'Assistant Teacher', classes: 'EZER', phone: '', email: '' },

    // BARACH
    { name: 'Ms. Sonna Ausla Nebonta', subject: 'Head Teacher', classes: 'BARACH', phone: '', email: '' },
    { name: 'Ms. Olusola Abigail', subject: 'Assistant Teacher', classes: 'BARACH', phone: '', email: '' },

    // YADAH
    { name: 'Ms. Blessing David', subject: 'Head Teacher', classes: 'YADAH', phone: '', email: '' },
    { name: 'Ms. Oyindamola Jesu Ayanfeoluwa', subject: 'Assistant Teacher', classes: 'YADAH', phone: '', email: '' },

    // AGAPE
    { name: 'Mr. Titus Uduakobong', subject: 'Head Teacher', classes: 'AGAPE', phone: '', email: '' },
    { name: 'Ms. Modola M. Ola-Akintunde', subject: 'Assistant Teacher', classes: 'AGAPE', phone: '', email: '' },

    // KAIROS
    { name: 'Ms. Grace Amah Ukpai', subject: 'Head Teacher', classes: 'KAIROS', phone: '', email: '' },
    { name: 'Ms. Temisan Eguando', subject: 'Assistant Teacher', classes: 'KAIROS', phone: '', email: '' },

    // EXOUSIA
    { name: 'Mr. Maduabuchi Fidel Chidubem', subject: 'Head Teacher', classes: 'EXOUSIA', phone: '', email: '' },
    { name: 'Ms. Adenowo Deborah', subject: 'Assistant Teacher', classes: 'EXOUSIA', phone: '', email: '' },

    // HAGIAZO
    { name: 'Mr. Annointed Ife-Kristi Odediran', subject: 'Head Teacher', classes: 'HAGIAZO', phone: '', email: '' },
    { name: 'Mr. Jeremiah Adegoke', subject: 'Assistant Teacher', classes: 'HAGIAZO', phone: '', email: '' },

    // CHARIS
    { name: 'Ms. Oluwaseun Gbade-Ikuejube', subject: 'Head Teacher', classes: 'CHARIS', phone: '', email: '' },
    { name: 'Ms. Oluwafadekemi Omotolani Adeniji', subject: 'Assistant Teacher', classes: 'CHARIS', phone: '', email: '' },

    // HALLAL
    { name: 'Ms. Deborah Nifemi Adarabioyo', subject: 'Head Teacher', classes: 'HALLAL', phone: '', email: '' },
    { name: 'Ms. Toluwanimi Abisola', subject: 'Assistant Teacher', classes: 'HALLAL', phone: '', email: '' },

    // PNEUMA
    { name: 'Ms. Stella Ogundairo', subject: 'Head Teacher', classes: 'PNEUMA', phone: '', email: '' },
    { name: 'Ms. Ruth Adeyemo', subject: 'Assistant Teacher', classes: 'PNEUMA', phone: '', email: '' },

    // KOINONIA
    { name: 'Mr. Pelumi David Olaifa', subject: 'Head Teacher', classes: 'KOINONIA', phone: '', email: '' },
    { name: 'Ms. Folaranmi Othniel', subject: 'Assistant Teacher', classes: 'KOINONIA', phone: '', email: '' },

    // SIMCHAH
    { name: 'Ms. Oyewale Oreoluwa', subject: 'Head Teacher', classes: 'SIMCHAH', phone: '', email: '' },
    { name: 'Ms. Obiageli Eyinjuoluwa', subject: 'Assistant Teacher', classes: 'SIMCHAH', phone: '', email: '' },

    // DUNAMIS
    { name: 'Mr. Oluwaseun Onomade', subject: 'Head Teacher (Schedule 1)', classes: 'DUNAMIS', phone: '', email: '' },
    { name: 'Ms. Ayooluwa Adebisi Ayanwale', subject: 'Head Teacher (Schedule 2)', classes: 'DUNAMIS', phone: '', email: '' },

    // HESED
    { name: 'Ms. Blessing David', subject: 'Head Teacher', classes: 'HESED', phone: '', email: '' },
    { name: 'Ms. Sonna Ausla Nebonta', subject: 'Assistant Teacher', classes: 'HESED', phone: '', email: '' },

    // KAVOD
    { name: 'Mr. Jeremiah Moradeyo Adegoke', subject: 'Head Teacher', classes: 'KAVOD', phone: '', email: '' },
    { name: 'Ms. Oyeladun Ifeoluwa Ojo', subject: 'Assistant Teacher', classes: 'KAVOD', phone: '', email: '' },

    // SOPHIA
    { name: 'Ms. Kehinde Aderibigbe', subject: 'Head Teacher', classes: 'SOPHIA', phone: '', email: '' },
    { name: 'Ms. Edeh Tessy', subject: 'Assistant Teacher', classes: 'SOPHIA', phone: '', email: '' },

    // TOWDAH
    { name: 'Ms. Praise Isioma Eziedo', subject: 'Head Teacher', classes: 'TOWDAH', phone: '', email: '' },
    { name: 'Mr. Fidel Chidubem', subject: 'Assistant Teacher', classes: 'TOWDAH', phone: '', email: '' },

    // SHABACH
    { name: 'Ms. Modola M. Ola-Akintunde', subject: 'Head Teacher', classes: 'SHABACH', phone: '', email: '' },
    { name: 'Ms. Brenda Njowe', subject: 'Assistant Teacher', classes: 'SHABACH', phone: '', email: '' },

    // ZAMAR
    { name: 'Ms. Bello Abigail Titilayo Olusola', subject: 'Head Teacher', classes: 'ZAMAR', phone: '', email: '' },
    { name: 'Ms. Oluwatoyin Alabede', subject: 'Assistant Teacher', classes: 'ZAMAR', phone: '', email: '' },

    // AHAVA
    { name: 'Ms. Toluwanimi Odetola', subject: 'Head Teacher', classes: 'AHAVA', phone: '', email: '' },
    { name: 'Ms. Modupe Bukola Illesanmi', subject: 'Assistant Teacher', classes: 'AHAVA', phone: '', email: '' },

    // TEHILLAH
    { name: 'Ms. Iisominea Isozo Amos', subject: 'Head Teacher (Schedule 1)', classes: 'TEHILLAH', phone: '', email: '' },
    { name: 'Ms. Oladoyin Oluwatobiloba Fasakin', subject: 'Head Teacher (Schedule 2)', classes: 'TEHILLAH', phone: '', email: '' },
];

const DEFAULT_STUDENTS = [
    // ZOE - Schedule 1
    { name: 'Adeewaoluwa Ibiyemi', class: 'ZOE', schedule: 1, email: 'mysteeqsaav@gmail.com', country: 'Nigeria' },
    { name: 'Anna Yusuf Lazarus', class: 'ZOE', schedule: 1, email: 'chagwathlama@gmail.com', country: 'Nigeria' },
    { name: 'Chidindu Zion Udeze', class: 'ZOE', schedule: 1, email: 'chidimmaobiejesi26@gmail.com', country: 'United Kingdom' },
    { name: 'Eriifeoluwa David Akanbi', class: 'ZOE', schedule: 1, email: 'Thordeemuh@gmail.com', country: 'United Kingdom' },
    { name: 'EriJesu Joshua Tubi', class: 'ZOE', schedule: 1, email: 'oluwaseuntomiloye2@gmail.com', country: 'United Kingdom' },
    { name: 'Imisioluwa Grace Lawal', class: 'ZOE', schedule: 1, email: 'omotayofalolu@gmail.com', country: 'Nigeria' },
    { name: 'Joshua Olukayode Andre-Johnson', class: 'ZOE', schedule: 1, email: 'olukayode.johnson.ng@gmail.com', country: 'Nigeria' },
    { name: 'Keonna Samuel', class: 'ZOE', schedule: 1, email: 'omehpatience08@gmail.com', country: 'Nigeria' },
    { name: 'Natania Joseph Shaubora', class: 'ZOE', schedule: 1, email: 'hadassahbala@gmail.com', country: 'Nigeria' },
    { name: 'OLUWAFOWOKANMI Edward Ayotomiwa', class: 'ZOE', schedule: 1, email: 'ann.oyegunle@gmail.com', country: 'Nigeria' },
    { name: 'OLUWAJENYO JAYDEN OKINBALOYE', class: 'ZOE', schedule: 1, email: 'okinbaloyejoy@gmail.com', country: 'Nigeria' },
    { name: 'Oluwateniola Ayanniyi', class: 'ZOE', schedule: 1, email: 'moyosoluwaayanniyi@gmail.com', country: 'United Kingdom' },
    { name: 'Rinnah Idowu', class: 'ZOE', schedule: 1, email: 'modupesidowu@gmail.com', country: 'Nigeria' },
    { name: 'Victory Anjolaoluwa Gabriel-Showole', class: 'ZOE', schedule: 1, email: 'gabrielkayshow@gmail.com', country: 'Nigeria' },
    { name: 'Zinachimdiebube Victoria Chukwueze', class: 'ZOE', schedule: 1, email: 'Chukwuezechidimma@gmail.com', country: 'Nigeria' },

    // ZOE - Schedule 2
    { name: 'Asher IteOluwakiishi Ogunbajo', class: 'ZOE', schedule: 2, email: 'ariyikefoli@gmail.com', country: 'Nigeria' },
    { name: 'Chinelo Eliana Maduka', class: 'ZOE', schedule: 2, email: 'Becky.omene@nhs.scot', country: 'United Kingdom' },
    { name: 'David Adefehinti', class: 'ZOE', schedule: 2, email: 'betransformed8@gmail.com', country: 'United Kingdom' },
    { name: 'David Jesutosimile Adebayo', class: 'ZOE', schedule: 2, email: 'David.Jesutosimile@gmail.com', country: 'Nigeria' },
    { name: 'Issac Izinyon', class: 'ZOE', schedule: 2, email: 'E4maichoku@yahoo.com', country: 'Nigeria' },
    { name: 'Jasmine Etta Mbora', class: 'ZOE', schedule: 2, email: 'essiencindy22@gmail.com', country: 'Nigeria' },
    { name: 'Nathaniel Miracle Ani', class: 'ZOE', schedule: 2, email: 'nathanielmiracleani@gmail.com', country: 'Germany' },
    { name: 'Olanma Zoey Agha', class: 'ZOE', schedule: 2, email: 'Ama.nwaozuzu@gmail.com', country: 'Germany' },
    { name: 'Olusola Chidiebube Abdullahi', class: 'ZOE', schedule: 2, email: 'Chisom.v.anunobi@gmail.com', country: 'Nigeria' },
    { name: 'Oluwafikayomi Joanna Busari', class: 'ZOE', schedule: 2, email: 'busarimoyinoluwa@gmail.com', country: 'United Kingdom' },
    { name: 'Omari Imisioluwa Ogunbadejo', class: 'ZOE', schedule: 2, email: 'Abisola.odu@gmail.com', country: 'Republic of Ireland' },
    { name: 'Rinnah Teniola Idowu', class: 'ZOE', schedule: 2, email: 'modupesidowu@gmail.com', country: 'Nigeria' },
    { name: 'Ezekiel Fortune Oyor', class: 'ZOE', schedule: 2, email: 'tojuoyor@gmail.com', country: 'Nigeria' },
    { name: 'Timeyin Emiko', class: 'ZOE', schedule: 2, email: 'olori@oloriatuwatseiii.com', country: 'Nigeria' },

    // RHEMA - Schedule 1
    { name: 'Adedunmade Tiwalola Alli', class: 'RHEMA', schedule: 1, email: 'adedunmadea@gmail.com', country: 'Nigeria' },
    { name: 'Alethea Jescha Marchéline Ssempala Kakule', class: 'RHEMA', schedule: 1, email: 'maria.ssempala@yahoo.com', country: 'United Kingdom' },
    { name: 'Arabelle Adeyemi', class: 'RHEMA', schedule: 1, email: 'olade2015@gmail.com', country: 'United Kingdom' },
    { name: 'Christabella Adeyemi', class: 'RHEMA', schedule: 1, email: 'omowumiadeyemi01@gmail.com', country: 'United Kingdom' },
    { name: 'DOMINION AYOMIKUN ADELEKE', class: 'RHEMA', schedule: 1, email: 'ruthadegbemi@gmail.com', country: 'Nigeria' },
    { name: 'Kamdinachukwu David Obiajulu', class: 'RHEMA', schedule: 1, email: 'Nnamaho@gmail.com', country: 'Nigeria' },
    { name: 'Samuel Oluwasegun Ajose', class: 'RHEMA', schedule: 1, email: 'samuelajose035@gmail.com', country: 'Nigeria' },
    { name: 'Zikachimdi Gabriella Adaeze Amuchie', class: 'RHEMA', schedule: 1, email: 'zikaamuchie@gmail.com', country: 'Nigeria' },

    // RHEMA - Schedule 2
    { name: 'Caris Ehinomhen Agwinede', class: 'RHEMA', schedule: 2, email: 'aisaboresther2@gmail.com', country: 'United Kingdom' },
    { name: 'Daniel Jamal Elvis', class: 'RHEMA', schedule: 2, email: 'elvisdanieljamal22@gmail.com', country: 'Nigeria' },
    { name: 'Elizabeth Eyenabasi Ewalefo', class: 'RHEMA', schedule: 2, email: 'Ewalefoemmanuel@gmail.com', country: 'United Kingdom' },
    { name: 'Ihuaku Hannah Anyamele', class: 'RHEMA', schedule: 2, email: 'steph.anyamele@gmail.com', country: 'Nigeria' },
    { name: 'Itunuoluwa Odebiyi', class: 'RHEMA', schedule: 2, email: 'qadowshrayo@gmail.com', country: 'Nigeria' },
    { name: 'Liam Bamigboye', class: 'RHEMA', schedule: 2, email: 'wumilara@rocketmail.com', country: 'Nigeria' },
    { name: 'Lucy Eseose Morka', class: 'RHEMA', schedule: 2, email: 'Yemisicasterd@gmail.com', country: 'United Kingdom' },
    { name: 'Olaoluwa Jedidiah Osewa', class: 'RHEMA', schedule: 2, email: 'davidolawaleosewa@gmail.com', country: 'Nigeria' },
    { name: 'Oluwafifehanmi Oyinlola Olorode', class: 'RHEMA', schedule: 2, email: 'Oluwafifehanmi.olorode@gmail.com', country: 'Nigeria' },
    { name: 'Omokorede Nathan Olujinmi', class: 'RHEMA', schedule: 2, email: 'adegokeolujinmi@gmail.com', country: 'United Kingdom' },
    { name: 'Timeyin Emiko', class: 'RHEMA', schedule: 2, email: 'olori@oloriatuwatseiii.com', country: 'Nigeria' },

    // SHALOM - Schedule 1
    { name: 'Ava-Rae Ogunniyi', class: 'SHALOM', schedule: 1, email: 'Rebecca_akins@live.co.uk', country: 'UK' },
    { name: 'Daniel Bebeoluwa Adekunle', class: 'SHALOM', schedule: 1, email: 'mojisolaomowale@yahoo.com', country: 'England' },
    { name: 'Ewaoluwa Michael', class: 'SHALOM', schedule: 1, email: 'Preciousilesanmi@gmail.com', country: 'Nigeria' },
    { name: 'Mojubafoluwa Olufohunsi', class: 'SHALOM', schedule: 1, email: 'olufohunsi@gmail.com', country: 'United Kingdom' },
    { name: 'Odey Tremendous Oyame', class: 'SHALOM', schedule: 1, email: 'odeytheresa283@gmail.com', country: 'Nigeria' },
    { name: 'Oluwadesimi Fabiyi', class: 'SHALOM', schedule: 1, email: 'omotolanioladipo@gmail.com', country: 'United Kingdom' },
    { name: 'Peace Ogigai', class: 'SHALOM', schedule: 1, email: 'r.ebikueluye@gmail.com', country: 'Nigeria' },
    { name: 'Tioluwanimi Shaun Ajayi', class: 'SHALOM', schedule: 1, email: 'oyinkomolafe@gmail.com', country: 'United Kingdom' },
    { name: 'Tionge Sakala', class: 'SHALOM', schedule: 1, email: 'phylliskaps@gmail.com', country: 'United Kingdom' },

    // SHALOM - Schedule 2
    { name: 'Rachael Elujoba', class: 'SHALOM', schedule: 2, email: 'estherelujoba@gmail.com', country: 'United Kingdom' },
    { name: 'Aisosa Praise Ogbemudia', class: 'SHALOM', schedule: 2, email: 'morexwell@gmail.com', country: 'United Kingdom' },
    { name: 'Charissa Temiloluwa Olumoriyio', class: 'SHALOM', schedule: 2, email: 'ifefolashayo@gmail.com', country: 'United Kingdom' },
    { name: 'Chimdubem Daniel Ude', class: 'SHALOM', schedule: 2, email: 'Ceenonny@yahoo.com', country: 'Nigeria' },
    { name: 'Daniel Adeyemo', class: 'SHALOM', schedule: 2, email: 'fiyin.okunlola@gmail.com', country: 'Germany' },
    { name: 'Ethan Hayfron Yarboi Mensah', class: 'SHALOM', schedule: 2, email: 'Ethanhayfronmensah@gmail.com', country: 'Ghana' },
    { name: 'Jayden Mogbolade Odunlami', class: 'SHALOM', schedule: 2, email: 'Odunlamiabimbola1@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwademilade John Adeniji', class: 'SHALOM', schedule: 2, email: 'yemisieo@gmail.com', country: 'Nigeria' },
    { name: 'Oluwafikayomi Emmanuella Abolade', class: 'SHALOM', schedule: 2, email: 'aboladetemitope8@gmail.com', country: 'Ireland' },
    { name: 'Zoe Ikeoluwa Alomoge', class: 'SHALOM', schedule: 2, email: 'eniolakolawole09@gmail.com', country: 'United Kingdom' },

    // ELEOS - Schedule 1
    { name: 'Bliss Idisi', class: 'ELEOS', schedule: 1, email: 'ogworelohor@gmail.com', country: 'Nigeria' },
    { name: 'Deborah Oluwabamirin C. Joshua-Foko', class: 'ELEOS', schedule: 1, email: 'njokuamarachi@gmail.com', country: 'United Kingdom' },
    { name: 'Derin Oladitan', class: 'ELEOS', schedule: 1, email: 'Aderinsola.oladitan@gmail.com', country: 'England' },
    { name: 'Elizabeth Ilerioluwase Olaonipekun', class: 'ELEOS', schedule: 1, email: 'temii.olaonii@gmail.com', country: 'Nigeria' },
    { name: 'Jayden Christopher Yartey Mensah', class: 'ELEOS', schedule: 1, email: 'Jaydenchristophermensah@gmail.com', country: 'Ghana' },
    { name: 'John Shekwomagode Chawa', class: 'ELEOS', schedule: 1, email: 'Chawajohn001@gmail.com', country: 'Nigeria' },
    { name: 'Kaitochukwu Ethan Ebubenna Amuchie', class: 'ELEOS', schedule: 1, email: 'kaitoamuchie@gmail.com', country: 'Nigeria' },
    { name: 'Morayo Kolawole', class: 'ELEOS', schedule: 1, email: 'Nuzmoji2012@gmail.com', country: 'England' },
    { name: 'Nathan Emeka Fidel', class: 'ELEOS', schedule: 1, email: 'diradiva37@yahoo.com', country: 'Nigeria' },
    { name: 'Nathan Oluwafayokunolami Balogun', class: 'ELEOS', schedule: 1, email: 'Nathanfayokunolabalogun@gmail.com', country: 'Egypt' },
    { name: 'Neriah Yusuf Lazarus', class: 'ELEOS', schedule: 1, email: 'madathlama@gmail.com', country: 'Nigeria' },
    { name: 'Stephen Ewomazino Opotu', class: 'ELEOS', schedule: 1, email: 'les.ralph1@gmail.com', country: 'United Kingdom' },
    { name: 'Taraoluwanimi Jael Oyewole', class: 'ELEOS', schedule: 1, email: 'Oluwakemiolorunfemi19@gmail.com', country: 'Nigeria' },

    // ELEOS - Schedule 2
    { name: 'Adedolami Faith Ibiyemi', class: 'ELEOS', schedule: 2, email: 'mysteeqsaav@gmail.com', country: 'Nigeria' },
    { name: 'David Boluwatife Shodiyan', class: 'ELEOS', schedule: 2, email: 'opeadio88@gmail.com', country: 'United Kingdom' },
    { name: 'Ebenezer Oghosa Frank', class: 'ELEOS', schedule: 2, email: 'eberejeri@yahoo.com', country: 'Sweden' },
    { name: 'Ewaoluwa Erin Arigbede', class: 'ELEOS', schedule: 2, email: 'arigbedetobiloba@gmail.com', country: 'United Kingdom' },
    { name: 'Iyinoluwa Daniel Bakare', class: 'ELEOS', schedule: 2, email: 'olufunkedbakare@gmail.com', country: 'Nigeria' },
    { name: 'Kaitochukwu Obi-Okorie', class: 'ELEOS', schedule: 2, email: 'Kaitoobiokorie@gmail.com', country: 'Nigeria' },
    { name: 'Kesiena Anita Agbro', class: 'ELEOS', schedule: 2, email: 'rugbene4u@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwafunto Edna Olaoye', class: 'ELEOS', schedule: 2, email: 'morenikeakinwunmi@gmail.com', country: 'Nigeria' },
    { name: 'Sarah-Grace Ogbugua Ochai', class: 'ELEOS', schedule: 2, email: 'Sarahgraceochai@gmail.com', country: 'Nigeria' },

    // EZER - Schedule 1
    { name: 'Babatise Oludemi', class: 'EZER', schedule: 1, email: 'folanlokun@gmail.com', country: 'Angola' },
    { name: 'Bright Imade Joan', class: 'EZER', schedule: 1, email: 'Udekweuche@yahoo.com', country: 'Nigeria' },
    { name: 'Chizara Obichima', class: 'EZER', schedule: 1, email: 'chizaraobichima@gmail.com', country: 'United Kingdom' },
    { name: 'Fisayo O.', class: 'EZER', schedule: 1, email: 'Maryann77ng@gmail.com', country: 'United Kingdom' },
    { name: 'Glory EriIfe Nelson', class: 'EZER', schedule: 1, email: 'toswiye@gmail.com', country: 'Nigeria' },
    { name: 'Immisioluwa Adeyemi', class: 'EZER', schedule: 1, email: 'Adepejuzadeyemi@gmail.com', country: 'United Kingdom' },
    { name: 'Kendrick Dickson', class: 'EZER', schedule: 1, email: 'felicia.olubunmi2013@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwadeetan Fabiyi', class: 'EZER', schedule: 1, email: 'omotolanioladipo@gmail.com', country: 'United Kingdom' },
    { name: 'Oreoluwa Adeleke', class: 'EZER', schedule: 1, email: 'seiyefaolugbenga.adeleke@gmail.com', country: 'United Kingdom' },
    { name: 'Tiwalade Ijese Campbell', class: 'EZER', schedule: 1, email: 'tlad_campbell@icloud.com', country: 'Nigeria' },
    { name: 'Zikorammachukwu Mitchelle Chukwueze', class: 'EZER', schedule: 1, email: 'Zikorachukwueze@gmail.com', country: 'Nigeria' },
    { name: 'Zuriel Oluwademiladeogo Ayo-Dayisi', class: 'EZER', schedule: 1, email: 'zuzu.ayodayisi@gmail.com', country: 'Nigeria' },

    // EZER - Schedule 2
    { name: 'Ayomikun Ebenezer Olanipekun', class: 'EZER', schedule: 2, email: 'ayomikunolanipekun@gmail.com', country: 'Nigeria' },
    { name: 'Ese Queen Ewharieme', class: 'EZER', schedule: 2, email: 'Ugochi.okafor@yahoo.com', country: 'England' },
    { name: 'Favour Oluwatosin Okpara', class: 'EZER', schedule: 2, email: 'okparadebbielight@gmail.com', country: 'Nigeria' },
    { name: 'Grace Kikiogoluwa Omole', class: 'EZER', schedule: 2, email: 'grace.kikiogoluwa@gmail.com', country: 'Nigeria' },
    { name: 'Joshua Chizuru', class: 'EZER', schedule: 2, email: 'bimbo910@yahoo.com', country: 'Nigeria' },
    { name: 'Judah Onoseje Eliezer Eigbedion', class: 'EZER', schedule: 2, email: 'maudlynodidison@gmail.com', country: 'Nigeria' },
    { name: 'Modesireoluwa Ogbola', class: 'EZER', schedule: 2, email: 'omolarakemi3@gmail.com', country: 'Finland' },
    { name: 'Oba Emmanuel Dami-Asolo', class: 'EZER', schedule: 2, email: 'phoebe.damiasolo@gmail.com', country: 'Nigeria' },
    { name: 'Oluwadarasimi Tehillah Olakanmi-Noble', class: 'EZER', schedule: 2, email: 'funkenoble@gmail.com', country: 'Nigeria' },
    { name: 'Oluwakamiferi Oluwasegun Teluwo', class: 'EZER', schedule: 2, email: 'teminiadebowale@gmail.com', country: 'Nigeria' },
    { name: 'Shiloh Emmanuel', class: 'EZER', schedule: 2, email: 'Olabisinkop@gmail.com', country: 'United Kingdom' },
    { name: 'Zayne Olamide Morakinyo', class: 'EZER', schedule: 2, email: 'akinbiyimo@gmail.com', country: 'Nigeria' },

    // BARACH - Schedule 1
    { name: 'Aderomola Babasola Alli', class: 'BARACH', schedule: 1, email: 'aderomola.alli@gmail.com', country: 'Nigeria' },
    { name: 'Blossom Oyewole Chigozie', class: 'BARACH', schedule: 1, email: 'Edesometouch@gmail.com', country: 'Nigeria' },
    { name: 'Boluwatife Omoboriowo', class: 'BARACH', schedule: 1, email: 'lolao.omoboriowo@gmail.com', country: 'Nigeria' },
    { name: 'Boluwatito Omoboriowo', class: 'BARACH', schedule: 1, email: 'lolao.omoboriowo@gmail.com', country: 'Nigeria' },
    { name: 'Chikamso Johan Amuchie', class: 'BARACH', schedule: 1, email: 'kamsoamuchie@gmail.com', country: 'Nigeria' },
    { name: 'Gabriella Chinazaekpere Chinaka', class: 'BARACH', schedule: 1, email: 'ugochibn@gmail.com', country: 'Nigeria' },
    { name: 'Gideon Mofogofoluwa Omoyeni', class: 'BARACH', schedule: 1, email: 'gideon2omoyeni@gmail.com', country: 'Nigeria' },
    { name: 'Happiness Ogah', class: 'BARACH', schedule: 1, email: 'JenniferAttah72@gmail.com', country: 'Nigeria' },
    { name: 'Ireanu Kimberly Ige', class: 'BARACH', schedule: 1, email: 'temmylan01@gmail.com', country: 'Nigeria' },
    { name: 'Ireoluwa Jason Olanipekun', class: 'BARACH', schedule: 1, email: 'oguntokun.prosperina@gmail.com', country: 'Nigeria' },
    { name: 'Jayden Ayobami Dara', class: 'BARACH', schedule: 1, email: 'jaydendara@gmail.com', country: 'England' },
    { name: 'Jedidiah Ola-Akintunde', class: 'BARACH', schedule: 1, email: 'olaakintundemodola@gmail.com', country: 'Nigeria' },
    { name: 'Oluwashindara Adefunmilayo', class: 'BARACH', schedule: 1, email: '', country: 'Nigeria' },
    { name: 'Omorinmadeoluwa Ashiru', class: 'BARACH', schedule: 1, email: 'ayokungbure@yahoo.com', country: 'Nigeria' },
    { name: 'Patience Aseda Mensah', class: 'BARACH', schedule: 1, email: 'asemensah26@gmail.com', country: 'Ghana' },
    { name: 'Zoe-Sharon Cyril Ntui', class: 'BARACH', schedule: 1, email: 'superzoentui@gmail.com', country: 'Nigeria' },
    { name: 'Olabiyi Moranugba Praise', class: 'BARACH', schedule: 1, email: 'dipoolabiyi@yahoo.com', country: 'South Africa' },

    // BARACH - Schedule 2
    { name: 'Chloe Ajah', class: 'BARACH', schedule: 2, email: 'chloekajah@gmail.com', country: 'United Kingdom' },
    { name: 'Eyimofeloluwafifunmi Zara Ogunbajo', class: 'BARACH', schedule: 2, email: 'ariyikefoli@gmail.com', country: 'Nigeria' },
    { name: 'Joel Ebubechukwu Umeibe', class: 'BARACH', schedule: 2, email: 'kosi.vicky@yahoo.com', country: 'Nigeria' },
    { name: 'Mary Pillot', class: 'BARACH', schedule: 2, email: 'marypillot03@gmail.com', country: 'United Kingdom' },
    { name: 'Moboluwarin Ibiolalanrimi Oluyede', class: 'BARACH', schedule: 2, email: 'visitseyi@yahoo.com', country: 'Nigeria' },
    { name: 'OgoOluwa Biyi-Oyediran', class: 'BARACH', schedule: 2, email: 'ebunoluwa.biyioye@gmail.com', country: 'Nigeria' },
    { name: 'Oluwatise Joanna Fadahunsi', class: 'BARACH', schedule: 2, email: 'Olutosin.oladipo@yahoo.com', country: 'United Kingdom' },
    { name: 'Osejade Cyprian Ezeogu', class: 'BARACH', schedule: 2, email: 'ezeogu28@yahoo.com', country: 'United Kingdom' },
    { name: 'Precious Bamigboye', class: 'BARACH', schedule: 2, email: 'Wumilara@rocketmail.com', country: 'Nigeria' },
    { name: 'Reign Zibe-Diepiriyi Erigi', class: 'BARACH', schedule: 2, email: 'Reignerigi@gmail.com', country: 'United Kingdom' },
    { name: 'Samara Ibiam', class: 'BARACH', schedule: 2, email: 'Chynmanuel@gmail.com', country: 'United Kingdom' },
    { name: 'Shalom Chuks-Ogbu', class: 'BARACH', schedule: 2, email: 'vivauju@gmail.com', country: 'United Kingdom' },
    { name: 'Tiwatope Iretiola Femi-Ayilara', class: 'BARACH', schedule: 2, email: 'Tiwatopefemiayilara@gmail.com', country: 'United Kingdom' },
    { name: 'Tomisin Olorunfemi', class: 'BARACH', schedule: 2, email: 'nike.pearse@yahoo.com', country: 'United Kingdom' },
    { name: 'Oritsetsemaye Shallom Eguando', class: 'BARACH', schedule: 2, email: 'eguandot@gmail.com', country: 'Nigeria' },

    // YADAH - Schedule 1
    { name: 'Abigail Sakala', class: 'YADAH', schedule: 1, email: 'phylliskaps@gmail.com', country: 'United Kingdom' },
    { name: 'Chisom Emmanuella Uba', class: 'YADAH', schedule: 1, email: 'Chisomu499@gmail.com', country: 'United Kingdom' },
    { name: 'Chuka David Udeze', class: 'YADAH', schedule: 1, email: 'chidimmaobiejesi26@gmail.com', country: 'United Kingdom' },
    { name: 'Edward Oluwadamisire Ogunleye', class: 'YADAH', schedule: 1, email: 'edwardogunleye2006@gmail.com', country: 'Ireland' },
    { name: 'Iremide Emmanuel Lawal', class: 'YADAH', schedule: 1, email: 'omotayofalolu@gmail.com', country: 'Nigeria' },
    { name: 'Jason Ifechukwude Umeadi', class: 'YADAH', schedule: 1, email: 'oyinlolaumeadi@gmail.com', country: 'Nigeria' },
    { name: 'Joshua Oludiya', class: 'YADAH', schedule: 1, email: 'Tolafadiya@gmail.com', country: 'United Kingdom' },
    { name: 'Menuchim Nolan Ajuru', class: 'YADAH', schedule: 1, email: 'mannyajuru@gmail.com', country: 'Nigeria' },
    { name: 'Monalisa Omoyemen Egharevba', class: 'YADAH', schedule: 1, email: 'Alileconstance90@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwadarasimi Pearl Odebiyi', class: 'YADAH', schedule: 1, email: 'simipearl02@gmail.com', country: 'Nigeria' },
    { name: 'Oluwatamilore Abiodun', class: 'YADAH', schedule: 1, email: 'kennyagunbiade@yahoo.com', country: 'Nigeria' },
    { name: 'Oluwatamilore Laurel Ajayi', class: 'YADAH', schedule: 1, email: 'Walexy85@gmail.com', country: 'United Kingdom' },
    { name: 'Ruyi Oseghale', class: 'YADAH', schedule: 1, email: 'talabi.lara@gmail.com', country: 'United Kingdom' },
    { name: 'Samara Ibiam', class: 'YADAH', schedule: 1, email: 'Samaramibiam@gmail.com', country: 'United Kingdom' },
    { name: 'Tomiwa Ajayi', class: 'YADAH', schedule: 1, email: 'temilolaajayi11@gmail.com', country: 'United Kingdom' },
    { name: 'Nathan Oyewole', class: 'YADAH', schedule: 1, email: 'asakoloy@gmail.com', country: 'Nigeria' },

    // YADAH - Schedule 2
    { name: 'Adegbite Michael Adeola-Okoro', class: 'YADAH', schedule: 2, email: 'okoa_orl@yahoo.com', country: 'Nigeria' },
    { name: 'Ayanna Deborah David', class: 'YADAH', schedule: 2, email: 'Estherakinlabi42@gmail.com', country: 'Nigeria' },
    { name: 'Desireoluwa Akinmola', class: 'YADAH', schedule: 2, email: 'tyadewole@gmail.com', country: 'Ireland' },
    { name: 'Elsa Iwinosa Osayande', class: 'YADAH', schedule: 2, email: 'homelessons123@gmail.com', country: 'Ireland' },
    { name: 'Emerald Toluwalola Aluko', class: 'YADAH', schedule: 2, email: 'maveljay@gmail.com', country: 'United Kingdom' },
    { name: 'Esther Ewaoluwa Adekunle', class: 'YADAH', schedule: 2, email: 'mojisolaomowale@yahoo.com', country: 'England' },
    { name: 'Iremide Isabela Olatunde', class: 'YADAH', schedule: 2, email: 'timilehin.olatunde@gmail.com', country: 'England' },
    { name: 'Katelyn Aseda Abbeo', class: 'YADAH', schedule: 2, email: 'abbeotracy@gmail.com', country: 'Ghana' },
    { name: 'Keren-Happuch Oyekunle', class: 'YADAH', schedule: 2, email: 'Abiolahanmi@gmail.com', country: 'Nigeria' },
    { name: 'Lael Baiden', class: 'YADAH', schedule: 2, email: 'lydiquans@gmail.com', country: 'Ghana' },
    { name: 'Obafemi Michael', class: 'YADAH', schedule: 2, email: 'Preciousilesanmi@gmail.com', country: 'Nigeria' },
    { name: 'Ola Oluwamayowa Tomisin', class: 'YADAH', schedule: 2, email: 'buhnmhi@gmail.com', country: 'Nigeria' },
    { name: 'Ola Opeoluwa Tofunmi', class: 'YADAH', schedule: 2, email: 'buhnmhi@gmail.com', country: 'Nigeria' },
    { name: 'Olayiwonuola Naetochukwu Oladokun', class: 'YADAH', schedule: 2, email: 'luchiumealu@gmail.com', country: 'Nigeria' },
    { name: 'Owonifari Oluwadamilola', class: 'YADAH', schedule: 2, email: 'ogomaab@yahoo.com', country: 'Nigeria' },
    { name: 'Pearle Ali', class: 'YADAH', schedule: 2, email: 'Pearlealii@gmail.com', country: 'Nigeria' },
    { name: 'Penuella Ireoluwatomide Ladokun', class: 'YADAH', schedule: 2, email: 'Jennifer.ladokun01@gmail.com', country: 'Nigeria' },
    { name: 'Serenity Glory Ogah', class: 'YADAH', schedule: 2, email: 'isiogah@gmail.com', country: 'Germany' },
    { name: 'Temisan Emiko', class: 'YADAH', schedule: 2, email: 'olori@oloriatuwatseiii.com', country: 'Nigeria' },

    // AGAPE - Schedule 1
    { name: 'Alafiaoluwa Adeleke', class: 'AGAPE', schedule: 1, email: 'seiyefaolugbenga.adeleke@gmail.com', country: 'United Kingdom' },
    { name: 'Boluwatife Praise Philip', class: 'AGAPE', schedule: 1, email: 'shollybarbi@gmail.com', country: 'United Kingdom' },
    { name: 'Eleanor Mogalu', class: 'AGAPE', schedule: 1, email: 'VictoriaUgbomah@gmail.com', country: 'United Kingdom' },
    { name: 'Eni-Ibukun Akinsanmi', class: 'AGAPE', schedule: 1, email: 'temiloluwa79@gmail.com', country: 'United Kingdom' },
    { name: 'Eunice Damilola Elaigwu', class: 'AGAPE', schedule: 1, email: 'david.oluwasanwo@gmail.com', country: 'United Kingdom' },
    { name: 'Imisioluwa Ayoade', class: 'AGAPE', schedule: 1, email: 'ife_ayoade@yahoo.com', country: 'United Kingdom' },
    { name: 'Jessica Agnes George-Adams', class: 'AGAPE', schedule: 1, email: 'Yemigeorgeadams@gmail.com', country: 'United Kingdom' },
    { name: 'Kamsiyochukwu Obichima', class: 'AGAPE', schedule: 1, email: 'kariszoe@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwagbemiga Marvel Arigbede', class: 'AGAPE', schedule: 1, email: 'oluwatobiarigbede@gmail.com', country: 'United Kingdom' },
    { name: 'OluwaLademi Popoola', class: 'AGAPE', schedule: 1, email: 'Ojoadenike30@gmail.com', country: 'Nigeria' },
    { name: 'Oluwashubomi Hephzibah Afolayan', class: 'AGAPE', schedule: 1, email: 'eyitayo.layan@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwatamilore Seth Ajayi', class: 'AGAPE', schedule: 1, email: 'oyinkomolafe@gmail.com', country: 'United Kingdom' },
    { name: 'Salem Atunseoluwa', class: 'AGAPE', schedule: 1, email: 'sarahooluranti@gmail.com', country: 'Nigeria' },
    { name: 'Yila-Zibe Royale Erigi', class: 'AGAPE', schedule: 1, email: 'Erigioto@gmail.com', country: 'United Kingdom' },

    // AGAPE - Schedule 2
    { name: 'Daniel Izinyon', class: 'AGAPE', schedule: 2, email: 'Ujunwa.ichoku@gmail.com', country: 'Nigeria' },
    { name: 'Eli-Amin Eshun', class: 'AGAPE', schedule: 2, email: 'Elizabethoyeleye95@gmail.com', country: 'United Kingdom' },
    { name: 'Joseph Ibinabo Stephen Granville', class: 'AGAPE', schedule: 2, email: 'niny491@gmail.com', country: 'England' },
    { name: 'Joshua Adigun', class: 'AGAPE', schedule: 2, email: 'adeswt@gmail.com', country: 'United Kingdom' },
    { name: 'Kamsiyochukwu Onunkwo', class: 'AGAPE', schedule: 2, email: 'ugochionunkwo@yahoo.com', country: 'United Kingdom' },
    { name: 'Lee Baiden', class: 'AGAPE', schedule: 2, email: 'lydiquans@gmail.com', country: 'Ghana' },
    { name: 'Maro Marvel Ewharieme', class: 'AGAPE', schedule: 2, email: 'Ugochi.okafor@yahoo.com', country: 'England' },
    { name: 'Olaoluwa Joshua Odubayo', class: 'AGAPE', schedule: 2, email: 'Abi.odubayo@gmail.com', country: 'United Kingdom' },
    { name: 'Oyegunwa Iseoluwa Maria', class: 'AGAPE', schedule: 2, email: 'oejidare@gmail.com', country: 'Nigeria' },

    // KAIROS - Schedule 1
    { name: 'Abraham Dadzie', class: 'KAIROS', schedule: 1, email: 'antonatiepg@gmail.com', country: 'United Kingdom' },
    { name: 'Tehillah Ibe-Ojo Baba', class: 'KAIROS', schedule: 1, email: 'gabbaba@gmail.com', country: 'Nigeria' },
    { name: 'Jeremy Sunny-Akhigbe', class: 'KAIROS', schedule: 1, email: 'oizaakhigbe@gmail.com', country: 'Nigeria' },
    { name: 'Odusegun Erioluwa Daniel', class: 'KAIROS', schedule: 1, email: 'Adewaleayobami14@gmail.com', country: 'Nigeria' },
    { name: 'Maximo Aremu Samuels', class: 'KAIROS', schedule: 1, email: 'biodun@biodunmakinde.com', country: 'Nigeria' },
    { name: 'Boluwatiwi Mmesoomachi Oladele', class: 'KAIROS', schedule: 1, email: 'coololer@gmail.com', country: 'Nigeria' },
    { name: 'Deyo Oladitan', class: 'KAIROS', schedule: 1, email: 'Ore_oluwa88@yahoo.com', country: 'England' },
    { name: 'Oluwafoyinsola Joana Oyinloye', class: 'KAIROS', schedule: 1, email: 'kikeolarewaju@gmail.com', country: 'Nigeria' },
    { name: 'Obaloluwa Praise Oyekunle', class: 'KAIROS', schedule: 1, email: 'Abiolahanmi@gmail.com', country: 'Nigeria' },
    { name: 'Tioluwanimi Arabella Adepoju', class: 'KAIROS', schedule: 1, email: 'seunethelcole@yahoo.com', country: 'Nigeria' },
    { name: 'Faith Oluwanifemi Okubanjo', class: 'KAIROS', schedule: 1, email: 'hadassahopeful@gmail.com', country: 'Nigeria' },
    { name: 'Deborah Adegbenro', class: 'KAIROS', schedule: 1, email: 'ajibolaaladewura@gmail.com', country: 'United Kingdom' },
    { name: 'Kara Edomobi', class: 'KAIROS', schedule: 1, email: 'karachi003@icloud.com', country: 'United Kingdom' },

    // KAIROS - Schedule 2
    { name: 'Toke Adetomiwa', class: 'KAIROS', schedule: 2, email: 'Bukky_sen2000@yahoo.com', country: 'Nigeria' },
    { name: 'Joshua Adeyemo', class: 'KAIROS', schedule: 2, email: 'imoleayo.adeyemo16@gmail.com', country: 'Germany' },
    { name: 'Tobechukwu Chukwunedum Ude', class: 'KAIROS', schedule: 2, email: 'directoroaksschool@gmail.com', country: 'Nigeria' },
    { name: 'Jubilee Ekong', class: 'KAIROS', schedule: 2, email: 'joyfuljoy247@gmail.com', country: 'Nigeria' },
    { name: 'Elizabeth Unuigbe', class: 'KAIROS', schedule: 2, email: 'ephraim.unuigbe@gmail.com', country: 'United Kingdom' },
    { name: 'Craig-Johnson Oni', class: 'KAIROS', schedule: 2, email: 'pstkome@yahoo.com', country: 'United Kingdom' },
    { name: 'Emmanuella Oluwasekemi Adekola', class: 'KAIROS', schedule: 2, email: 'Ruthadekola03@gmail.com', country: 'United Kingdom' },

    // EXOUSIA - Schedule 1
    { name: 'Diekololami Ramsey Adekoya', class: 'EXOUSIA', schedule: 1, email: 'temiloluwaadekoya51@gmail.com', country: 'United Kingdom' },
    { name: 'Diekoloreoluwa Emmanuel Adeoye', class: 'EXOUSIA', schedule: 1, email: 'adejokeowo@gmail.com', country: 'Nigeria' },
    { name: 'Esther Belema Ibinabo-Lawson', class: 'EXOUSIA', schedule: 1, email: 'ogooibinabo@gmail.com', country: 'Nigeria' },
    { name: 'John Faith Yayera', class: 'EXOUSIA', schedule: 1, email: 'modupeolabenjo.o@gmail.com', country: 'Nigeria' },
    { name: 'Maria-Jihane Kouassi', class: 'EXOUSIA', schedule: 1, email: 'mathetesnoura@gmail.com', country: 'France' },
    { name: 'Momoreoluwawa Okunuga', class: 'EXOUSIA', schedule: 1, email: 'adepeju.okunuga@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwatoyosi Oluwaferanmi Ola', class: 'EXOUSIA', schedule: 1, email: 'buhnmhi@gmail.com', country: 'Nigeria' },
    { name: 'Testimony Adegbenro', class: 'EXOUSIA', schedule: 1, email: 'ajibolaaladewura@gmail.com', country: 'United Kingdom' },
    { name: 'Tiaraoluwa Amarissa Adepoju', class: 'EXOUSIA', schedule: 1, email: 'seunethelcole@yahoo.com', country: 'Nigeria' },

    // EXOUSIA - Schedule 2
    { name: 'Deborah Adesewa Fashokun', class: 'EXOUSIA', schedule: 2, email: 'olubukolaabiodun06@gmail.com', country: 'Nigeria' },
    { name: 'Emmanuel Oyindamola Alashe', class: 'EXOUSIA', schedule: 2, email: 'adebowaleadewale338@gmail.com', country: 'United Kingdom' },
    { name: 'Isabella Chioma Okokwa-O', class: 'EXOUSIA', schedule: 2, email: 'Siclymane24@gmail.com', country: 'United Kingdom' },
    { name: 'Letoya Ifedamilola Baiyere', class: 'EXOUSIA', schedule: 2, email: 'ife2bamidele@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwasetemi Darasimi Teluwo', class: 'EXOUSIA', schedule: 2, email: 'teminiadebowale@gmail.com', country: 'Nigeria' },
    { name: 'Oluwasolafunmi Bethel Akinyele', class: 'EXOUSIA', schedule: 2, email: 'abodunrinjumoke@gmail.com', country: 'Nigeria' },
    { name: 'Sophia Ganiyu', class: 'EXOUSIA', schedule: 2, email: 'kemganiyu@gmail.com', country: 'United Kingdom' },
    { name: 'Tsemiaye Emiko', class: 'EXOUSIA', schedule: 2, email: 'olori@oloriatuwatseiii.com', country: 'Nigeria' },
    { name: 'Victory Treasure Olawuni', class: 'EXOUSIA', schedule: 2, email: 'Ibukunio073@gmail.com', country: 'Nigeria' },

    // HAGIAZO - Schedule 1
    { name: 'Adesire Oludemi', class: 'HAGIAZO', schedule: 1, email: 'funmikeoludemi@gmail.com', country: 'Angola' },
    { name: 'Anjola O.', class: 'HAGIAZO', schedule: 1, email: 'Maryann77ng@yahoo.com', country: 'United Kingdom' },
    { name: 'Chizitere Joan Chukwueze', class: 'HAGIAZO', schedule: 1, email: 'Chukwuezechidimma@gmail.com', country: 'Nigeria' },
    { name: 'Daniel Ilori', class: 'HAGIAZO', schedule: 1, email: 'jilori74@gmail.com', country: 'Ireland' },
    { name: 'Daniel Ola-Akintunde', class: 'HAGIAZO', schedule: 1, email: 'olaakintundemodola@gmail.com', country: 'Nigeria' },
    { name: 'Eniola Omiye', class: 'HAGIAZO', schedule: 1, email: 'busolacare@gmail.com', country: 'United Kingdom' },
    { name: 'Esosa Ogigai', class: 'HAGIAZO', schedule: 1, email: 'r.ebikueluye@gmail.com', country: 'Nigeria' },
    { name: 'Esther Ilori', class: 'HAGIAZO', schedule: 1, email: 'jilori74@gmail.com', country: 'Ireland' },
    { name: 'Gabriella Isioma Okokwa-O', class: 'HAGIAZO', schedule: 1, email: 'Siclymane24@gmail.com', country: 'United Kingdom' },
    { name: 'Janelle Chawa', class: 'HAGIAZO', schedule: 1, email: 'Chawajohn001@gmail.com', country: 'Nigeria' },
    { name: 'Morolake Konu', class: 'HAGIAZO', schedule: 1, email: 'Abikekonu@googlemail.com', country: 'England' },
    { name: 'Natalie Efetobore Ovwiokpe', class: 'HAGIAZO', schedule: 1, email: 'Ovwiokpeteejay@gmail.com', country: 'United Kingdom' },
    { name: 'OluwaLonimi Popoola', class: 'HAGIAZO', schedule: 1, email: 'Ojoadenike@aol.com', country: 'Nigeria' },
    { name: 'Praise Mofiyinoluwa Omoyeni', class: 'HAGIAZO', schedule: 1, email: 'dialogue.omoyeni@gmail.com', country: 'Nigeria' },
    { name: 'Tiwatope Ijabiyi', class: 'HAGIAZO', schedule: 1, email: 'francaijabiyi@gmail.com', country: 'United Kingdom' },
    { name: 'Chinenye Esther Nwankwo', class: 'HAGIAZO', schedule: 1, email: 'oiretomiwa@gmail.com', country: 'Nigeria' },

    // HAGIAZO - Schedule 2
    { name: 'Chimamanda Fidel-Okwuagwu', class: 'HAGIAZO', schedule: 2, email: 'diradiva37@yahoo.com', country: 'Nigeria' },
    { name: 'Chimenem Ayvan-Edward Ajuru', class: 'HAGIAZO', schedule: 2, email: 'queenetteajuru@gmail.com', country: 'Nigeria' },
    { name: 'Eldad Aimienoyevbosa Osayande', class: 'HAGIAZO', schedule: 2, email: 'bernieso@yahoo.com', country: 'Ireland' },
    { name: 'Ethan Ajayi', class: 'HAGIAZO', schedule: 2, email: 'boyeajayi@gmail.com', country: 'Nigeria' },
    { name: 'Oluwatiseiyanu Christine Beckley', class: 'HAGIAZO', schedule: 2, email: 'olufunmbi.beckley@gmail.com', country: 'Nigeria' },
    { name: 'Oluwatunwase Charles Adeniyi', class: 'HAGIAZO', schedule: 2, email: 'mariamoadeniyi@gmail.com', country: 'Nigeria' },
    { name: 'Pearl Tiwalolaoluwa Aluko', class: 'HAGIAZO', schedule: 2, email: 'maveljay@gmail.com', country: 'United Kingdom' },
    { name: 'Serena Mopeninujesu Omole', class: 'HAGIAZO', schedule: 2, email: 'oludolapo.damilola@gmail.com', country: 'Nigeria' },
    { name: 'Victor Peculiar Olawuni', class: 'HAGIAZO', schedule: 2, email: 'Ibukunio073@gmail.com', country: 'Nigeria' },

    // CHARIS - Schedule 1
    { name: 'Chizaramekpere Janelle Chukwueze', class: 'CHARIS', schedule: 1, email: 'Chizaramekperechukwueze@gmail.com', country: 'Nigeria' },
    { name: 'Joanna Phoenix George-Adams', class: 'CHARIS', schedule: 1, email: 'Yemigeorgeadams@gmail.com', country: 'United Kingdom' },
    { name: 'Krystof Otokini Ajumogobia', class: 'CHARIS', schedule: 1, email: 'aghoghomae@gmail.com', country: 'Nigeria' },
    { name: 'Oluwasemilore Sharon Ajayi', class: 'CHARIS', schedule: 1, email: 'oyinkomolafe@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwashetemi Jedidiah Afolayan', class: 'CHARIS', schedule: 1, email: 'eyitayo.layan@gmail.com', country: 'United Kingdom' },
    { name: 'Oreofeoluwa Popoola', class: 'CHARIS', schedule: 1, email: 'XPLICITCNP@GMAIL.COM', country: 'United Kingdom' },
    { name: 'Elisha Ezra Manjoro', class: 'CHARIS', schedule: 1, email: 'Ogmoredental@gmail.com', country: 'United Kingdom' },

    // CHARIS - Schedule 2
    { name: 'Adeireoluwa Eewaolorun Ogunsiji', class: 'CHARIS', schedule: 2, email: 'Busorlar@yahoo.com', country: 'Nigeria' },
    { name: 'Alexander Izinyon', class: 'CHARIS', schedule: 2, email: 'Ujunwa.ichoku@gmail.com', country: 'Nigeria' },
    { name: 'AnjolaOluwa Oladeji Banjo', class: 'CHARIS', schedule: 2, email: 'obiagelibtdl@gmail.com', country: 'Nigeria' },
    { name: 'David Oyebade', class: 'CHARIS', schedule: 2, email: 'faithoyebade@gmail.com', country: 'Finland' },
    { name: 'Ferami Ezekiel Sowemimo', class: 'CHARIS', schedule: 2, email: 'titisowe@gmail.com', country: 'United Kingdom' },
    { name: 'Jeremiah Ajayi', class: 'CHARIS', schedule: 2, email: 'ajayianita@gmail.com', country: 'Nigeria' },
    { name: 'LLuvia Asake Samuels', class: 'CHARIS', schedule: 2, email: 'biodun@biodunmakinde.com', country: 'Nigeria' },
    { name: 'Nathen Akhigbe-Sunny', class: 'CHARIS', schedule: 2, email: 'oizaakhigbe@gmail.com', country: 'Nigeria' },
    { name: 'Olaoluwakitan Fatile', class: 'CHARIS', schedule: 2, email: 'Morenike.fatile@gmail.com', country: 'Nigeria' },
    { name: 'Oluwadarasimi Omotoso', class: 'CHARIS', schedule: 2, email: 'deji.omotoso@gmail.com', country: 'Nigeria' },
    { name: 'Temitayo Abolade', class: 'CHARIS', schedule: 2, email: 'temitopebamigboye@gmail.com', country: 'Ireland' },

    // HALLAL - Schedule 1
    { name: 'Adetoke Naomi Adeola-Okoro', class: 'HALLAL', schedule: 1, email: 'okoa_orl@yahoo.com', country: 'Nigeria' },
    { name: 'Adiela Sarah Nwamaka Agwunobi', class: 'HALLAL', schedule: 1, email: 'chiomaruth32@gmail.com', country: 'Nigeria' },
    { name: 'Alexandria Dara', class: 'HALLAL', schedule: 1, email: 'kadoondara@gmail.com', country: 'England' },
    { name: 'Anjola Akinyelure', class: 'HALLAL', schedule: 1, email: 'oluyemifunsho@gmail.com', country: 'Nigeria' },
    { name: 'Ayana Moraa Obwaka', class: 'HALLAL', schedule: 1, email: 'globwaka@gmail.com', country: 'Kenya' },
    { name: 'Ayomide Kolawole', class: 'HALLAL', schedule: 1, email: 'Nuzkolawole@gmail.com', country: 'England' },
    { name: 'Jahdiel Momotimi Pudie', class: 'HALLAL', schedule: 1, email: 'Chrismatel2012@gmail.com', country: 'Nigeria' },
    { name: 'Oluwashindara Adesegun', class: 'HALLAL', schedule: 1, email: 'adesegunjola@gmail.com', country: 'Nigeria' },
    { name: 'Tumininu Williams', class: 'HALLAL', schedule: 1, email: 'Oluyomademe@gmail.com', country: 'Nigeria' },
    { name: 'Sarah Tonye Ibinabo-Lawson', class: 'HALLAL', schedule: 1, email: 'ogooibinabo@gmail.com', country: 'Nigeria' },
    { name: 'Sophie Elujoba', class: 'HALLAL', schedule: 1, email: 'estherelujoba@gmail.com', country: 'United Kingdom' },

    // HALLAL - Schedule 2
    { name: 'Adele Ninioritseju Agangan', class: 'HALLAL', schedule: 2, email: 'Joydudu2002@yahoo.com', country: 'Nigeria' },
    { name: 'Ayomide Desmond Omoniyi', class: 'HALLAL', schedule: 2, email: 'Adekalulola@gmail.com', country: 'United Kingdom' },
    { name: 'Chimobi Anyim Ude', class: 'HALLAL', schedule: 2, email: 'directoroaksschool@gmail.com', country: 'Nigeria' },
    { name: 'Comfort Araoluwa Adekunle', class: 'HALLAL', schedule: 2, email: '', country: 'England' },
    { name: 'Daniel Adejoro', class: 'HALLAL', schedule: 2, email: 'adekemi.adejoro@gmail.com', country: 'United Kingdom' },
    { name: 'Fareedah Sulaiman', class: 'HALLAL', schedule: 2, email: 'Adesholadawodu@yahoo.com', country: 'United Kingdom' },
    { name: 'Hadassah Igwebuike', class: 'HALLAL', schedule: 2, email: 'Igwebuike.joyce@gmail.com', country: 'United Kingdom' },
    { name: 'Ifelayo Eva Oshewa', class: 'HALLAL', schedule: 2, email: 'ennyton@gmail.com', country: 'Norway' },
    { name: 'Kenenna Nwakwesi', class: 'HALLAL', schedule: 2, email: 'ndukwen@gmail.com', country: 'Nigeria' },
    { name: 'Olakunle Soretire', class: 'HALLAL', schedule: 2, email: 'sorebabe@gmail.com', country: 'United Kingdom' },

    // PNEUMA - Schedule 1
    { name: 'Adekunle Oluwalomini', class: 'PNEUMA', schedule: 1, email: 'lendam123@gmail.com', country: 'Nigeria' },
    { name: 'Beatrice Titoluwanimi Femi-Ayilara', class: 'PNEUMA', schedule: 1, email: 'AdeolaolawaIye1@gmail.com', country: 'United Kingdom' },
    { name: 'Damilola Aderiye', class: 'PNEUMA', schedule: 1, email: 'Ije.anochie@gmail.com', country: 'Nigeria' },
    { name: 'Dikanna Ngonadi', class: 'PNEUMA', schedule: 1, email: 'Yteesmile@yahoo.com', country: 'United Kingdom' },
    { name: 'Emmanuella Oyinlola Alashe', class: 'PNEUMA', schedule: 1, email: 'fayengonadi@gmail.com', country: 'United Kingdom' },
    { name: 'Enoch Ayanfeoluwa Fasan', class: 'PNEUMA', schedule: 1, email: 'adebowaleadewale338@gmail.com', country: 'United Kingdom' },
    { name: 'Jethro C. Jimmy-Eboma', class: 'PNEUMA', schedule: 1, email: 'mostbeautifuloneilove@gmail.com', country: 'United Kingdom' },
    { name: 'Joel Olayinka', class: 'PNEUMA', schedule: 1, email: 'adeswt@gmail.com', country: 'United Kingdom' },
    { name: 'Mirabel Temidun Ajibola', class: 'PNEUMA', schedule: 1, email: 'Victoriaolayinka191@gmail.com', country: 'United Kingdom' },
    { name: 'Nathan Efeturi Ovwiokpe', class: 'PNEUMA', schedule: 1, email: 'Ajiimatmine@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwalonimi Fiona Adekunle', class: 'PNEUMA', schedule: 1, email: 'Ovwiokpeteejay@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwatobiloba Adebola Oludiya', class: 'PNEUMA', schedule: 1, email: 'Tolafadiya@gmail.com', country: 'United Kingdom' },
    { name: 'Rebecca Ifeoma Ajose', class: 'PNEUMA', schedule: 1, email: 'gracybe25@gmail.com', country: 'Nigeria' },
    { name: 'Testimony Akinleye', class: 'PNEUMA', schedule: 1, email: 'glorygirlrodican@gmail.com', country: 'Nigeria' },
    { name: 'Tireni Naomi Solabi', class: 'PNEUMA', schedule: 1, email: 'd_grilled@yahoo.co.uk', country: 'United Kingdom' },
    { name: 'Tirenioluwa Alexandra Adepoju', class: 'PNEUMA', schedule: 1, email: 'seunethelcole@yahoo.com', country: 'Nigeria' },

    // PNEUMA - Schedule 2
    { name: 'Anaiah Olawaiye', class: 'PNEUMA', schedule: 2, email: 'adesokankmary@gmail.com', country: 'United Kingdom' },
    { name: 'Brian Chimemerie Ogbonnaya', class: 'PNEUMA', schedule: 2, email: 'ibukunoluwaayilara@gmail.com', country: 'United Kingdom' },
    { name: 'Chanan Ihegie', class: 'PNEUMA', schedule: 2, email: 'Chananihegie@gmail.com', country: 'United Kingdom' },
    { name: 'Chimdindu Chukwunwendu Anochie', class: 'PNEUMA', schedule: 2, email: 'ufuomahefe@gmail.com', country: 'Nigeria' },
    { name: 'Flourish Oluwatofunmi Okubanjo', class: 'PNEUMA', schedule: 2, email: 'onaban80@gmail.com', country: 'United Kingdom' },
    { name: 'Gavrielle Oluwadare', class: 'PNEUMA', schedule: 2, email: 'hadassahopeful@gmail.com', country: 'Nigeria' },
    { name: 'Joann Adigun', class: 'PNEUMA', schedule: 2, email: 'desolajimmyeboma@gmail.com', country: 'Nigeria' },
    { name: 'Oluwatowawo George Adeniyi', class: 'PNEUMA', schedule: 2, email: 'mariamoadeniyi@gmail.com', country: 'Nigeria' },
    { name: 'Oreofeoluwa Okunuga', class: 'PNEUMA', schedule: 2, email: 'adepeju.okunuga23@gmail.com', country: 'United Kingdom' },
    { name: 'Osayuwamen John Iyobosa', class: 'PNEUMA', schedule: 2, email: 'charity.iyobosa@gmail.com', country: 'Nigeria' },
    { name: 'Pearl Otung', class: 'PNEUMA', schedule: 2, email: 'Samirao@hotmail.co.uk', country: 'United Kingdom' },
    { name: 'Timileyin Ijabiyi', class: 'PNEUMA', schedule: 2, email: 'francaijabiyi@gmail.com', country: 'United Kingdom' },

    // KOINONIA - Schedule 1
    { name: 'Adeoluwa Adegoke', class: 'KOINONIA', schedule: 1, email: 'tadegoke05@gmail.com', country: 'United Kingdom' },
    { name: 'Aderinsola Love Adeola-Okoro', class: 'KOINONIA', schedule: 1, email: 'okoa_orl@yahoo.com', country: 'Nigeria' },
    { name: 'Brisa Ajoke Samuels', class: 'KOINONIA', schedule: 1, email: 'biodun@biodunmakinde.com', country: 'Nigeria' },
    { name: 'Daniel Ayomide Elaigwu', class: 'KOINONIA', schedule: 1, email: 'david.oluwasanwo@gmail.com', country: 'United Kingdom' },
    { name: 'David Adelaja', class: 'KOINONIA', schedule: 1, email: 'annesosa.adelaja@gmail.com', country: 'Scotland' },
    { name: 'Delight Abigail Oluranti', class: 'KOINONIA', schedule: 1, email: 'sarahooluranti@yahoo.com', country: 'United Kingdom' },
    { name: 'Fumock Ankiambom Clinton Webter', class: 'KOINONIA', schedule: 1, email: 'mbukuliberty@gmail.com', country: 'Cameroon' },
    { name: 'Lydia Ayisi', class: 'KOINONIA', schedule: 1, email: 'lydiaayisi474@gmail.com', country: 'Ghana' },
    { name: 'Naomi Michelle-Ogbewele', class: 'KOINONIA', schedule: 1, email: 'asuwafogigi@gmail.com', country: 'Nigeria' },
    { name: 'Phoebe Igwebuike', class: 'KOINONIA', schedule: 1, email: 'Igwebuike.joyce@gmail.com', country: 'United Kingdom' },
    { name: 'Kaelo Edomobi', class: 'KOINONIA', schedule: 1, email: 'Kaeloedomobi@icloud.com', country: 'United Kingdom' },

    // KOINONIA - Schedule 2
    { name: 'Adetimiwa A. Sijuwade', class: 'KOINONIA', schedule: 2, email: 'Funmilola.sijuwade@gmail.com', country: 'Nigeria' },
    { name: 'Eva Kalu', class: 'KOINONIA', schedule: 2, email: 'randymaykalu@gmail.com', country: 'United Kingdom' },
    { name: 'Imani Rosebell Vanoppen', class: 'KOINONIA', schedule: 2, email: 'Jochen.vanoppen@telenet.be', country: 'Belgium' },
    { name: 'Isreal Oluwateniola Ogunsola', class: 'KOINONIA', schedule: 2, email: 'bolajiogunsola27@gmail.com', country: 'Nigeria' },
    { name: 'Kamila Kinfeosi Kayode-Obikoya', class: 'KOINONIA', schedule: 2, email: 'kayodeobikoya@gmail.com', country: 'United Kingdom' },
    { name: 'Oluwalolope Favour Femi-Pius', class: 'KOINONIA', schedule: 2, email: 'yemisifemipius@gmail.com', country: 'United Kingdom' },
    { name: 'Temilolaoluwa Olaiya', class: 'KOINONIA', schedule: 2, email: 'jumokeolaiya@gmail.com', country: 'United Kingdom' },

    // SIMCHAH - Schedule 1
    { name: 'Abiodun Rofiat Balogun', class: 'SIMCHAH', schedule: 1, email: 'Adebusolapatrick.omale@gmail.com', country: 'Nigeria' },
    { name: 'Aderinsola Love Adeola-Okoro', class: 'SIMCHAH', schedule: 1, email: 'okorochildren@gmail.com', country: 'Nigeria' },
    { name: 'Ayomiposi Oguntoyin', class: 'SIMCHAH', schedule: 1, email: 'oguntoyinkehindebukola1977@gmail.com', country: 'United Kingdom' },
    { name: 'Doyinsola Oliyide', class: 'SIMCHAH', schedule: 1, email: 'tosinoliyide@yahoo.co.uk', country: 'United Kingdom' },
    { name: 'Gift Onyinye Obidi', class: 'SIMCHAH', schedule: 1, email: 'obidigift7@gmail.com', country: 'Nigeria' },
    { name: 'Olurogba Darasimi Olutayo', class: 'SIMCHAH', schedule: 1, email: 'd4r451m10@gmail.com', country: 'United Kingdom' },
    { name: 'Ozioma Divine Oputa', class: 'SIMCHAH', schedule: 1, email: 'oziomagoodnews415@gmail.com', country: 'Nigeria' },
    { name: 'Temiloluwa Adesegun', class: 'SIMCHAH', schedule: 1, email: 'kinfeosiadesegun@gmail.com', country: 'Nigeria' },

    // SIMCHAH - Schedule 2
    { name: 'Adeife Ade-Solanke', class: 'SIMCHAH', schedule: 2, email: 'Boomboi@gmail.com', country: 'United Kingdom' },
    { name: 'Amanda Kalu', class: 'SIMCHAH', schedule: 2, email: 'randymaykalu@gmail.com', country: 'United Kingdom' },
    { name: 'Araoluwakiitan Tioluwani Arowolo', class: 'SIMCHAH', schedule: 2, email: 'adesola.arowolo@yahoo.com', country: 'Nigeria' },
    { name: 'Fehintoluwa Oluwadamilola Odubayo', class: 'SIMCHAH', schedule: 2, email: 'Abi.Odubayo@gmail.com', country: 'United Kingdom' },
    { name: 'Oyinmiebi Shalom Emarah', class: 'SIMCHAH', schedule: 2, email: 'oyinscopy123@gmail.com', country: 'Nigeria' },
    { name: 'Toluwanimi Fatile', class: 'SIMCHAH', schedule: 2, email: 'Toluwanimi.fatile@gmail.com', country: 'Nigeria' },

    // Groups B, C, D - Student data to be added when available
    // DUNAMIS, HESED, KAVOD, SOPHIA, TOWDAH, SHABACH, ZAMAR, AHAVA, TEHILLAH
];

function seedDefaultData() {
    // Only seed if this is a fresh install (no classes exist yet)
    const existingClasses = getData(STORE_KEYS.classes);
    if (existingClasses.length > 0) return;

    // Seed classes
    setData(STORE_KEYS.classes, DEFAULT_CLASSES);

    // Seed teachers (avoiding duplicates by name)
    const seenNames = new Set();
    const teachers = [];
    DEFAULT_TEACHERS.forEach(t => {
        if (seenNames.has(t.name)) {
            // Merge classes for duplicate teacher names
            const existing = teachers.find(ex => ex.name === t.name);
            if (existing && !existing.classes.includes(t.classes)) {
                existing.classes += ', ' + t.classes;
            }
            return;
        }
        seenNames.add(t.name);
        teachers.push({
            id: generateId(),
            name: t.name,
            subject: t.subject,
            classes: t.classes,
            phone: t.phone,
            email: t.email,
        });
    });
    setData(STORE_KEYS.teachers, teachers);

    // Seed students
    const students = DEFAULT_STUDENTS.map(s => ({
        id: generateId(),
        name: s.name,
        class: s.class,
        schedule: s.schedule,
        email: s.email,
        country: s.country,
        gender: '',
        parent: '',
        contact: '',
    }));
    setData(STORE_KEYS.students, students);

    addActivity(`System initialized with ${DEFAULT_CLASSES.length} classes, ${teachers.length} teachers, and ${students.length} students`);
}
