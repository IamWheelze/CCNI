// ===================== DATA STORE =====================
const STORE_KEYS = {
    students: 'schooltrack_students',
    teachers: 'schooltrack_teachers',
    classes: 'schooltrack_classes',
    studentAttendance: 'schooltrack_student_attendance',
    teacherAttendance: 'schooltrack_teacher_attendance',
    teacherSignins: 'schooltrack_teacher_signins',
    complaints: 'schooltrack_complaints',
    remarks: 'schooltrack_remarks',
    settings: 'schooltrack_settings',
    activity: 'schooltrack_activity',
};

function getData(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
        return [];
    }
}

function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getSettings() {
    try {
        return JSON.parse(localStorage.getItem(STORE_KEYS.settings)) || {};
    } catch {
        return {};
    }
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function todayStr() {
    return new Date().toISOString().split('T')[0];
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
    seedDefaultData();
    initNavigation();
    initDateFields();
    updateDashboard();
    renderStudents();
    renderTeachers();
    renderComplaints();
    renderRemarks();
    renderLogs();
    loadSettings();
    populateClassDropdowns();
    loadTeacherAttendance();

    // Display current date in topbar
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', opts);
});

// ===================== NAVIGATION =====================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-links li');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById('page-' + page).classList.add('active');

            // Close sidebar on mobile
            document.getElementById('sidebar').classList.remove('open');

            // Refresh data for the page
            if (page === 'dashboard') updateDashboard();
            if (page === 'logs') renderLogs();
            if (page === 'teacher-attendance') loadTeacherAttendance();
            if (page === 'teacher-signin') loadTeacherSigninPortal();
            if (page === 'reports') loadReportsPage();
        });
    });

    // Menu toggle for mobile
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });
}

function initDateFields() {
    const today = todayStr();
    document.getElementById('studentAttDate').value = today;
    document.getElementById('teacherAttDate').value = today;
    document.getElementById('logDateFrom').value = today;
    document.getElementById('logDateTo').value = today;

    // Set current time for teacher sign-in
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    const signinTimeInput = document.getElementById('signinTime');
    if (signinTimeInput) signinTimeInput.value = timeStr;
}

// ===================== TOAST =====================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show toast-' + type;
    setTimeout(() => { toast.className = 'toast'; }, 3000);
}

// ===================== MODALS =====================
function openModal(id) {
    document.getElementById(id).classList.add('show');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('show');
}

// Close modals on overlay click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('show');
    }
});

// ===================== ACTIVITY LOG =====================
function addActivity(text) {
    const activities = getData(STORE_KEYS.activity);
    activities.unshift({
        text,
        time: new Date().toLocaleString(),
    });
    if (activities.length > 50) activities.length = 50; // keep last 50
    setData(STORE_KEYS.activity, activities);
}

// ===================== CLASSES =====================
function getClasses() {
    return getData(STORE_KEYS.classes);
}

function addClass() {
    const input = document.getElementById('newClassName');
    const name = input.value.trim();
    if (!name) return showToast('Please enter a class name', 'error');

    const classes = getClasses();
    if (classes.includes(name)) return showToast('Class already exists', 'error');

    classes.push(name);
    classes.sort();
    setData(STORE_KEYS.classes, classes);
    input.value = '';
    renderClassesList();
    populateClassDropdowns();
    addActivity(`Added class: ${name}`);
    showToast(`Class "${name}" added`);
}

function removeClass(name) {
    if (!confirm(`Remove class "${name}"? Students in this class will NOT be deleted.`)) return;
    let classes = getClasses().filter(c => c !== name);
    setData(STORE_KEYS.classes, classes);
    renderClassesList();
    populateClassDropdowns();
    addActivity(`Removed class: ${name}`);
    showToast(`Class "${name}" removed`);
}

function renderClassesList() {
    const container = document.getElementById('classesList');
    const classes = getClasses();
    if (classes.length === 0) {
        container.innerHTML = '<p class="hint">No classes added yet. Add classes above.</p>';
        return;
    }
    container.innerHTML = classes.map(c =>
        `<span class="class-tag">${c} <span class="remove-class" onclick="removeClass('${c}')">&times;</span></span>`
    ).join('');
}

function populateClassDropdowns() {
    const classes = getClasses();
    const selectors = [
        'studentClassFilter', 'studentClass', 'bulkStudentClass',
        'studentAttClass', 'logClass'
    ];
    selectors.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const currentVal = el.value;
        const firstOption = el.querySelector('option:first-child');
        el.innerHTML = '';
        if (firstOption) el.appendChild(firstOption);
        classes.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = c;
            el.appendChild(opt);
        });
        if (currentVal) el.value = currentVal;
    });
}

// ===================== STUDENTS =====================
function getStudents() {
    return getData(STORE_KEYS.students);
}

function saveStudent() {
    const editId = document.getElementById('editStudentId').value;
    const name = document.getElementById('studentName').value.trim();
    const cls = document.getElementById('studentClass').value;
    const gender = document.getElementById('studentGender').value;
    const parent = document.getElementById('studentParent').value.trim();
    const contact = document.getElementById('studentContact').value.trim();

    if (!name) return showToast('Student name is required', 'error');
    if (!cls) return showToast('Please select a class', 'error');

    const students = getStudents();

    if (editId) {
        // Edit existing
        const idx = students.findIndex(s => s.id === editId);
        if (idx !== -1) {
            students[idx] = { ...students[idx], name, class: cls, gender, parent, contact };
            addActivity(`Updated student: ${name}`);
        }
    } else {
        // Add new
        students.push({ id: generateId(), name, class: cls, gender, parent, contact });
        addActivity(`Added student: ${name}`);
    }

    setData(STORE_KEYS.students, students);
    closeModal('addStudentModal');
    clearStudentForm();
    renderStudents();
    showToast(editId ? 'Student updated' : 'Student added');
}

function clearStudentForm() {
    document.getElementById('editStudentId').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('studentClass').value = '';
    document.getElementById('studentGender').value = '';
    document.getElementById('studentParent').value = '';
    document.getElementById('studentContact').value = '';
    document.getElementById('studentModalTitle').textContent = 'Add Student';
}

function editStudent(id) {
    const student = getStudents().find(s => s.id === id);
    if (!student) return;
    document.getElementById('editStudentId').value = student.id;
    document.getElementById('studentName').value = student.name;
    document.getElementById('studentClass').value = student.class;
    document.getElementById('studentGender').value = student.gender || '';
    document.getElementById('studentParent').value = student.parent || '';
    document.getElementById('studentContact').value = student.contact || '';
    document.getElementById('studentModalTitle').textContent = 'Edit Student';
    openModal('addStudentModal');
}

function deleteStudent(id) {
    if (!confirm('Delete this student?')) return;
    const students = getStudents().filter(s => s.id !== id);
    setData(STORE_KEYS.students, students);
    addActivity('Deleted a student');
    renderStudents();
    showToast('Student deleted');
}

function bulkAddStudents() {
    const cls = document.getElementById('bulkStudentClass').value;
    const text = document.getElementById('bulkStudentNames').value.trim();

    if (!cls) return showToast('Please select a class', 'error');
    if (!text) return showToast('Please enter student names', 'error');

    const names = text.split('\n').map(n => n.trim()).filter(n => n.length > 0);
    if (names.length === 0) return showToast('No valid names found', 'error');

    const students = getStudents();
    let added = 0;
    names.forEach(name => {
        students.push({ id: generateId(), name, class: cls, gender: '', parent: '', contact: '' });
        added++;
    });

    setData(STORE_KEYS.students, students);
    closeModal('bulkStudentModal');
    document.getElementById('bulkStudentNames').value = '';
    renderStudents();
    addActivity(`Bulk added ${added} students to ${cls}`);
    showToast(`${added} students added to ${cls}`);
}

