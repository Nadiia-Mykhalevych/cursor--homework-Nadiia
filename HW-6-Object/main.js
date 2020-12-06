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
    return Object.keys(student.subjects).map((subjName) =>
        subjName[0].toUpperCase() + subjName.slice(1).toLowerCase().replace(/_/gi, " "));
}
console.log(getSubjects(students[0]));

function getAverageMark(student) {
    const marks = Object.values(student.subjects).flat(1);
    return +(marks.reduce((a, b) => a + b) / marks.length).toFixed(2);
}
console.log(getAverageMark(students[0]));

function getStudentInfo(student) {
    return {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    }
}
console.log(getStudentInfo(students[0]));

function getStudentsNames(students) {
    return students.map(student => student.name).sort();
}
console.log(getStudentsNames(students));

function getBestStudent(students) {
    return students.sort((a, b) => getAverageMark(a) - getAverageMark(b))
        .map(student => student.name)[students.length - 1];
}
console.log(getBestStudent(students));

function calculateWordLetters(word) {
    let result = {};
    let uniqueLetters = word.split("").filter(((value, index, array) => array.indexOf(value) === index));
    for (let i = 0; i < uniqueLetters.length; i++) {
        let param = uniqueLetters[i];
        result[param] = countLetter(uniqueLetters[i], word);
    }
    return result;
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