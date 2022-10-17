"use strict"

let userMessage = prompt("Введіть ваше повідомлення (не менше 10 символів)");
    
for (let i = 0; i < 1; i++) {
    if (userMessage == null || userMessage == undefined || userMessage == "" || userMessage == " " || userMessage.length < 10) {
        alert("Ви ввели повідомлення менше 10 символів")
        userMessage = prompt("Введіть ваше повідомлення (не менше 10 символів)");
        i = -1;
    } else {
        console.log(`${userMessage.slice(0, 5)}`)
        console.log(`${userMessage.slice(userMessage.length - 5, userMessage.length)}`)
    }
}