function renderStudents() {
    const search = (document.getElementById('studentSearch')?.value || '').toLowerCase();
    const classFilter = document.getElementById('studentClassFilter')?.value || '';

    let students = getStudents();
    if (search) students = students.filter(s => s.name.toLowerCase().includes(search));
    if (classFilter) students = students.filter(s => s.class === classFilter);

    // Sort by class then name
    students.sort((a, b) => a.class.localeCompare(b.class) || a.name.localeCompare(b.name));

    const tbody = document.getElementById('studentsTableBody');
    if (students.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="empty-state">No students found. Add students to get started.</td></tr>';
        return;
    }

    tbody.innerHTML = students.map((s, i) => `
        <tr>
            <td><input type="checkbox" class="student-checkbox" data-id="${s.id}"></td>
            <td>${i + 1}</td>
            <td><strong>${escHtml(s.name)}</strong></td>
            <td><span class="class-badge">${escHtml(s.class)}</span></td>
            <td><span class="schedule-badge">${s.schedule || '-'}</span></td>
            <td style="font-size: 12px;">${escHtml(s.email || '-')}</td>
            <td>${escHtml(s.country || '-')}</td>
            <td>
                <div class="actions">
                    <button class="btn-view" title="View Report" onclick="openStudentReport('${s.id}')"><i class="fas fa-chart-line"></i></button>
                    <button class="btn-edit" title="Edit" onclick="editStudent('${s.id}')"><i class="fas fa-pen"></i></button>
                    <button class="btn-delete" title="Delete" onclick="deleteStudent('${s.id}')"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');

    // Checkbox listener for bulk actions
    document.querySelectorAll('.student-checkbox').forEach(cb => {
        cb.addEventListener('change', updateStudentBulkActions);
    });
}

function toggleSelectAllStudents() {
    const checked = document.getElementById('selectAllStudents').checked;
    document.querySelectorAll('.student-checkbox').forEach(cb => { cb.checked = checked; });
    updateStudentBulkActions();
}

function updateStudentBulkActions() {
    const any = document.querySelector('.student-checkbox:checked');
    document.getElementById('studentBulkActions').style.display = any ? 'flex' : 'none';
}

function deleteSelectedStudents() {
    const ids = [...document.querySelectorAll('.student-checkbox:checked')].map(cb => cb.dataset.id);
    if (ids.length === 0) return;
    if (!confirm(`Delete ${ids.length} selected student(s)?`)) return;

    let students = getStudents().filter(s => !ids.includes(s.id));
    setData(STORE_KEYS.students, students);
    document.getElementById('selectAllStudents').checked = false;
    addActivity(`Bulk deleted ${ids.length} students`);
    renderStudents();
    showToast(`${ids.length} students deleted`);
}

// ===================== TEACHERS =====================
function getTeachers() {
    return getData(STORE_KEYS.teachers);
}

function saveTeacher() {
    const editId = document.getElementById('editTeacherId').value;
    const name = document.getElementById('teacherName').value.trim();
    const subject = document.getElementById('teacherSubject').value.trim();
    const classes = document.getElementById('teacherClasses').value.trim();
    const phone = document.getElementById('teacherPhone').value.trim();
    const email = document.getElementById('teacherEmail').value.trim();

    if (!name) return showToast('Teacher name is required', 'error');

    const teachers = getTeachers();

    if (editId) {
        const idx = teachers.findIndex(t => t.id === editId);
        if (idx !== -1) {
            teachers[idx] = { ...teachers[idx], name, subject, classes, phone, email };
            addActivity(`Updated teacher: ${name}`);
        }
    } else {
        teachers.push({ id: generateId(), name, subject, classes, phone, email });
        addActivity(`Added teacher: ${name}`);
    }

    setData(STORE_KEYS.teachers, teachers);
    closeModal('addTeacherModal');
    clearTeacherForm();
    renderTeachers();
    showToast(editId ? 'Teacher updated' : 'Teacher added');
}

function clearTeacherForm() {
    document.getElementById('editTeacherId').value = '';
    document.getElementById('teacherName').value = '';
    document.getElementById('teacherSubject').value = '';
    document.getElementById('teacherClasses').value = '';
    document.getElementById('teacherPhone').value = '';
    document.getElementById('teacherEmail').value = '';
    document.getElementById('teacherModalTitle').textContent = 'Add Teacher';
}

function editTeacher(id) {
    const teacher = getTeachers().find(t => t.id === id);
    if (!teacher) return;
    document.getElementById('editTeacherId').value = teacher.id;
    document.getElementById('teacherName').value = teacher.name;
    document.getElementById('teacherSubject').value = teacher.subject || '';
    document.getElementById('teacherClasses').value = teacher.classes || '';
    document.getElementById('teacherPhone').value = teacher.phone || '';
    document.getElementById('teacherEmail').value = teacher.email || '';
    document.getElementById('teacherModalTitle').textContent = 'Edit Teacher';
    openModal('addTeacherModal');
}

function deleteTeacher(id) {
    if (!confirm('Delete this teacher?')) return;
    const teachers = getTeachers().filter(t => t.id !== id);
    setData(STORE_KEYS.teachers, teachers);
    addActivity('Deleted a teacher');
    renderTeachers();
    showToast('Teacher deleted');
}

function bulkAddTeachers() {
    const text = document.getElementById('bulkTeacherNames').value.trim();
    if (!text) return showToast('Please enter teacher names', 'error');

    const names = text.split('\n').map(n => n.trim()).filter(n => n.length > 0);
    if (names.length === 0) return showToast('No valid names found', 'error');

    const teachers = getTeachers();
    let added = 0;
    names.forEach(name => {
        teachers.push({ id: generateId(), name, subject: '', classes: '', phone: '', email: '' });
        added++;
    });

    setData(STORE_KEYS.teachers, teachers);
    closeModal('bulkTeacherModal');
    document.getElementById('bulkTeacherNames').value = '';
    renderTeachers();
    addActivity(`Bulk added ${added} teachers`);
    showToast(`${added} teachers added`);
}

function renderTeachers() {
    const search = (document.getElementById('teacherSearch')?.value || '').toLowerCase();
    let teachers = getTeachers();
    if (search) teachers = teachers.filter(t => t.name.toLowerCase().includes(search));

    teachers.sort((a, b) => a.name.localeCompare(b.name));

    const tbody = document.getElementById('teachersTableBody');
    if (teachers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="empty-state">No teachers found. Add teachers to get started.</td></tr>';
        return;
    }

    tbody.innerHTML = teachers.map((t, i) => `
        <tr>
            <td><input type="checkbox" class="teacher-checkbox" data-id="${t.id}"></td>
            <td>${i + 1}</td>
            <td><strong>${escHtml(t.name)}</strong></td>
            <td>${escHtml(t.subject || '-')}</td>
            <td>${escHtml(t.classes || '-')}</td>
            <td>${escHtml(t.phone || '-')}</td>
            <td>${escHtml(t.email || '-')}</td>
            <td>
                <div class="actions">
                    <button class="btn-edit" title="Edit" onclick="editTeacher('${t.id}')"><i class="fas fa-pen"></i></button>
                    <button class="btn-delete" title="Delete" onclick="deleteTeacher('${t.id}')"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');

    document.querySelectorAll('.teacher-checkbox').forEach(cb => {
        cb.addEventListener('change', updateTeacherBulkActions);
    });
}

function toggleSelectAllTeachers() {
    const checked = document.getElementById('selectAllTeachers').checked;
    document.querySelectorAll('.teacher-checkbox').forEach(cb => { cb.checked = checked; });
    updateTeacherBulkActions();
}

function updateTeacherBulkActions() {
    const any = document.querySelector('.teacher-checkbox:checked');
    document.getElementById('teacherBulkActions').style.display = any ? 'flex' : 'none';
}

function deleteSelectedTeachers() {
    const ids = [...document.querySelectorAll('.teacher-checkbox:checked')].map(cb => cb.dataset.id);
    if (ids.length === 0) return;
    if (!confirm(`Delete ${ids.length} selected teacher(s)?`)) return;

    let teachers = getTeachers().filter(t => !ids.includes(t.id));
    setData(STORE_KEYS.teachers, teachers);
    document.getElementById('selectAllTeachers').checked = false;
    addActivity(`Bulk deleted ${ids.length} teachers`);
    renderTeachers();
    showToast(`${ids.length} teachers deleted`);
}

// ===================== STUDENT ATTENDANCE =====================
function loadStudentAttendance() {
    const cls = document.getElementById('studentAttClass').value;
    const date = document.getElementById('studentAttDate').value;
    const scheduleFilter = document.getElementById('studentAttSchedule')?.value || '';
    const tbody = document.getElementById('studentAttBody');

    if (!cls) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-state">Select a class to view students</td></tr>';
        return;
    }

    let students = getStudents().filter(s => s.class === cls);

    // Filter by schedule if selected
    if (scheduleFilter) {
        students = students.filter(s => String(s.schedule) === scheduleFilter);
    }

    if (students.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-state">No students in this class/schedule</td></tr>';
        return;
    }

    students.sort((a, b) => a.name.localeCompare(b.name));

    // Check existing attendance for this date/class
    const records = getData(STORE_KEYS.studentAttendance);
    const existing = {};
    records.forEach(r => {
        if (r.date === date && r.class === cls) {
            existing[r.studentId] = r;
        }
    });

    tbody.innerHTML = students.map((s, i) => {
        const rec = existing[s.id] || {};
        const status = rec.status || 'present';
        const note = rec.note || '';
        return `
            <tr>
                <td>${i + 1}</td>
                <td><strong>${escHtml(s.name)}</strong></td>
                <td><input type="radio" name="att_${s.id}" value="present" ${status === 'present' ? 'checked' : ''}></td>
                <td><input type="radio" name="att_${s.id}" value="absent" ${status === 'absent' ? 'checked' : ''}></td>
                <td><input type="radio" name="att_${s.id}" value="late" ${status === 'late' ? 'checked' : ''}></td>
                <td><input type="text" class="note-input" data-student="${s.id}" placeholder="Optional note" value="${escHtml(note)}"></td>
            </tr>
        `;
    }).join('');
}

