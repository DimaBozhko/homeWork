"use strict";
// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

const increasingNumber = (a, b) => {

    let number = [];
    for(let i = a; i <= b; i += 0.5) {
        number.push(i);
    }
    
    console.log(number.join(" "))
}

increasingNumber(20, 30)

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const changUahToUsd = (startIndex, endIndex, step, usdValue, ) => {

    let sum = [];

    for (let i = startIndex; i <= endIndex; i += step) {

        if (i + step > endIndex) {
            sum.push(`${endIndex} доларів коштують ${endIndex * usdValue} гривень \n`)
            break;             
        } else {
            sum.push(`${i} доларів коштують ${i * usdValue} гривень \n`) 
        }
    }

    console.log(sum.join(""))
}

changUahToUsd(10, 100, 10, 27);

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const showSquaresOfNumber  = (startIndex, endIndex, n) => {

    let result = [];

    for (let i = startIndex; i <= endIndex; i++) {
        if((i * i) < n) {
            result.push(i)
        }
    }

    console.log(result.join(", "))
}

showSquaresOfNumber(1, 100, 550);

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const showInteger = (num) => {

    let isPrime = true;

    for(let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(`Число ${num} не є простим`)
            isPrime = false;
            break
        } 
    }

    if (isPrime) {
        console.log(`Число ${num} є простим`)  
    }
}

showInteger(115);

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий степінь. 
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const exponentiation = (num) => {

    let isNum = false;

    for (let i = 1; i <= num; i++) {

        if (Math.pow(3, i) == num) {
            isNum = true;
            console.log(`Число ${num} можна отримати шляком зведення числа 3 у степінь ${i}`  );
            break
        }
    }

    if(isNum != true) {
        console.log(`Число ${num} не можна отримати шляхом зведення 3 у степінь`);
    }

}

exponentiation(9);
exponentiation(81);
exponentiation(13);

