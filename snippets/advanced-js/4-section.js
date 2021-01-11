'---------------------'
// const and let
'---------------------'

// TODO: demo problem with using var

function logVars() {
  var x = 1;
  console.log(x);

  if (true) {
    var x = 2;
    console.log(x);
  }

  console.log(x);
}

logVars();

// TODO: fix with let
// TODO: try re-assigning a const

'---------------------'
// template strings
'---------------------'

var person = {
  firstName: 'Jane',
  lastName: 'Doe'
}

console.log('Hello, My name is ' + person.firstName + ' ' + person.lastName);

'---------------------'
// fat arrows
'---------------------'

// TODO: 1. fat-arrow syntax
// remove function keyword
// replace {} with () - implicit return

function add(a, b) {
  return (a + b)
};

console.log(add(2, 5));

// TODO: 3. fix with bind, that/this and then =>
// where is 'this' pointing to (function within a function)

const loc = {
  country: 'Canada',
  city: 'Toronto',
  teams: ['Raptors', 'Blue Jays', 'Maple Leafs'],
  getInfo: function() {
    console.log(`Current location is ${this.city}, ${this.country}`);
  },
  getTeamNames: function() {
    this.teams.map(function(team) {      
      console.log(`${team} from ${this.city}, ${this.country}`);
    })
  }
}

loc.getInfo();
// loc.getTeamNames();

'---------------------'
// object literals
'---------------------'

const firstName = 'jane';
const lastName = 'doe';
const age = 26;
const city = 'Montreal';
const KEY = 'car';

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
  city: city
}

// TODO: getAge function
// TODO: name()
// TODO: get name()
// TODO: dynamic keys [KEY]

'---------------------'
// destructuring
'---------------------'

// object
const obj = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 26,
  location: 'Montreal'
}

const func = (obj) => {
  const name = `${obj.firstName} ${obj.lastName}`;
  console.log(name);
}

func(obj);

// TODO: improve func

// ---

// aray

const arr = ['Jane', 'Doe', 26, 'Montreal'];

const func = (arr) => {
  const name = `${arr[0]} ${arr[1]}`;
  console.log(name);
}

func(arr);

// TODO: improve func

'---------------------'
// array methods
'---------------------'

// map
// syntax - a function that's executed for each value
const teams = ['Raptors', 'Blue Jays', 'Maple Leafs'];

// filter
// syntax - a test function that's executed for each value 
const teams = [
  {name: 'Raptors', lastGame: 'Won'},
  {name: 'Blue Jays', lastGame: 'Lost'},
  {name: 'Maple Leafs', lastGame: 'Won'},
];