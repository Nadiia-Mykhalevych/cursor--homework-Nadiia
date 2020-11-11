// BASE
const pencilPrice = 15.678;
const bookPrice = 123.965;
const notebookPrice = 90.2345;

const maxNumber = Math.max(pencilPrice, bookPrice, notebookPrice);
console.log('Максимальне число: ' + maxNumber);
const minNumber = Math.min(pencilPrice, bookPrice, notebookPrice);
console.log('Мінімальне число: ' + minNumber );

const sumPrice = pencilPrice + bookPrice + notebookPrice;
console.log('Вартість всіх товарів: ' + sumPrice + ' грн');

const roundedTotalSum =  Math.floor(pencilPrice) + Math.floor(bookPrice) + Math.floor(notebookPrice);
const roundedSumPrice =  Math.round(roundedTotalSum/100) * 100;
console.log('Округлена сума товарів: ' + roundedSumPrice);

const isEven = roundedTotalSum % 2 === 0;
console.log('Чи є сума всіх товарів парним числом: ' + isEven);

const userCash = 500;
const restOfUserCash = +(userCash-sumPrice).toFixed(2);
console.log('Решта з 500 грн: ' + restOfUserCash + ' грн');

const average = +(sumPrice / 3).toFixed(2);
console.log('Середнє значення цін: ' + average + ' грн');

const maxDiscount = 100;
const minDiscount = 0;
const percentageCalcNumber = 100;
const discount = Math.floor(Math.random() * (maxDiscount - minDiscount + 1)) + minDiscount;
console.log('Знижка:' + discount + '%');

const sumToPay = +((percentageCalcNumber - discount) * sumPrice/percentageCalcNumber).toFixed(2);
console.log('Сума до оплати: ' + sumToPay + ' грн');

const profit = +((sumPrice/2) - sumToPay * discount/percentageCalcNumber).toFixed(2);
console.log('Чистий прибуток: ' + profit + ' грн');


//ADVANCED
console.log(`Максимальне число: ${maxNumber}
Мінімальне число: ${minNumber}
Вартість всіх товарів: ${sumPrice} грн
Округлена сума товарів: ${roundedSumPrice} грн
Чи є сума всіх товарів парним числом: ${isEven}
Решта з 500 грн: ${restOfUserCash} грн
Середнє значення цін: ${average} 
Знижка: ${discount}%
Сума до оплати: ${sumToPay} грн
Чистий прибуток: ${profit} грн`);