function markAllPresent(type) {
    const radios = document.querySelectorAll(`#${type === 'student' ? 'studentAttBody' : 'teacherAttBody'} input[type="radio"][value="present"]`);
    radios.forEach(r => { r.checked = true; });
}

function markAllAbsent(type) {
    const radios = document.querySelectorAll(`#${type === 'student' ? 'studentAttBody' : 'teacherAttBody'} input[type="radio"][value="absent"]`);
    radios.forEach(r => { r.checked = true; });
}

function saveStudentAttendance() {
    const cls = document.getElementById('studentAttClass').value;
    const date = document.getElementById('studentAttDate').value;

    if (!cls) return showToast('Please select a class', 'error');
    if (!date) return showToast('Please select a date', 'error');

    const students = getStudents().filter(s => s.class === cls);
    if (students.length === 0) return showToast('No students in this class', 'error');

    let records = getData(STORE_KEYS.studentAttendance);

    // Remove old records for this date/class
    records = records.filter(r => !(r.date === date && r.class === cls));

    let presentCount = 0;
    let absentCount = 0;
    let lateCount = 0;

    students.forEach(s => {
        const radio = document.querySelector(`input[name="att_${s.id}"]:checked`);
        const noteInput = document.querySelector(`.note-input[data-student="${s.id}"]`);
        const status = radio ? radio.value : 'present';
        const note = noteInput ? noteInput.value.trim() : '';

        if (status === 'present') presentCount++;
        else if (status === 'absent') absentCount++;
        else if (status === 'late') lateCount++;

        records.push({
            id: generateId(),
            studentId: s.id,
            studentName: s.name,
            class: cls,
            date,
            status,
            note,
            timestamp: new Date().toISOString(),
        });
    });

    setData(STORE_KEYS.studentAttendance, records);
    addActivity(`Marked attendance for ${cls} on ${date}: ${presentCount} present, ${absentCount} absent, ${lateCount} late`);
    showToast(`Attendance saved for ${cls} - ${presentCount} present, ${absentCount} absent, ${lateCount} late`);
    updateDashboard();
}

// ===================== TEACHER ATTENDANCE =====================
function loadTeacherAttendance() {
    const date = document.getElementById('teacherAttDate')?.value || todayStr();
    const teachers = getTeachers();
    const tbody = document.getElementById('teacherAttBody');

    if (teachers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="empty-state">No teachers added yet</td></tr>';
        return;
    }

    const records = getData(STORE_KEYS.teacherAttendance);
    const existing = {};
    records.forEach(r => {
        if (r.date === date) {
            existing[r.teacherId] = r;
        }
    });

    tbody.innerHTML = teachers.sort((a, b) => a.name.localeCompare(b.name)).map((t, i) => {
        const rec = existing[t.id] || {};
        const status = rec.status || 'present';
        const note = rec.note || '';
        return `
            <tr>
                <td>${i + 1}</td>
                <td><strong>${escHtml(t.name)}</strong></td>
                <td>${escHtml(t.subject || '-')}</td>
                <td><input type="radio" name="tatt_${t.id}" value="present" ${status === 'present' ? 'checked' : ''}></td>
                <td><input type="radio" name="tatt_${t.id}" value="absent" ${status === 'absent' ? 'checked' : ''}></td>
                <td><input type="radio" name="tatt_${t.id}" value="late" ${status === 'late' ? 'checked' : ''}></td>
                <td><input type="text" class="note-input" data-teacher="${t.id}" placeholder="Optional note" value="${escHtml(note)}"></td>
            </tr>
        `;
    }).join('');
}

function saveTeacherAttendance() {
    const date = document.getElementById('teacherAttDate').value;
    if (!date) return showToast('Please select a date', 'error');

    const teachers = getTeachers();
    if (teachers.length === 0) return showToast('No teachers to mark', 'error');

    let records = getData(STORE_KEYS.teacherAttendance);
    records = records.filter(r => r.date !== date);

    let presentCount = 0;
    let absentCount = 0;

    teachers.forEach(t => {
        const radio = document.querySelector(`input[name="tatt_${t.id}"]:checked`);
        const noteInput = document.querySelector(`.note-input[data-teacher="${t.id}"]`);
        const status = radio ? radio.value : 'present';
        const note = noteInput ? noteInput.value.trim() : '';

        if (status === 'present' || status === 'late') presentCount++;
        else absentCount++;

        records.push({
            id: generateId(),
            teacherId: t.id,
            teacherName: t.name,
            date,
            status,
            note,
            timestamp: new Date().toISOString(),
        });
    });

    setData(STORE_KEYS.teacherAttendance, records);
    addActivity(`Marked teacher attendance for ${date}: ${presentCount} present, ${absentCount} absent`);
    showToast(`Teacher attendance saved - ${presentCount} present, ${absentCount} absent`);
    updateDashboard();
}

// ===================== COMPLAINTS =====================
function getComplaints() {
    return getData(STORE_KEYS.complaints);
}

