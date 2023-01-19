"use strict";
// Вивести на сторінку в один рядок через кому числа від 10 до 20.

let number = [];

for (let i = 0; i <= 10; i++) {
    number[i] = i + 10  
}

console.log(number.join(", "));

// Вивести квадрати чисел від 10 до 20.


for (let i of number) {
    console.log(Math.pow(i, 2))
}

// Вивести таблицю множення на 7.

let multiplyResult = [];

const multiply = (a) => {
    for (let i = 1; i <= 10; i++) {
        multiplyResult.push(a * i)
    }
    console.log(multiplyResult.join(", "))
}

multiply(7);

// Знайти суму всіх цілих чисел від 1 до 15.

const sumNumbers = (num) => {
    
    let sum = [];
    for (let i = 0; i <= num; i++) {
        sum[i] = i
    };
    console.log(sum.reduce((a, b) => {
        return a + b;
    }));

}

sumNumbers(15);

// Знайти добуток усіх цілих чисел від 15 до 35.

const multiplyNumbers = (startNum, endNum) => {
    let mult = startNum;

    for (let i = startNum; i <= endNum; i++) {
        mult = mult * i;
    }
    
    console.log(mult)
}

multiplyNumbers(15, 35)


// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

const arithmeticMean = (startNum, endNum) => {
    
    let sum = [];

    for (let i = startNum; i <= endNum; i++) {
        sum[i] = i
    };
    let result = sum.reduce((a, b) => {
        return a + b;
    });

    console.log(result / sum.length)

}

arithmeticMean(1, 500);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.

const showEvenNumbers = (startNum, endNum) => {
    
    let result = [];

    for (let i = startNum; i <= endNum; i++) {
        if(i % 2 == 0) {
            result.push(i)
 
        }
    };

    console.log(result.reduce((a, b) => {
        return a + b;
    }));

}

showEvenNumbers(30, 80);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
const showDivisibleNumbersOfThree  = (startNum, endNum) => {
    
    let result = [];

    for (let i = startNum; i <= endNum; i++) {
        if(i % 3 == 0) {
            result.push(i)
        }
    };

    console.log(result.join(", "));
}

showDivisibleNumbersOfThree(100, 200);
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const showDividersOfNumber  = (mainNum) => {
    
    let result = [];

    for (let i = 0; i <= mainNum; i++) {
        if(mainNum % i == 0) {
            result.push(i)
        }
    };

    console.log(result.join(", "));
    
}

showDividersOfNumber(5500);


// Визначити кількість його парних дільників.
const showPairDividersOfNumber = (mainNum) => {
    let dividers = [];
    let result = [];

    for (let i = 0; i <= mainNum; i++) {
        if(mainNum % i == 0) {
            dividers.push(i)
        }
    };

    for (let i = 0; i <= dividers.length; i++) {
        if(dividers[i] % 2 == 0) {
            result.push(dividers[i])
        } 
    };

    if (result.length > 0) {
        console.log(result.join(", "));
    } else {
        console.log("парні дільники відсутні")
    }

}

showPairDividersOfNumber(112);

// Знайти суму його парних дільників.
const showSumOfPairDividers = (mainNum) => {
    let dividers = [];
    let result = [];

    for (let i = 0; i <= mainNum; i++) {
        if(mainNum % i == 0) {
            dividers.push(i)
        }
    };

    for (let i = 0; i <= dividers.length; i++) {
        if(dividers[i] % 2 == 0) {
            result.push(dividers[i])
        } 
    };

    if (result.length > 0) {
        console.log(result.reduce((a, b) => {
            return a + b;
        }));
    } else {
        console.log("парні дільники відсутні")
    }

}

showSumOfPairDividers(112);
// Надрукувати повну таблицю множення від 1 до 10.

let oneRow = '';
function multiply() {
	for (let i = 1; i <= 10; i++) {
		for (let j = 1; j <= 10; j++) {
			oneRow  +=  `${j*i} `;       
		}
    console.log(oneRow);
		oneRow = '';
	} 

}

multiply();