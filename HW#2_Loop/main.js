let firstNumber = +prompt('Введіть перше число:');
while (Number.isNaN(firstNumber) ){
    firstNumber = +prompt('Введіть ціле перше число:');
}
let lastNumber = +prompt('Введіть друге число:');


while (Number.isNaN(lastNumber) ){
    lastNumber = +prompt('Введіть ціле друге число:');
}
const skipEven = confirm ('Потрібно пропускати парні числа?');


let ResultSum = 0;
for(let i = firstNumber; i <= lastNumber; i++){
    if (skipEven === true && i%2 === 0 ) continue;
        ResultSum += i;
    }
console.log('Сума чисел = ' + ResultSum);



