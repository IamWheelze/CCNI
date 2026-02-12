// ===================== DEFAULT SCHOOL DATA =====================
// Pre-loaded classes and teachers for the school
// This runs once on first visit to populate the system

const DEFAULT_CLASSES = [
    // Group A
    'Zoe (Group A)',
    'Rhema (Group A)',
    'Shalom (Group A)',
    'Eleos (Group A)',
    'Ezer (Group A)',
    'Barach (Group A)',
    'Yadah (Group A)',
    'Agape (Group A)',
    'Kairos (Group A)',
    'Exousia (Group A)',
    'Hagaizo (Group A)',
    'Charis (Group A)',
    'Hallal (Group A)',
    'Pneuma (Group A)',
    'Koinonia (Group A)',
    'Simchah (Group A)',
    // Group B
    'Dunamis (Group B)',
    // Group C
    'Hesed (Group C)',
    'Kavod (Group C)',
    'Sophia (Group C)',
    'Towdah (Group C)',
    'Shabach (Group C)',
    'Zamar (Group C)',
    'Ahava (Group C)',
    // Group D
    'Tehillah (Group D)',
];

const DEFAULT_TEACHERS = [
    // GROUP A
    { name: 'Miss Happiness Usulor', subject: 'Head Teacher', classes: 'Zoe (Group A)', phone: '', email: '' },
    { name: 'Mr. Fiyinfoluwa', subject: 'Assistant Teacher', classes: 'Zoe (Group A)', phone: '', email: '' },
    { name: 'Ms Azuka Chukwuma', subject: 'Head Teacher', classes: 'Rhema (Group A)', phone: '', email: '' },
    { name: 'Mr. Oluwatosin Timothy', subject: 'Assistant Teacher', classes: 'Rhema (Group A)', phone: '', email: '' },
    { name: 'Mr Emmanuel Oluwabamise', subject: 'Head Teacher', classes: 'Shalom (Group A)', phone: '', email: '' },
    { name: 'Ms Toluwanimi Odetola', subject: 'Head Teacher / Assistant Teacher', classes: 'Shalom (Group A), Ahava (Group C)', phone: '', email: '' },
    { name: 'Mr Ayanwale Ayooluwa', subject: 'Head Teacher', classes: 'Eleos (Group A)', phone: '', email: '' },
    { name: 'Ms Ayanbanjo Oluwabamise', subject: 'Assistant Teacher', classes: 'Eleos (Group A)', phone: '', email: '' },
    { name: 'Ms Ruth Adeyemo', subject: 'Head Teacher', classes: 'Ezer (Group A), Pneuma (Group A)', phone: '', email: '' },
    { name: 'Ms Titilayo Akingoroye', subject: 'Assistant Teacher', classes: 'Ezer (Group A)', phone: '', email: '' },
    { name: 'Ms Sonna Ausla Nebonta', subject: 'Head Teacher / Assistant Teacher', classes: 'Barach (Group A), Hesed (Group C)', phone: '', email: '' },
    { name: 'Ms Olusola Abigail', subject: 'Assistant Teacher', classes: 'Barach (Group A)', phone: '', email: '' },
    { name: 'Ms Blessing David', subject: 'Head Teacher', classes: 'Yadah (Group A), Hesed (Group C)', phone: '', email: '' },
    { name: 'Ms Oyindamola Jesu Ayanfeoluwa', subject: 'Assistant Teacher', classes: 'Yadah (Group A)', phone: '', email: '' },
    { name: 'Mr. Titus Uduakobong', subject: 'Head Teacher', classes: 'Agape (Group A)', phone: '', email: '' },
    { name: 'Mrs Modola M.', subject: 'Assistant Teacher', classes: 'Agape (Group A)', phone: '', email: '' },
    { name: 'Ms Grace Amah Ukpai', subject: 'Head Teacher', classes: 'Kairos (Group A)', phone: '', email: '' },
    { name: 'Ms Temisan', subject: 'Assistant Teacher', classes: 'Kairos (Group A)', phone: '', email: '' },
    { name: 'Mr Fidel Chidubem', subject: 'Head Teacher / Assistant Teacher', classes: 'Exousia (Group A), Towdah (Group C)', phone: '', email: '' },
    { name: 'Ms Adenowo Deborah', subject: 'Assistant Teacher', classes: 'Exousia (Group A)', phone: '', email: '' },
    { name: 'Mr Annointed Ife Kristi', subject: 'Head Teacher', classes: 'Hagaizo (Group A)', phone: '', email: '' },
    { name: 'Mr Jeremiah Adegoke', subject: 'Assistant Teacher', classes: 'Hagaizo (Group A)', phone: '', email: '' },
    { name: 'Ms Oluwaseun Gbade', subject: 'Head Teacher', classes: 'Charis (Group A)', phone: '', email: '' },
    { name: 'Ms Oluwafadekemi O. Adeniji', subject: 'Assistant Teacher', classes: 'Charis (Group A)', phone: '', email: '' },
    { name: 'Ms Deborah Nifemi Adarabioyo', subject: 'Head Teacher', classes: 'Hallal (Group A)', phone: '', email: '' },
    { name: 'Ms Toluwanimi Abisola', subject: 'Assistant Teacher', classes: 'Hallal (Group A)', phone: '', email: '' },
    { name: 'Ms Stella Ogundairo', subject: 'Assistant Teacher', classes: 'Pneuma (Group A)', phone: '', email: '' },
    { name: 'Mr Pelumi David Olaifa', subject: 'Head Teacher', classes: 'Koinonia (Group A)', phone: '', email: '' },
    { name: 'Ms Folaranmi Othniel', subject: 'Assistant Teacher', classes: 'Koinonia (Group A)', phone: '', email: '' },
    { name: 'Ms Oyewale Oreoluwa', subject: 'Head Teacher', classes: 'Simchah (Group A)', phone: '', email: '' },
    { name: 'Ms Eyinjuoluwa', subject: 'Assistant Teacher', classes: 'Simchah (Group A)', phone: '', email: '' },

    // GROUP B
    { name: 'Mr Oluwaseun Onomade', subject: 'Teacher (Sch 1)', classes: 'Dunamis (Group B)', phone: '', email: '' },
    { name: 'Ms Ayooluwa Adebisi Ayanwale', subject: 'Teacher (Sch 2)', classes: 'Dunamis (Group B)', phone: '', email: '' },

    // GROUP C
    { name: 'Mr Jeremiah Moradeyo Adegoke', subject: 'Head Teacher', classes: 'Kavod (Group C)', phone: '', email: '' },
    { name: 'Ms Oyeleye Ifeoluwa Ojo', subject: 'Assistant Teacher', classes: 'Kavod (Group C)', phone: '', email: '' },
    { name: 'Ms Kehinde Aderibigbe', subject: 'Head Teacher', classes: 'Sophia (Group C)', phone: '', email: '' },
    { name: 'Ms Edeh Tessy', subject: 'Assistant Teacher', classes: 'Sophia (Group C)', phone: '', email: '' },
    { name: 'Ms Praise Isioma Eziedo', subject: 'Head Teacher', classes: 'Towdah (Group C)', phone: '', email: '' },
    { name: 'Ms Modola M. Ola Akintunde', subject: 'Head Teacher', classes: 'Shabach (Group C)', phone: '', email: '' },
    { name: 'Ms Brenda Njowe', subject: 'Assistant Teacher', classes: 'Shabach (Group C)', phone: '', email: '' },
    { name: 'Ms Bello Abigail Titilayo Olusola', subject: 'Head Teacher', classes: 'Zamar (Group C)', phone: '', email: '' },
    { name: 'Ms Oluwatoyin', subject: 'Assistant Teacher', classes: 'Zamar (Group C)', phone: '', email: '' },
    { name: 'Ms Modupe Bukola Illesanmi', subject: 'Assistant Teacher', classes: 'Ahava (Group C)', phone: '', email: '' },

    // GROUP D
    { name: 'Ms Iisominea Isozo Amos', subject: 'Head Teacher (Sch 1)', classes: 'Tehillah (Group D)', phone: '', email: '' },
    { name: 'Ms Morakinyo Damilola', subject: 'Assistant Teacher (Sch 1)', classes: 'Tehillah (Group D)', phone: '', email: '' },
    { name: 'Ms Oladoyin Oluwatobiloba Faskin', subject: 'Teacher (Sch 2)', classes: 'Tehillah (Group D)', phone: '', email: '' },
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
            // Update subject if needed
            if (existing && !existing.subject.includes(t.subject)) {
                existing.subject = 'Head Teacher / Assistant Teacher';
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

    addActivity('System initialized with default classes and teachers');
}