function saveComplaint() {
    const type = document.getElementById('complaintType').value;
    const priority = document.getElementById('complaintPriority').value;
    const filedBy = document.getElementById('complaintBy').value.trim();
    const subject = document.getElementById('complaintSubject').value.trim();
    const desc = document.getElementById('complaintDesc').value.trim();

    if (!type) return showToast('Please select a complaint type', 'error');
    if (!filedBy) return showToast('Please enter your name', 'error');
    if (!subject) return showToast('Please enter a subject', 'error');
    if (!desc) return showToast('Please enter a description', 'error');

    const complaints = getComplaints();
    const complaint = {
        id: generateId(),
        type,
        priority,
        filedBy,
        subject,
        description: desc,
        status: 'pending',
        date: new Date().toISOString(),
        responses: [],
    };

    complaints.unshift(complaint);
    setData(STORE_KEYS.complaints, complaints);

    // Send email notification
    sendComplaintEmail(complaint);

    closeModal('newComplaintModal');
    document.getElementById('complaintType').value = '';
    document.getElementById('complaintBy').value = '';
    document.getElementById('complaintSubject').value = '';
    document.getElementById('complaintDesc').value = '';

    addActivity(`New complaint filed: ${subject}`);
    renderComplaints();
    updateDashboard();
    showToast('Complaint submitted successfully');
}

function sendComplaintEmail(complaint) {
    const settings = getSettings();
    const adminEmail = settings.adminEmail || '';
    if (!adminEmail) return;

    const subject = encodeURIComponent(`[SchoolTrack Complaint] ${complaint.subject}`);
    const body = encodeURIComponent(
        `Complaint Details:\n\n` +
        `Type: ${complaint.type}\n` +
        `Priority: ${complaint.priority}\n` +
        `Filed By: ${complaint.filedBy}\n` +
        `Date: ${new Date(complaint.date).toLocaleString()}\n\n` +
        `Description:\n${complaint.description}\n\n` +
        `---\nThis complaint was filed through the SchoolTrack system.`
    );

    // Open mailto link
    window.open(`mailto:${adminEmail}?subject=${subject}&body=${body}`, '_blank');
}

function renderComplaints() {
    const statusFilter = document.getElementById('complaintFilter')?.value || '';
    const typeFilter = document.getElementById('complaintTypeFilter')?.value || '';

    let complaints = getComplaints();
    if (statusFilter) complaints = complaints.filter(c => c.status === statusFilter);
    if (typeFilter) complaints = complaints.filter(c => c.type === typeFilter);

    const container = document.getElementById('complaintsList');

    if (complaints.length === 0) {
        container.innerHTML = '<p class="empty-state">No complaints found.</p>';
        return;
    }

    container.innerHTML = complaints.map(c => `
        <div class="complaint-card priority-${c.priority}" onclick="viewComplaint('${c.id}')">
            <div class="complaint-header">
                <h4>${escHtml(c.subject)}</h4>
                <span class="status-badge status-${c.status}">${c.status.replace('-', ' ')}</span>
            </div>
            <div class="complaint-meta">
                <span><i class="fas fa-user"></i> ${escHtml(c.filedBy)}</span>
                <span><i class="fas fa-calendar"></i> ${new Date(c.date).toLocaleDateString()}</span>
                <span class="type-badge">${c.type}</span>
            </div>
            <p class="complaint-desc">${escHtml(c.description).substring(0, 150)}${c.description.length > 150 ? '...' : ''}</p>
        </div>
    `).join('');
}

function viewComplaint(id) {
    const complaint = getComplaints().find(c => c.id === id);
    if (!complaint) return;

    const body = document.getElementById('viewComplaintBody');
    body.innerHTML = `
        <div style="margin-bottom:12px;">
            <span class="status-badge status-${complaint.status}">${complaint.status.replace('-', ' ')}</span>
            <span class="type-badge" style="margin-left:8px;">${complaint.type}</span>
        </div>
        <h3 style="margin-bottom:8px;">${escHtml(complaint.subject)}</h3>
        <div class="complaint-meta" style="margin-bottom:16px;">
            <span><i class="fas fa-user"></i> ${escHtml(complaint.filedBy)}</span>
            <span><i class="fas fa-calendar"></i> ${new Date(complaint.date).toLocaleString()}</span>
            <span>Priority: <strong>${complaint.priority}</strong></span>
        </div>
        <p style="line-height:1.7; margin-bottom:16px;">${escHtml(complaint.description)}</p>
        ${complaint.responses && complaint.responses.length > 0 ? `
            <h4 style="margin-bottom:8px;">Responses:</h4>
            ${complaint.responses.map(r => `
                <div style="background:#f8f9fb; padding:12px; border-radius:8px; margin-bottom:8px;">
                    <p style="font-size:13px; color:var(--secondary);">${new Date(r.date).toLocaleString()}</p>
                    <p>${escHtml(r.text)}</p>
                </div>
            `).join('')}
        ` : ''}
        <div class="form-group" style="margin-top:16px;">
            <label>Add Response</label>
            <textarea id="complaintResponse" rows="3" placeholder="Type a response..."></textarea>
        </div>
    `;

    const footer = document.getElementById('viewComplaintFooter');
    footer.innerHTML = `
        <select id="updateComplaintStatus" class="filter-select">
            <option value="pending" ${complaint.status === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="in-progress" ${complaint.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
            <option value="resolved" ${complaint.status === 'resolved' ? 'selected' : ''}>Resolved</option>
        </select>
        <button class="btn btn-primary" onclick="updateComplaint('${complaint.id}')">Update</button>
        <button class="btn btn-danger" onclick="deleteComplaint('${complaint.id}')"><i class="fas fa-trash"></i> Delete</button>
    `;

    openModal('viewComplaintModal');
}

function updateComplaint(id) {
    const complaints = getComplaints();
    const idx = complaints.findIndex(c => c.id === id);
    if (idx === -1) return;

    const newStatus = document.getElementById('updateComplaintStatus').value;
    const responseText = document.getElementById('complaintResponse').value.trim();

    complaints[idx].status = newStatus;
    if (responseText) {
        if (!complaints[idx].responses) complaints[idx].responses = [];
        complaints[idx].responses.push({ text: responseText, date: new Date().toISOString() });
    }

    setData(STORE_KEYS.complaints, complaints);
    closeModal('viewComplaintModal');
    renderComplaints();
    updateDashboard();
    addActivity(`Updated complaint: ${complaints[idx].subject}`);
    showToast('Complaint updated');
}

function deleteComplaint(id) {
    if (!confirm('Delete this complaint?')) return;
    const complaints = getComplaints().filter(c => c.id !== id);
    setData(STORE_KEYS.complaints, complaints);
    closeModal('viewComplaintModal');
    renderComplaints();
    updateDashboard();
    addActivity('Deleted a complaint');
    showToast('Complaint deleted');
}

// ===================== COMMENTS & REMARKS =====================
function getRemarks() {
    return getData(STORE_KEYS.remarks);
}

function updateRemarkTargetName() {
    const target = document.getElementById('remarkTarget').value;
    const selectEl = document.getElementById('remarkTargetSelect');
    const inputEl = document.getElementById('remarkTargetName');
    const group = document.getElementById('remarkTargetNameGroup');
    const label = document.getElementById('remarkTargetNameLabel');

    selectEl.style.display = 'none';
    inputEl.style.display = 'none';
    selectEl.innerHTML = '<option value="">Select...</option>';

    if (target === 'student') {
        label.textContent = 'Select Student';
        const students = getStudents().sort((a, b) => a.name.localeCompare(b.name));
        students.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.name;
            opt.textContent = `${s.name} (${s.class})`;
            selectEl.appendChild(opt);
        });
        selectEl.style.display = 'block';
        group.style.display = 'block';
    } else if (target === 'teacher') {
        label.textContent = 'Select Teacher';
        const teachers = getTeachers().sort((a, b) => a.name.localeCompare(b.name));
        teachers.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t.name;
            opt.textContent = t.name;
            selectEl.appendChild(opt);
        });
        selectEl.style.display = 'block';
        group.style.display = 'block';
    } else if (target === 'class') {
        label.textContent = 'Select Class';
        const classes = getClasses();
        classes.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = c;
            selectEl.appendChild(opt);
        });
        selectEl.style.display = 'block';
        group.style.display = 'block';
    } else if (target === 'general') {
        group.style.display = 'none';
    } else {
        group.style.display = 'none';
    }
}

