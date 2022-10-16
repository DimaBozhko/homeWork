"use strict";

const userMessage = prompt("Введіть ваше повідомлення");
const isText = userMessage.includes("free");
console.log(isText);