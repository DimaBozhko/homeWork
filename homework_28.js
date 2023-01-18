"use strict";

// Ми хотіли б отримати масив ключів map.keys() в змінну і далі працювати з ними, наприклад застосувати метод .push.

let map = new Map();

map.set("name", "John");

let keys = [...map.keys()]; 

keys.push("more");

console.log(keys);