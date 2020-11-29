function getRandomArray(length, min, max) {
    const randomNumbersArr = [];
    for (let i = 0; i < length; i++) {
        randomNumbersArr.push(getRandomNumber(min, max));
    }
    return randomNumbersArr;
}
console.log('Get random array: ' + getRandomArray(5, 5, 9));

function getAverage(...numbers) {
    const onlyIntArr = getOnlyIntNumbers(numbers);
    return onlyIntArr.reduce((a, b) => a + b) / onlyIntArr.length;
}
console.log('Get average number of array: ' + getAverage(1, 2, 3, 4, 5.2));

function getMedian(...numbers) {
    const onlyIntArr = getOnlyIntNumbers(numbers).sort();
    if (onlyIntArr.length % 2 === 0) {
        return (onlyIntArr[(onlyIntArr.length / 2)] + onlyIntArr[(onlyIntArr.length / 2) - 1]) / 2;
    } else {
        return onlyIntArr[Math.round(onlyIntArr.length / 2) - 1]
    }
}
console.log('Get median of array: ' + getMedian(1, 4, 2, 3));

function filterEvenNumbers(...numbers) {
    return numbers.filter(n => n % 2 !== 0);
}
console.log('get only even numbers: ' + filterEvenNumbers(1, 2, 3, 4, 5));

function countPositiveNumbers(...numbers) {
    return numbers.filter(n => n > 0).length;
}
console.log('Count positive numbers in array: ' + countPositiveNumbers(2, -3, 0, 1));

function getDividedByFive(...numbers) {
    return numbers.filter(n => n % 5 === 0);
}
console.log('Get array  with numbers divided by 5: ' + getDividedByFive(1, 5, 10, 24, 25));


function getRandomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function getOnlyIntNumbers(numbers) {
    return numbers.filter(number => Number.isInteger(number) === true);
}