function saveRemark() {
    const editId = document.getElementById('editRemarkId').value;
    const target = document.getElementById('remarkTarget').value;
    const category = document.getElementById('remarkCategory').value;
    const selectEl = document.getElementById('remarkTargetSelect');
    const targetName = (target === 'general') ? 'General' : selectEl.value;
    const author = document.getElementById('remarkAuthor').value.trim();
    const title = document.getElementById('remarkTitle').value.trim();
    const body = document.getElementById('remarkBody').value.trim();
    const emailNotify = document.getElementById('remarkEmailNotify').checked;

    if (!target) return showToast('Please select who this remark is about', 'error');
    if (target !== 'general' && !targetName) return showToast('Please select the target', 'error');
    if (!author) return showToast('Please enter your name', 'error');
    if (!title) return showToast('Please enter a title', 'error');
    if (!body) return showToast('Please enter the remark', 'error');

    const remarks = getRemarks();

    const remark = {
        id: editId || generateId(),
        target,
        targetName,
        category,
        author,
        title,
        body,
        date: new Date().toISOString(),
        replies: [],
    };

    if (editId) {
        const idx = remarks.findIndex(r => r.id === editId);
        if (idx !== -1) {
            remark.replies = remarks[idx].replies || [];
            remarks[idx] = remark;
        }
    } else {
        remarks.unshift(remark);
    }

    setData(STORE_KEYS.remarks, remarks);

    // Email notification
    if (emailNotify) {
        sendRemarkEmail(remark);
    }

    closeModal('newRemarkModal');
    clearRemarkForm();
    renderRemarks();
    addActivity(`${editId ? 'Updated' : 'Added'} remark: ${title}`);
    showToast(editId ? 'Remark updated' : 'Remark saved');
}

function clearRemarkForm() {
    document.getElementById('editRemarkId').value = '';
    document.getElementById('remarkTarget').value = '';
    document.getElementById('remarkCategory').value = 'general';
    document.getElementById('remarkAuthor').value = '';
    document.getElementById('remarkTitle').value = '';
    document.getElementById('remarkBody').value = '';
    document.getElementById('remarkEmailNotify').checked = false;
    document.getElementById('remarkTargetNameGroup').style.display = 'none';
    document.getElementById('remarkModalTitle').textContent = 'Add Comment / Remark';
}

function sendRemarkEmail(remark) {
    const settings = getSettings();
    const adminEmail = settings.adminEmail || '';
    if (!adminEmail) {
        showToast('No admin email set. Go to Settings to add one.', 'error');
        return;
    }

    const subject = encodeURIComponent(`[SchoolTrack Remark] ${remark.title}`);
    const emailBody = encodeURIComponent(
        `Comment / Remark Details:\n\n` +
        `Title: ${remark.title}\n` +
        `About: ${remark.target} - ${remark.targetName}\n` +
        `Category: ${remark.category}\n` +
        `Written By: ${remark.author}\n` +
        `Date: ${new Date(remark.date).toLocaleString()}\n\n` +
        `Remark:\n${remark.body}\n\n` +
        `---\nSent from SchoolTrack system.`
    );

    window.open(`mailto:${adminEmail}?subject=${subject}&body=${emailBody}`, '_blank');
}

function renderRemarks() {
    const search = (document.getElementById('remarkSearch')?.value || '').toLowerCase();
    const targetFilter = document.getElementById('remarkTargetFilter')?.value || '';
    const categoryFilter = document.getElementById('remarkCategoryFilter')?.value || '';

    let remarks = getRemarks();
    if (search) remarks = remarks.filter(r =>
        r.title.toLowerCase().includes(search) ||
        r.body.toLowerCase().includes(search) ||
        r.targetName.toLowerCase().includes(search) ||
        r.author.toLowerCase().includes(search)
    );
    if (targetFilter) remarks = remarks.filter(r => r.target === targetFilter);
    if (categoryFilter) remarks = remarks.filter(r => r.category === categoryFilter);

    const container = document.getElementById('remarksList');

    if (remarks.length === 0) {
        container.innerHTML = '<p class="empty-state">No comments or remarks found.</p>';
        return;
    }

    container.innerHTML = remarks.map(r => `
        <div class="remark-card category-${r.category}" onclick="viewRemark('${r.id}')">
            <div class="remark-header">
                <h4>${escHtml(r.title)}</h4>
                <span class="category-badge cat-${r.category}">${r.category}</span>
            </div>
            <div class="remark-meta">
                <span><i class="fas fa-user"></i> ${escHtml(r.author)}</span>
                <span><i class="fas fa-calendar"></i> ${new Date(r.date).toLocaleDateString()}</span>
                <span class="target-badge"><i class="fas fa-${r.target === 'student' ? 'user-graduate' : r.target === 'teacher' ? 'chalkboard-teacher' : r.target === 'class' ? 'users' : 'globe'}"></i> ${escHtml(r.targetName)}</span>
            </div>
            <p class="remark-body">${escHtml(r.body).substring(0, 200)}${r.body.length > 200 ? '...' : ''}</p>
        </div>
    `).join('');
}

function viewRemark(id) {
    const remark = getRemarks().find(r => r.id === id);
    if (!remark) return;

    const body = document.getElementById('viewRemarkBody');
    body.innerHTML = `
        <div style="margin-bottom:12px;">
            <span class="category-badge cat-${remark.category}">${remark.category}</span>
            <span class="target-badge" style="margin-left:8px;"><i class="fas fa-${remark.target === 'student' ? 'user-graduate' : remark.target === 'teacher' ? 'chalkboard-teacher' : remark.target === 'class' ? 'users' : 'globe'}"></i> ${escHtml(remark.targetName)}</span>
        </div>
        <h3 style="margin-bottom:8px;">${escHtml(remark.title)}</h3>
        <div class="remark-meta" style="margin-bottom:16px;">
            <span><i class="fas fa-user"></i> ${escHtml(remark.author)}</span>
            <span><i class="fas fa-calendar"></i> ${new Date(remark.date).toLocaleString()}</span>
        </div>
        <p style="line-height:1.7; margin-bottom:16px; white-space:pre-wrap;">${escHtml(remark.body)}</p>
        ${remark.replies && remark.replies.length > 0 ? `
            <h4 style="margin-bottom:8px;">Replies:</h4>
            ${remark.replies.map(rep => `
                <div style="background:#f8f9fb; padding:12px; border-radius:8px; margin-bottom:8px;">
                    <p style="font-size:13px; color:var(--secondary);"><strong>${escHtml(rep.author)}</strong> &middot; ${new Date(rep.date).toLocaleString()}</p>
                    <p style="white-space:pre-wrap;">${escHtml(rep.text)}</p>
                </div>
            `).join('')}
        ` : ''}
        <div style="margin-top:16px; padding-top:16px; border-top:1px solid var(--border);">
            <div class="form-group">
                <label>Add Reply</label>
                <input type="text" id="replyAuthor" placeholder="Your name" style="margin-bottom:8px;">
                <textarea id="replyText" rows="3" placeholder="Write a reply..."></textarea>
            </div>
        </div>
    `;

    const footer = document.getElementById('viewRemarkFooter');
    footer.innerHTML = `
        <button class="btn btn-secondary" onclick="addReply('${remark.id}')"><i class="fas fa-reply"></i> Add Reply</button>
        <button class="btn btn-primary" onclick="editRemark('${remark.id}')"><i class="fas fa-pen"></i> Edit</button>
        <button class="btn btn-danger" onclick="deleteRemark('${remark.id}')"><i class="fas fa-trash"></i> Delete</button>
    `;

    openModal('viewRemarkModal');
}

