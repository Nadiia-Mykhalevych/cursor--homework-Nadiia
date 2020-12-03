const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

function getSubjects(student) {
    const subjects = Object.keys(student.subjects);
    let correctSubjects = [];
    for (let i = 0; i < subjects.length; i++) {
        let item = subjects[i].charAt(0).toUpperCase() + subjects[i].slice(1);
        correctSubjects.push(item.replace(/_/gi, " "));
    }
    return correctSubjects;
}
// console.log(getSubjects(students[0]));

function getAverageMark(student) {
    const marks = Object.values(student.subjects).flat(1);
    return +(marks.reduce((a, b) => a + b) / marks.length).toFixed(2);
}
// console.log(getAverageMark(students[0]));

function getStudentInfo(student) {
    return {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    }
}
// console.log(getStudentInfo(students[0]));

function getStudentsNames(students) {
    let studentsNames = [];
    for (let i = 0; i < students.length; i++) {
        studentsNames.push(students[i].name);
    }
    return studentsNames.sort();
}
// console.log(getStudentsNames(students));

function getBestStudent(students) {
    let result;
    for (let i = 0; i < students.length - 1; i++) {
        if (getAverageMark(students[i]) > students[i + 1]) {
            result = students[i].name;
        } else {
            result = students[i + 1].name;
        }
    }
    return result;
}
// console.log(getBestStudent(students));

function calculateWordLetters(word) {
    let result = {};
    let uniqueLetters = word.split("").filter(((value, index, array) => array.indexOf(value) === index));
    for (let i = 0; i < uniqueLetters.length; i++) {
        Object.assign(result, {
            `${uniqueLetters[i]}`: countLetter(uniqueLetters[i], word)
        })
    }
}
console.log(calculateWordLetters("тест"));

function countLetter(letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if(word[i].toUpperCase() === letter.toUpperCase()) {
            count += 1;
        }
    }
    return count;
}