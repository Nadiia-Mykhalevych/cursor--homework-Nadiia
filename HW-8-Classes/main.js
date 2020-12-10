class Student {
    marks;
    #isDismiss;
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [4,5,5,4];
    }

    getInfo() {
        return `Студент ${this.course}-го курсу, ${this.university}, ${this.fullName}`;
    }
    get getMarks(){
        if (this.#isDismiss) {
            return null;
        } else {
            return this.marks;
        }
    }
    set setMark(mark) {
        if (!this.#isDismiss){
            this.marks.push(mark);
        }
    }
    getAverage() {
        return this.marks.reduce((a, b) => a + b) / this.marks.length;
    }
    dismiss() {
        this.#isDismiss = true;
    }
    recovery() {
        this.#isDismiss = false;
    }
}

const pivovarov = new Student("ПНУ ім. Стефаника", 2, "Artem Pivovarov");
console.log(pivovarov.getInfo());
pivovarov.setMark = 5;
console.log(pivovarov.getMarks);
console.log(pivovarov.getAverage());
pivovarov.dismiss();
console.log("dismiss student. Get marks: " + pivovarov.getMarks);
pivovarov.recovery();
console.log("recover student. Get marks: " + pivovarov.getMarks);

const scholarshipAmount = 1400;
class BudgetStudent extends Student {
    constructor (university, course, fullName) {
        super(university, course, fullName);
        setInterval(this.getScholarship, 3000);
    }

    getScholarship() {
        if (this.getAverage >= 4) {
            return console.log(`Ви отримали ${scholarshipAmount} грн. стипендії.`);
        }
    }
}

const pivovarovBudget = new BudgetStudent("ПНУ ім. Стефаника", 2, "Artem Pivovarov");