function addReply(remarkId) {
    const author = document.getElementById('replyAuthor').value.trim();
    const text = document.getElementById('replyText').value.trim();
    if (!author) return showToast('Please enter your name', 'error');
    if (!text) return showToast('Please enter a reply', 'error');

    const remarks = getRemarks();
    const idx = remarks.findIndex(r => r.id === remarkId);
    if (idx === -1) return;

    if (!remarks[idx].replies) remarks[idx].replies = [];
    remarks[idx].replies.push({ author, text, date: new Date().toISOString() });
    setData(STORE_KEYS.remarks, remarks);

    addActivity(`Reply added to remark: ${remarks[idx].title}`);
    showToast('Reply added');
    viewRemark(remarkId); // refresh the modal
}

function editRemark(id) {
    const remark = getRemarks().find(r => r.id === id);
    if (!remark) return;

    closeModal('viewRemarkModal');

    document.getElementById('editRemarkId').value = remark.id;
    document.getElementById('remarkTarget').value = remark.target;
    document.getElementById('remarkCategory').value = remark.category;
    document.getElementById('remarkAuthor').value = remark.author;
    document.getElementById('remarkTitle').value = remark.title;
    document.getElementById('remarkBody').value = remark.body;
    document.getElementById('remarkModalTitle').textContent = 'Edit Remark';

    updateRemarkTargetName();
    // Set the target name after dropdown is populated
    setTimeout(() => {
        document.getElementById('remarkTargetSelect').value = remark.targetName;
    }, 50);

    openModal('newRemarkModal');
}

function deleteRemark(id) {
    if (!confirm('Delete this remark?')) return;
    const remarks = getRemarks().filter(r => r.id !== id);
    setData(STORE_KEYS.remarks, remarks);
    closeModal('viewRemarkModal');
    renderRemarks();
    addActivity('Deleted a remark');
    showToast('Remark deleted');
}

// ===================== ATTENDANCE LOGS =====================
function renderLogs() {
    const logType = document.getElementById('logType')?.value || 'student';
    const logClass = document.getElementById('logClass')?.value || '';
    const dateFrom = document.getElementById('logDateFrom')?.value || '';
    const dateTo = document.getElementById('logDateTo')?.value || '';

    const thead = document.getElementById('logTableHead');
    const tbody = document.getElementById('logTableBody');
    const summary = document.getElementById('logSummary');

    if (logType === 'student') {
        thead.innerHTML = `<tr><th>Date</th><th>Name</th><th>Class</th><th>Status</th><th>Note</th></tr>`;

        let records = getData(STORE_KEYS.studentAttendance);
        if (logClass) records = records.filter(r => r.class === logClass);
        if (dateFrom) records = records.filter(r => r.date >= dateFrom);
        if (dateTo) records = records.filter(r => r.date <= dateTo);

        records.sort((a, b) => b.date.localeCompare(a.date) || a.studentName.localeCompare(b.studentName));

        const totalPresent = records.filter(r => r.status === 'present').length;
        const totalAbsent = records.filter(r => r.status === 'absent').length;
        const totalLate = records.filter(r => r.status === 'late').length;

        summary.innerHTML = `
            <div class="log-stat"><div class="number" style="color:var(--success)">${totalPresent}</div><div class="label">Present</div></div>
            <div class="log-stat"><div class="number" style="color:var(--danger)">${totalAbsent}</div><div class="label">Absent</div></div>
            <div class="log-stat"><div class="number" style="color:var(--warning)">${totalLate}</div><div class="label">Late</div></div>
            <div class="log-stat"><div class="number">${records.length}</div><div class="label">Total Records</div></div>
        `;

        if (records.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="empty-state">No attendance records found</td></tr>';
            return;
        }

        tbody.innerHTML = records.map(r => `
            <tr>
                <td>${r.date}</td>
                <td>${escHtml(r.studentName)}</td>
                <td><span class="class-badge">${escHtml(r.class)}</span></td>
                <td><span class="status-badge status-${r.status === 'present' ? 'resolved' : r.status === 'absent' ? 'pending' : 'in-progress'}">${r.status}</span></td>
                <td>${escHtml(r.note || '-')}</td>
            </tr>
        `).join('');
    } else {
        thead.innerHTML = `<tr><th>Date</th><th>Name</th><th>Status</th><th>Note</th></tr>`;

        let records = getData(STORE_KEYS.teacherAttendance);
        if (dateFrom) records = records.filter(r => r.date >= dateFrom);
        if (dateTo) records = records.filter(r => r.date <= dateTo);

        records.sort((a, b) => b.date.localeCompare(a.date) || a.teacherName.localeCompare(b.teacherName));

        const totalPresent = records.filter(r => r.status === 'present').length;
        const totalAbsent = records.filter(r => r.status === 'absent').length;
        const totalLate = records.filter(r => r.status === 'late').length;

        summary.innerHTML = `
            <div class="log-stat"><div class="number" style="color:var(--success)">${totalPresent}</div><div class="label">Present</div></div>
            <div class="log-stat"><div class="number" style="color:var(--danger)">${totalAbsent}</div><div class="label">Absent</div></div>
            <div class="log-stat"><div class="number" style="color:var(--warning)">${totalLate}</div><div class="label">Late</div></div>
            <div class="log-stat"><div class="number">${records.length}</div><div class="label">Total Records</div></div>
        `;

        if (records.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" class="empty-state">No attendance records found</td></tr>';
            return;
        }

        tbody.innerHTML = records.map(r => `
            <tr>
                <td>${r.date}</td>
                <td>${escHtml(r.teacherName)}</td>
                <td><span class="status-badge status-${r.status === 'present' ? 'resolved' : r.status === 'absent' ? 'pending' : 'in-progress'}">${r.status}</span></td>
                <td>${escHtml(r.note || '-')}</td>
            </tr>
        `).join('');
    }
}

function exportLogs() {
    const logType = document.getElementById('logType').value;
    const records = logType === 'student'
        ? getData(STORE_KEYS.studentAttendance)
        : getData(STORE_KEYS.teacherAttendance);

    if (records.length === 0) return showToast('No records to export', 'error');

    let csv = '';
    if (logType === 'student') {
        csv = 'Date,Name,Class,Status,Note\n';
        records.forEach(r => {
            csv += `${r.date},"${r.studentName}","${r.class}",${r.status},"${r.note || ''}"\n`;
        });
    } else {
        csv = 'Date,Name,Status,Note\n';
        records.forEach(r => {
            csv += `${r.date},"${r.teacherName}",${r.status},"${r.note || ''}"\n`;
        });
    }

    downloadFile(csv, `${logType}_attendance_${todayStr()}.csv`, 'text/csv');
    showToast('CSV exported');
}

