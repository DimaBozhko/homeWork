"use strict";

const userNumber = prompt("Введіть число")

if (userNumber > 0) {
    alert("1")
} else if (userNumber < 0) {
    alert("-1")
} else if (userNumber == 0) {
    alert("0")
} else {
    alert("Виникла помилка, спробуйте ще раз")
};