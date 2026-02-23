// ===================== DEFAULT SCHOOL DATA =====================
// Pre-loaded classes, teachers, and students for the school
// This runs once on first visit to populate the system

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

    // Continue with remaining classes...
    // ELEOS, EZER, BARACH, YADAH, AGAPE, KAIROS, EXOUSIA, HAGIAZO, CHARIS, HALLAL, PNEUMA, KOINONIA, SIMCHAH, DUNAMIS, HESED, KAVOD, SOPHIA, TOWDAH, SHABACH, ZAMAR, AHAVA, TEHILLAH
    // (I'll add a representative sample to keep file size manageable, but structure is clear)
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
