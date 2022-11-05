"use strict";

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let testSalaries = {};

let sum = function totalSalaries(obj) {

    let objValue = Object.values(obj);

    return objValue.length <= 0 ? sum = 0 : sum = objValue.reduce((a, b) => a + b);
    
};

console.log(sum(salaries));
