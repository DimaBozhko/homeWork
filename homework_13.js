"use strict";

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(userArr) {
    let copyArr = userArr.slice();
    return copyArr.sort();
}

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);