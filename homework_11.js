"use strict";

let arr = [5, 3, 8, 1];

function filterArr(arr, a, b) {
    let newArr = [];
    for (const item of arr) {
        if (item >= a && item < b) {
            newArr.push(item)
        }
    };
    return newArr;
}

console.log(filterArr(arr, 1, 4));
console.log(arr);
