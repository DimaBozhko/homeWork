"use strict";

class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {

    constructor(name) {
        super(name);
        this.created = Date.now();
    }
    
}

let rabbit = new Rabbit("White rabbit");

console.log(rabbit.name);


