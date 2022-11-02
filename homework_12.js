"use strict";

let arr = [5, 2, 1, -10, 8];

function sortArr(userArr) {
    return userArr.sort((a, b) => b - a)
};

sortArr(arr);
console.log(arr);