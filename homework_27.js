"use strict";

// Створіть функцію unique(arr), яка поверне масив унікальних значень масиву arr, що не повторюються.

function unique(arr) {
    const filteredArr = arr.filter((item, index) => arr.indexOf(item) === index);
    return filteredArr;
}
   
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
   
console.log( unique(values) ); // Hare, Krishna, :-O