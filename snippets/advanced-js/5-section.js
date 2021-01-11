'---------------------'
// prototypes - 5.1
'---------------------'

var obj = {name: 'John'};

// obj.name - OK
// obj.toString() - ??

'---------------------'
// everything is an object - 5.1b
'---------------------'
obj.__proto__

'---------------------'
// everything is an object - 5.1c
'---------------------'

var obj = {}
var arr = [];

console.log(obj.__proto__.constructor);
console.log(arr.__proto__.constructor);

// TODO keep doing the chain for arr

'---------------------'
// why bother about prototypes - 60
'---------------------'

// 1. shared methods

// constructor
function Person(name, age) { // capital P
  this.name = name;
  this.age = age;
  this.getInfo = function() {
    console.log(`Person info: Name -> ${this.name}, Age -> ${this.age}`);
  } 
}

const p1 = new Person('Jane', '25'); // new 
const p2 = new Person('John', '52');

// TODO: move the getInfo function to somewhere common

// 2. extend an api

var first = function() {
  if (this.length) {
    console.log(`First element is ${this[0]}`);
  } else {
    console.log('Array is empty :(')
  }
}

// TODO: update Array APIs 

'---------------------'
// classes ES5
'---------------------'

// Watch
function Watch(options) {
  this.brand = options.brand;  
}

Watch.prototype.time = function() {
  console.log(new Date(Date.now()).toLocaleString());
}

// TODO create SmartWatch

console.log(new Date(Date.now()).toLocaleString()); //time
console.log(Math.floor(Math.random() * 10000)); //steps

// ugly lines
SmartWatch.prototype = Object.create(Watch.prototype);
SmartWatch.prototype.constructor = SmartWatch;

'---------------------'
// classes ES6
'---------------------'

class Watch {
  constructor(options) {
    this.brand = options.brand
  }

  time() {
    console.log(new Date(Date.now()).toLocaleString());
  }
}

// TODO use this to create SmartWatch
