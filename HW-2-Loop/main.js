let firstNumber = +prompt('Введіть перше число:');
while (!Number.isInteger(firstNumber)) {
    firstNumber = +prompt('Введіть ціле перше число:');
}

let lastNumber = +prompt('Введіть друге число:');
while (!Number.isInteger(lastNumber)) {
    lastNumber = +prompt('Введіть ціле друге число:');
}
while (lastNumber < firstNumber) {
    lastNumber = +prompt('Друге число не може бути меншим за перше:');
}

const skipEven = confirm ('Потрібно пропускати парні числа?');

let ResultSum = 0;
for(let i = firstNumber; i <= lastNumber; i++) {
    if (skipEven && i%2 === 0) continue;
    ResultSum += i;
}
console.log('Сума чисел = ' + ResultSum);



