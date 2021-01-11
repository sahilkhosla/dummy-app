// 1.1

// demo window and this
alert('hello!');

console.log('window:', window)
console.log('this:', this)

console.log(window === this);


// demo where global variables and functions reside
var a = 'foo';

function b() {
  console.log('I am b!')
}

// where is a and b saved?
console.log(a);
b();

// ------------------------

// 1.2 (duplicated - skip)

// ------------------------

// 1.3

var color = 'red';

function first() {
  var color = 'green';
  console.log(color);
}

first();
console.log(color);

// ------------------------

// 1.4

var color = 'red';

function first() {
  var color = 'green';
  console.log(`first -`, color);
  second();
}

function second() {
  console.log(`second -`, color);
}

first();
console.log(`global -`, color);

// ------------------------

// 1.5

// TODO: move 57/58 to the top 
// hoisting variable
// hoisting function

var a = 'foo';

function b() {
  console.log('I am b!')
}

console.log(a);
b();