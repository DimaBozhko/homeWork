"use strict";

function getData() {

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then((data) => data.map(item => Object.fromEntries(Object.entries(item).filter(([key]) => key.includes('userId')))))
        .then((data) => console.log(data))

}

getData();