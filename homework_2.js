"use strict";

const userNumbers = prompt("Введіть два числа через кому").replace(/ /g,'').split(",");
const sum = +userNumbers[0] + +userNumbers[1];
alert(`Сума чисел ${sum}, тип даних ${typeof(sum)}`);