function  getMaxDigit(number) {
    const arrayOfDigits = Array.from(String(number), Number);
    return Math.max(...arrayOfDigits);
}

function getNumberPow(number, pow) {
    let result = 1;
    for (let i = 1; i <= pow; i++) {
        result = result * number;
    }
    return result;
}

function getNameInCorrectForm(name) {
    const firstLetter = name[0].toUpperCase();
    let nameEnd = name.slice(1, name.length);
    nameEnd = nameEnd.toLowerCase();
    return firstLetter + nameEnd;
}

function SalaryWithoutTax(salaryWithTax, percentOfTax) {
    return (salaryWithTax * ((100 - percentOfTax) / 100));
}

function getRandomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function countLetter(letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if(word[i].toUpperCase() === letter.toUpperCase()) {
            count += 1;
        }
    }
    return count;
}

function deleteLetters(letter, sentence) {
    let  sentenceWithoutLetters = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== letter.toUpperCase() && sentence[i] !== letter.toLowerCase()) {
            sentenceWithoutLetters = sentenceWithoutLetters + sentence[i];
        }
    }
    return sentenceWithoutLetters;
}

console.log(`Функція №1: ${getMaxDigit(3599856968234)}`);
console.log(`Функція №2: ${getNumberPow(3,3)}`);
console.log(`Функція №3: ${getNameInCorrectForm("NadiA")}`);
console.log(`Функція №4: ${SalaryWithoutTax(1000,19.5)}`);
console.log(`Функція №5: ${getRandomNumber(1,55)}`);
console.log(`Функція №6: ${countLetter('а','Асталавіста')}`);
console.log(`Функція №7: ${deleteLetters('e','I want to remove letter from this sentence')}`);
