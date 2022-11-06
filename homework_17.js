"use strict";

let arr = [

    { name: "User1", age: 25},
    { name: "User2", age: 30},
    { name: "User3", age: 28 },
    
];

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age)
};

sortByAge(arr);

console.log(arr);