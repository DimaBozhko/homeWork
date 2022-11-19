"use strict";

const getData = async (url) => {

    await fetch(url)
        .then((data) => data.json())
        .then((data) => data.map(item => Object.fromEntries(Object.entries(item).filter(([key]) => key.includes('userId')))))
        .then((data) => console.log(data))

}

getData("https://jsonplaceholder.typicode.com/posts");