// ===================== DASHBOARD =====================
function updateDashboard() {
    const students = getStudents();
    const teachers = getTeachers();
    const today = todayStr();
    const studentRecords = getData(STORE_KEYS.studentAttendance).filter(r => r.date === today);
    const teacherRecords = getData(STORE_KEYS.teacherAttendance).filter(r => r.date === today);
    const complaints = getComplaints().filter(c => c.status !== 'resolved');

    document.getElementById('statTotalStudents').textContent = students.length;
    document.getElementById('statTotalTeachers').textContent = teachers.length;
    document.getElementById('statPresentToday').textContent = studentRecords.filter(r => r.status === 'present' || r.status === 'late').length;
    document.getElementById('statAbsentToday').textContent = studentRecords.filter(r => r.status === 'absent').length;
    document.getElementById('statTeachersPresentToday').textContent = teacherRecords.filter(r => r.status === 'present' || r.status === 'late').length;
    document.getElementById('statComplaints').textContent = complaints.length;

    // Recent activity
    const activities = getData(STORE_KEYS.activity);
    const activityList = document.getElementById('recentActivity');
    if (activities.length === 0) {
        activityList.innerHTML = '<li>No recent activity</li>';
    } else {
        activityList.innerHTML = activities.slice(0, 10).map(a =>
            `<li><span class="activity-time">${a.time}</span> ${escHtml(a.text)}</li>`
        ).join('');
    }

    // Classes overview
    const classes = getClasses();
    const overview = document.getElementById('classesOverview');
    if (classes.length === 0) {
        overview.innerHTML = '<p>No classes set up yet. Go to Settings to add classes.</p>';
    } else {
        overview.innerHTML = classes.map(c => {
            const count = students.filter(s => s.class === c).length;
            return `<span class="class-badge">${c} (${count})</span>`;
        }).join('');
    }

    // Update admin name
    const settings = getSettings();
    if (settings.adminName) {
        document.getElementById('adminName').textContent = settings.adminName;
    }
}

// ===================== SETTINGS =====================
function loadSettings() {
    const settings = getSettings();
    document.getElementById('settSchoolName').value = settings.schoolName || '';
    document.getElementById('settAdminName').value = settings.adminName || '';
    document.getElementById('settAdminEmail').value = settings.adminEmail || '';
    renderClassesList();

    if (settings.schoolName) {
        document.title = settings.schoolName + ' - SchoolTrack';
    }
}

function saveSettings() {
    const settings = {
        schoolName: document.getElementById('settSchoolName').value.trim(),
        adminName: document.getElementById('settAdminName').value.trim(),
        adminEmail: document.getElementById('settAdminEmail').value.trim(),
    };
    setData(STORE_KEYS.settings, settings);

    if (settings.schoolName) {
        document.title = settings.schoolName + ' - SchoolTrack';
    }
    if (settings.adminName) {
        document.getElementById('adminName').textContent = settings.adminName;
    }

    addActivity('Updated settings');
    showToast('Settings saved');
}

// ===================== DATA MANAGEMENT =====================
function exportAllData() {
    const data = {};
    Object.entries(STORE_KEYS).forEach(([key, storeKey]) => {
        const raw = localStorage.getItem(storeKey);
        if (raw) data[key] = JSON.parse(raw);
    });

    const json = JSON.stringify(data, null, 2);
    downloadFile(json, `schooltrack_backup_${todayStr()}.json`, 'application/json');
    showToast('Data exported');
}

