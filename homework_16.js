"use strict";

let menu = {

    width: 200,
    height: 300,
    title: "My menu"

};

function multiplyNumeric(obj) {
    
    let objKeys = Object.keys(obj);

    for(let i = 0; i < objKeys.length; i += 1) {
        if (typeof(obj[objKeys[i]]) == 'number') {
            obj[objKeys[i]] = obj[objKeys[i]] * 2;
        }
    }

    console.log(menu);
    
}

multiplyNumeric(menu);