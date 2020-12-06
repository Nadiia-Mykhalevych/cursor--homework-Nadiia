const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const lithuania = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return salary * this.tax;
}
console.log(getMyTaxes.call(ukraine, 1400));

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(latvia));

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(lithuania));

function getMySalary(country) {
    const salary = Math.round(getRandomNumber(1500, 2000));
    const taxes = Math.round(getMyTaxes.call(country, salary));
    return {
        salary: salary,
        taxes: taxes,
        profit: salary - taxes,
    };
}
console.log(getMySalary(ukraine));

function getRandomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}