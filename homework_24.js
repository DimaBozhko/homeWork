"use strict";

const question = ["Введыть ваш рік народження", "Введіть ваше місто", "Введіть ваш улюблений вид спорту"];
const answers = [];
const sports = ["бокс", "футбол", "теніс"];
const champions = ["Майк Тайсон", "Ліонель Мессі", "Роджер Федерер"]


const askQuastions = () => {

    for (let i = 0; i < question.length; i++ ) { 
        answers[i] = prompt(question[i]);
    }
    
}

askQuastions();

const showAnswers = () => {

    const copyAnswers = answers.map((item) => {
        if (item != null || item != undefined) {
            return item.toLowerCase();
        } else {
            return item;
        }
    })

    let answer = "\n";
        
    if (answers[0] == undefined || answers[0] == null) {
        answer = `${answer} Шкода, що ви не захотіли вказати свій вік \n`
        console.log(typeof(answers[0]));
    } else { 
        answer = `${answer} Ваш вік - ${new Date().getFullYear() - answers[0]}\n`
    };


    if (copyAnswers[1] === "київ" || copyAnswers[1] === "вашингтон" || copyAnswers[1] === "лондон") {
        answer = `${answer} Ти живеш в столиці - ${copyAnswers[1][0].toUpperCase() + copyAnswers[1].slice(1)}\n`
    } else if (copyAnswers[1] == undefined || copyAnswers[1] == null) {
        answer = `${answer} Шкода, що ви не захотіли вказати своє місто \n`
    } else {
        answer = `${answer} Ти живеш в місті - ${answers[1][0].toUpperCase() + answers[1].slice(1)}\n`
    };

    if (copyAnswers[2] === "бокс" || copyAnswers[2] === "футбол" || copyAnswers[2] === "теніс") {
        for (let i = 0; i < sports.length; i++) {
            if (copyAnswers[2] === sports[i]) {
                answer = ` ${answer} Круто! Хочеш стати як ${champions[i]}? \n`
                break;
            }
        } 
    } else if (copyAnswers[2] == undefined || copyAnswers[2] == null) {
        answer = `${answer} Шкода, що ви не захотіли вказати свій улюблений вид спорту \n`
    } else {
        answer = `${answer} Твій улюблений вид спорту - ${copyAnswers[2][0].toUpperCase() + copyAnswers[2].slice(1)} \n`
    }
    
    
    alert(answer);
}

showAnswers();



