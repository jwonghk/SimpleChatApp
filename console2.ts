const http = require('http')
const fs = require('fs');
const port = 8080
const { replaceStr } = require('./utility.js')
const tooo = require('./tools');

let car = {
    driverName: "Macy",
    age: 20,
    over20: false,
    getName() {
        return this.driverName;
    },
    getAge() {
        console.log(this.getName() + " Current age is :" + this.age);
        console.log("printed here!!!!");
        return 3;
    },
    changeAge(age) {
        console.log(this.driverName + "'s age is " + age);
        this.age = age;
    }
}

let c2 = {
    driverName: "Leon",
    age: 35,
    over20: true,
    __proto__ : car
}

console.log("calling getAge here: " + car.getAge());
//console.log(car.changeAge(22));
//console.log("Name of C2: " + c2.driverName);
console.log(c2.getAge());


const boxes = [
    {value : 1, getvalue() { return this.value; }},
    {value : 2, getvalue() { return this.value; }},
    {value : 3, getvalue() { return this.value; }},
];

let b0 = boxes[0];
console.log(b0);
console.log(b0.getvalue());


let getvalPro = {

    internalNumb : 35,

    getvalPro(numb) {
        this.internalNumb = numb;  
    },

    getValue : function() {
        return this.value;
    },

    getValue2() {
        return this.value;
    }
}

let v3 = {
    value : 99,
    age: 35,
    haveFun() {
        return this.age
    }
}
v3.__proto__ = getvalPro;

console.log(typeof getvalPro);
console.log(v3.getValue());
console.log(v3.getValue2());

console.log("string: " + v3.toString());
/*function createBox() {
    return new getvalPro();
}*/

console.log(Object.getPrototypeOf(v3));
console.log(Object.getPrototypeOf(getvalPro));
console.log(v3.__proto__);
console.log(getvalPro.__proto__);


var greeter = "kaka";
console.log(greeter);
if(7 > 5) {
    var greeter = "pkla";
}

console.log(greeter);


const consPro = {
    greeting() {
        console.log("hey me");
    }
}

let p2 = {
    level : 35,
    literacy : 32,

    __proto__ : consPro

}

console.log(Object.getPrototypeOf(p2));
console.log("Prototype of p2: " + p2.__proto__);
function person(name) {
    this.age = 300,
    this.name = name

    
    /*use  function() {
        return this.age;
    }*/
}

let a2 = new person("Molly");
console.log(a2.name);

let a1 = [1, 5, 9];
console.log("a1 type:" + a1.constructor);
console.log("a1 type:" + a1.prototype);
console.log("person type:" + person.constructor);
console.log( person.prototype === Function.constructor);
console.log(person.__proto__  === Function.constructor);
console.log( a2.prototype);
console.log(  a2.__proto__  );

let k = new person("abd!!");
Object.setPrototypeOf(k, consPro);
console.log( k.__proto__);
console.log("the constructor of k: " , k.constructor);
console.log(k.age);

console.log(k.use);
console.log(Object.hasOwn(k, "greeting"));
console.log(Object.hasOwn(k, "age"));
console.log(Object.hasOwn(k, "name"));
console.log(Object.hasOwn(k, "use"));


const c1 = {
    age : 3,
    name: "Naomi",
    "__proto__" : "na"
}
console.log("c1 stuff: ");
console.log(c1.__proto__);
console.log(c1.constructor);
console.log(c1.constructor === Object);

const arr = [];
console.log(arr.constructor);
arr instanceof Array;
//arr.constructor = String;
console.log(arr.constructor);
console.log(arr instanceof Array);
console.log(arr instanceof String);


const exP4 = {
    __proto__ : c1,
    ["__proto__"] : 29,
    ["c"] : "baba"
}

console.log(exP4.__proto__);
console.log(Object.getPrototypeOf(exP4));
console.log(exP4.c);

const obj5 = {
    ["__proto__"] : 17,
    ["__proto__"] : 29,
    __proto__ : null
}

console.log(obj5)
console.log(obj5.__proto__)
console.log(obj5.constructor);
console.log(Object.getPrototypeOf(obj5))
console.log(Object.prototype.constructor(obj5))
console.log(Object.prototype.constructor(arr))
console.log(arr.constructor)

function greet() {
    console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
    animal : "doggy",
    sleepDuration : 20
}

greet.call(obj)

function StatusByDate(obj) {
    const hoy = new Date();
    if (obj.Date > hoy)  {
        return "current Obj!";
    } else {
        return "Old Object!";
    }
}


var item = {
    id : 'skate',
    nombre : 'electric skate',

    get thejob()  {
        return StatusByDate(this);
    }
}
console.log(item)
