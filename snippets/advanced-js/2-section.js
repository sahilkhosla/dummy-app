// 1. 

function sayHi() {
  console.log('hi!');
}

var sayHello = function() {
  console.log('hello!');
}

// TODO: set a prop on sayHi to prove it's an object
// console.log('sayHi:', {sayHi});

// TODO: assign a function to a variable

// 1b.

// TODO: create a function expression and pass to caller
function executer(func) {
  if (typeof func === 'function') {
    console.log(`running function ${func.name}`);
    func();
  } else {
    console.log('not a function!');
  }
}

// 2.

function createGame() {
  var negative = 0;
  var positive = 0;

  function getScore() {
    console.clear();
    console.log('Score: ' + (positive - negative));
  }

  function printScoreTable() {
    console.table({positive, negative, score: (positive - negative)});
  }

  function incrementScore() {
    positive++;
    getScore();
  }

  function decrementScore() {
    negative++;
    getScore();
  }

  window.onclick = function(e) {
    if (e.clientY <= 200) {
      decrementScore();
    } else {
      incrementScore();
    }
  }

  window.onkeypress = function(e) {
    if(e.key === 's') {
      printScoreTable();
    }
  }

}