function importAllData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!confirm('This will replace ALL current data. Are you sure?')) return;

            Object.entries(STORE_KEYS).forEach(([key, storeKey]) => {
                if (data[key] !== undefined) {
                    localStorage.setItem(storeKey, JSON.stringify(data[key]));
                }
            });

            addActivity('Imported data from backup');
            showToast('Data imported successfully');
            location.reload();
        } catch {
            showToast('Invalid file format', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function confirmClearAll() {
    if (!confirm('Are you sure you want to delete ALL data? This cannot be undone!')) return;
    if (!confirm('FINAL WARNING: All students, teachers, attendance records, and complaints will be permanently deleted. Continue?')) return;

    Object.values(STORE_KEYS).forEach(key => localStorage.removeItem(key));
    showToast('All data cleared');
    location.reload();
}

// ===================== UTILITIES =====================
function escHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// ===================== TEACHER SIGN-IN =====================
function loadTeacherSigninPortal() {
    const teachers = getTeachers();
    const select = document.getElementById('signinTeacherSelect');
    if (!select) return;

    select.innerHTML = '<option value="">Select your name...</option>' +
        teachers.map(t => `<option value="${t.id}">${escHtml(t.name)}</option>`).join('');

    renderTodaySignins();
}

function teacherSignin() {
    const teacherId = document.getElementById('signinTeacherSelect').value;
    const timeInput = document.getElementById('signinTime').value;

    if (!teacherId) return showToast('Please select your name', 'error');
    if (!timeInput) return showToast('Please select time', 'error');

    const teacher = getTeachers().find(t => t.id === teacherId);
    if (!teacher) return showToast('Teacher not found', 'error');

    const date = todayStr();
    const signins = getData(STORE_KEYS.teacherSignins);

    // Check if already signed in today
    const existingIndex = signins.findIndex(s => s.teacherId === teacherId && s.date === date);
    if (existingIndex >= 0) {
        if (!confirm('You have already signed in today. Update sign-in time?')) return;
        signins[existingIndex].time = timeInput;
        signins[existingIndex].timestamp = new Date().toISOString();
    } else {
        signins.push({
            id: generateId(),
            teacherId,
            teacherName: teacher.name,
            date,
            time: timeInput,
            timestamp: new Date().toISOString(),
        });
    }

    setData(STORE_KEYS.teacherSignins, signins);
    addActivity(`${teacher.name} signed in at ${timeInput}`);
    showToast(`Welcome ${teacher.name}! Signed in at ${timeInput}`);

    document.getElementById('signinTeacherSelect').value = '';
    renderTodaySignins();
}

function renderTodaySignins() {
    const date = todayStr();
    const signins = getData(STORE_KEYS.teacherSignins).filter(s => s.date === date);
    const tbody = document.getElementById('todaySigninsBody');
    if (!tbody) return;

    if (signins.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="empty-state">No sign-ins yet today</td></tr>';
        return;
    }

    signins.sort((a, b) => a.time.localeCompare(b.time));
    tbody.innerHTML = signins.map((s, i) => `
        <tr>
            <td>${i + 1}</td>
            <td><strong>${escHtml(s.teacherName)}</strong></td>
            <td>${s.time}</td>
        </tr>
    `).join('');
}

// ===================== REPORTS =====================
function openStudentReport(studentId) {
    const student = getStudents().find(s => s.id === studentId);
    if (!student) return;

    const attendance = getData(STORE_KEYS.studentAttendance).filter(a => a.studentId === studentId);
    const present = attendance.filter(a => a.status === 'present').length;
    const absent = attendance.filter(a => a.status === 'absent').length;
    const late = attendance.filter(a => a.status === 'late').length;
    const total = attendance.length;
    const percentage = total > 0 ? ((present / total) * 100).toFixed(1) : 0;

    const modalHtml = `
        <div class="modal-overlay show" id="studentReportModal" onclick="if(event.target===this) this.classList.remove('show')">
            <div class="modal" style="max-width: 600px;">
                <div class="modal-header">
                    <h2>Student Report: ${escHtml(student.name)}</h2>
                    <button class="modal-close" onclick="document.getElementById('studentReportModal').remove()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="report-grid">
                        <div class="report-item">
                            <strong>Class:</strong> ${escHtml(student.class)}
                        </div>
                        <div class="report-item">
                            <strong>Schedule:</strong> ${student.schedule || 'N/A'}
                        </div>
                        <div class="report-item">
                            <strong>Email:</strong> ${escHtml(student.email || 'N/A')}
                        </div>
                        <div class="report-item">
                            <strong>Country:</strong> ${escHtml(student.country || 'N/A')}
                        </div>
                    </div>
                    <h3 style="margin-top: 20px;">Attendance Summary</h3>
                    <div class="stats-grid" style="grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 20px 0;">
                        <div class="stat-card stat-green">
                            <h3>${present}</h3>
                            <p>Present</p>
                        </div>
                        <div class="stat-card stat-red">
                            <h3>${absent}</h3>
                            <p>Absent</p>
                        </div>
                        <div class="stat-card stat-orange">
                            <h3>${late}</h3>
                            <p>Late</p>
                        </div>
                        <div class="stat-card stat-blue">
                            <h3>${percentage}%</h3>
                            <p>Attendance Rate</p>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percentage}%; background: var(--primary-green);"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function openTeacherReport(teacherId) {
    const teacher = getTeachers().find(t => t.id === teacherId);
    if (!teacher) return;

    const signins = getData(STORE_KEYS.teacherSignins).filter(s => s.teacherId === teacherId);
    const uniqueDates = new Set(signins.map(s => s.date)).size;
    const thisMonth = new Date().toISOString().slice(0, 7);
    const thisMonthSignins = signins.filter(s => s.date.startsWith(thisMonth)).length;

    const modalHtml = `
        <div class="modal-overlay show" id="teacherReportModal" onclick="if(event.target===this) this.classList.remove('show')">
            <div class="modal" style="max-width: 600px;">
                <div class="modal-header">
                    <h2>Teacher Report: ${escHtml(teacher.name)}</h2>
                    <button class="modal-close" onclick="document.getElementById('teacherReportModal').remove()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="report-grid">
                        <div class="report-item">
                            <strong>Subject:</strong> ${escHtml(teacher.subject || 'N/A')}
                        </div>
                        <div class="report-item">
                            <strong>Classes:</strong> ${escHtml(teacher.classes || 'N/A')}
                        </div>
                        <div class="report-item">
                            <strong>Email:</strong> ${escHtml(teacher.email || 'N/A')}
                        </div>
                        <div class="report-item">
                            <strong>Phone:</strong> ${escHtml(teacher.phone || 'N/A')}
                        </div>
                    </div>
                    <h3 style="margin-top: 20px;">Sign-In Summary</h3>
                    <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0;">
                        <div class="stat-card stat-blue">
                            <h3>${signins.length}</h3>
                            <p>Total Sign-Ins</p>
                        </div>
                        <div class="stat-card stat-green">
                            <h3>${uniqueDates}</h3>
                            <p>Unique Days</p>
                        </div>
                        <div class="stat-card stat-purple">
                            <h3>${thisMonthSignins}</h3>
                            <p>This Month</p>
                        </div>
                    </div>
                    <h4>Recent Sign-Ins:</h4>
                    <div style="max-height: 200px; overflow-y: auto;">
                        ${signins.slice(-10).reverse().map(s => `
                            <div style="padding: 8px; border-bottom: 1px solid #eee;">
                                <strong>${s.date}</strong> at ${s.time}
                            </div>
                        `).join('') || '<p class="empty-state">No sign-ins yet</p>'}
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function loadReportsPage() {
    const students = getStudents();
    const teachers = getTeachers();

    // Populate student dropdown
    const studentSelect = document.getElementById('reportStudentSelect');
    if (studentSelect) {
        studentSelect.innerHTML = '<option value="">Select a student...</option>' +
            students.map(s => `<option value="${s.id}">${escHtml(s.name)} (${s.class})</option>`).join('');
    }

    // Populate teacher dropdown
    const teacherSelect = document.getElementById('reportTeacherSelect');
    if (teacherSelect) {
        teacherSelect.innerHTML = '<option value="">Select a teacher...</option>' +
            teachers.map(t => `<option value="${t.id}">${escHtml(t.name)}</option>`).join('');
    }

    // Update school summary
    const classes = getClasses();
    const attendance = getData(STORE_KEYS.studentAttendance);
    const present = attendance.filter(a => a.status === 'present').length;
    const total = attendance.length;
    const rate = total > 0 ? ((present / total) * 100).toFixed(1) : 0;

    document.getElementById('summaryTotalStudents').textContent = students.length;
    document.getElementById('summaryTotalTeachers').textContent = teachers.length;
    document.getElementById('summaryTotalClasses').textContent = classes.length;
    document.getElementById('summaryAttendanceRate').textContent = rate + '%';
}

// ===================== GOOGLE DRIVE INTEGRATION =====================
let googleAuth = null;
let googleDriveToken = null;

function initGoogleDrive() {
    // Load Google API
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
        gapi.load('client:auth2', () => {
            // Note: User needs to provide their own Client ID
            const CLIENT_ID = document.getElementById('googleClientId')?.value || '';
            if (!CLIENT_ID) {
                showToast('Please enter Google Client ID in Settings', 'error');
                return;
            }

            gapi.client.init({
                clientId: CLIENT_ID,
                discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
                scope: 'https://www.googleapis.com/auth/spreadsheets',
            }).then(() => {
                googleAuth = gapi.auth2.getAuthInstance();
                showToast('Google Drive ready');
            }).catch(err => {
                showToast('Google Drive init failed: ' + err.message, 'error');
            });
        });
    };
    document.head.appendChild(script);
}

function connectGoogleDrive() {
    if (!googleAuth) {
        initGoogleDrive();
        return;
    }

    googleAuth.signIn().then(() => {
        googleDriveToken = googleAuth.currentUser.get().getAuthResponse().access_token;
        showToast('Connected to Google Drive!');
        document.getElementById('googleDriveStatus').textContent = 'Connected';
        document.getElementById('googleDriveStatus').style.color = 'var(--primary-green)';
    }).catch(err => {
        showToast('Google sign-in failed: ' + err.error, 'error');
    });
}

function syncToGoogleSheets() {
    if (!googleDriveToken) {
        showToast('Please connect to Google Drive first', 'error');
        return;
    }

    const students = getStudents();
    const teachers = getTeachers();
    const attendance = getData(STORE_KEYS.studentAttendance);

    // Create spreadsheet data
    const sheetData = {
        properties: { title: `SchoolTrack Export - ${todayStr()}` },
        sheets: [
            {
                properties: { title: 'Students' },
                data: [{
                    rowData: [
                        { values: [{userEnteredValue: {stringValue: 'Name'}}, {userEnteredValue: {stringValue: 'Class'}}, {userEnteredValue: {stringValue: 'Schedule'}}, {userEnteredValue: {stringValue: 'Email'}}, {userEnteredValue: {stringValue: 'Country'}}] },
                        ...students.map(s => ({
                            values: [
                                {userEnteredValue: {stringValue: s.name}},
                                {userEnteredValue: {stringValue: s.class}},
                                {userEnteredValue: {numberValue: s.schedule}},
                                {userEnteredValue: {stringValue: s.email || ''}},
                                {userEnteredValue: {stringValue: s.country || ''}}
                            ]
                        }))
                    ]
                }]
            },
            {
                properties: { title: 'Teachers' },
                data: [{
                    rowData: [
                        { values: [{userEnteredValue: {stringValue: 'Name'}}, {userEnteredValue: {stringValue: 'Subject'}}, {userEnteredValue: {stringValue: 'Classes'}}] },
                        ...teachers.map(t => ({
                            values: [
                                {userEnteredValue: {stringValue: t.name}},
                                {userEnteredValue: {stringValue: t.subject || ''}},
                                {userEnteredValue: {stringValue: t.classes || ''}}
                            ]
                        }))
                    ]
                }]
            }
        ]
    };

    fetch('https://sheets.googleapis.com/v4/spreadsheets', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + googleDriveToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData)
    })
    .then(res => res.json())
    .then(data => {
        if (data.spreadsheetId) {
            const url = `https://docs.google.com/spreadsheets/d/${data.spreadsheetId}`;
            showToast('Synced to Google Sheets!');
            window.open(url, '_blank');
        } else {
            showToast('Sync failed', 'error');
        }
    })
    .catch(err => {
        showToast('Sync error: ' + err.message, 'error');
    });
}
