"use strict";

const userName = prompt("Введіть ваше ім'я");
const changeUserName = `${userName[0].toLocaleLowerCase()}${userName.slice(1)}`;
console.log(changeUserName);
