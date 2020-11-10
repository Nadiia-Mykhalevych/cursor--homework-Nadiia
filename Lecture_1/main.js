// BASE
let pencil = 15.678;
let book = 123.965;
let notebook = 90.2345;

let maxNumber = Math.max(pencil, book, notebook);
console.log('Максимальне число: ' + maxNumber);
let minNumber = Math.min(pencil, book, notebook);
console.log('Мінімальне число: ' +minNumber );

let sumPrice = pencil + book + notebook;
console.log('Вартість всіх товарів: ' + sumPrice +' грн');

let pencilInt = Math.floor(pencil);
let bookInt = Math.floor(book);
let notebookInt = Math.floor(notebook);
let sumPriceInt = pencilInt + bookInt + notebookInt;
let oddSumPrice =  Math.ceil(sumPriceInt/100) * 100;
console.log('Округлена сума товарів: ' + oddSumPrice);

let odd = sumPriceInt % 2;
console.log('Чи є сума всіх товарів парним числом: '+!!odd);

let restOf500 = (500-sumPrice).toFixed(2);
console.log('Решта з 500 грн: ' + restOf500 +' грн');

let averange = (sumPrice/3).toFixed(2);
console.log('Середнє значення цін: '+ averange +' грн');

let discount = Math.random();
let sumWithDiscount = Math.floor(100*discount);
console.log('Знижка:'+ sumWithDiscount +'%');

let sumToPay = ((1-discount)*sumPrice ).toFixed(2);
console.log('Сума до оплати: '+ sumToPay +' грн');

let profit = ((sumPrice/2)-discount*sumPrice).toFixed(2);
console.log('Чистий прибуток: ' + profit +' грн');


//ADVANSED
console.log(`Максимальне число: ${maxNumber}
Мінімальне число: ${minNumber}
Вартість всіх товарів: ${sumPrice} грн
Округлена сума товарів: ${oddSumPrice} грн
Чи є сума всіх товарів парним числом: ${!!odd}
Решта з 500 грн: ${restOf500} грн
Середнє значення цін: ${averange} 
Знижка: ${sumWithDiscount} %
Сума до оплати: ${sumToPay} грн
Чистий прибуток: ${profit} грн
`)