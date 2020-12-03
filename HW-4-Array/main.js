const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairedStudents() {
    return [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]];
}
console.log(getPairedStudents());

function assignThemes() {
    const studentsWithThemes = [];
    const pairedStudents = getPairedStudents();
    for (let i = 0; i < pairedStudents.length; i++) {
        studentsWithThemes.push([pairedStudents[i].join(" і "), themes[i]])
    }
    return studentsWithThemes;
}
console.log(assignThemes());

function studentsMarks() {
    const studentsWithMarks = [];
    for (let i = 0; i < students.length; i++) {
        studentsWithMarks.push([students[i], marks[i]])
    }
    return studentsWithMarks;
}
console.log(studentsMarks());

function studentsThemesMarks() {
    const studentsWithThemesMark = [];
    for (let student of assignThemes()) {
        student.push(marks[getRandomPositionInArray()]);
        studentsWithThemesMark.push(student);
    }
    return studentsWithThemesMark;
}
console.log(studentsThemesMarks());

function getRandomPositionInArray() {
    return Math.floor(Math.random() * marks.length);
}
