"use strict";

const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;

console.log(user);