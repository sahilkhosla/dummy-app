'>>>>>>>>>>>>>>>>>>>>>'
// 1. Callbacks
'>>>>>>>>>>>>>>>>>>>>>'

'---------------------'
// second before first :(
'---------------------'

// long running function
function first() {
  setTimeout(() => {
    console.log(1)
  }, 500);
}

function second() {
  console.log(2);
}

first();
second(); 


'---------------------'
// accept callback
'---------------------'

function first(callback) {
  console.log(`first initiated..`);
  
  setTimeout(() => {
    console.log(1)
    callback();
  }, 500);
}

function second() {
  console.log(2);
}

first(second);
console.log('moving on to other things..');

'---------------------'
// callback hell
'---------------------'

function longGET(num, time, callback) {
  setTimeout(() => {    
    console.log(`GET: ${num}`);
    callback(num);
  }, time);
}

// TODO - callback hell

'>>>>>>>>>>>>>>>>>>>>>'
// 2. Promises
'>>>>>>>>>>>>>>>>>>>>>'

'---------------------'
// longGET 
'---------------------'

// What is a Promise?
// https://mdn.mozillademos.org/files/15911/promises.png
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

const longGET = (num) => {
  return new Promise((resolve, reject) => {
    // mock long execution
    setTimeout(() => {
      if (Math.random() <= 1 || true) { // remove true for error
        console.log(`GET: ${num}`);
        resolve(num)
      } else {
        console.log(`Error in GET: ${num}`);
        reject(num);
      }
    }, 1000);
  })
}

var p = longGET(1);
console.log(p);


'---------------------'
// then/catch
'---------------------'

const one = longGET(1); // returns a promise

one
  .then(() => {
    console.log('done');
  })
  .catch(() => {
    console.log('error');
  })

console.log('moved on to other things')

'---------------------'
// sequence (error)
'---------------------'

const one = longGET(1); // returns a promise

one
  .then((num) => {
    longGET(++num)
    console.log('done with 1 and 2'); 
  })
  .catch(() => {
    console.log('error');
  })

'---------------------'
// sequence (fixed with magic - chaining)
'---------------------'
    
const one = longGET(1); // returns a promise

// TODO: fix the issue in above code

'---------------------'
// finally
'---------------------'

// TODO: extend above code to add a finally block

'---------------------'
// parallel
'---------------------'

// TODO: create parraled calls for 1 and 2
// start with all resolve
// add a reject to see catch in action

Promise.all([])
  .then((results) => {
    console.log('done with 1 and 2', results);
  })
  .catch((error) => {
    console.log(`error in ${error}`)
  });

'>>>>>>>>>>>>>>>>>>>>>'
// 3. Async/Await
'>>>>>>>>>>>>>>>>>>>>>'

'---------------------'
// setup
'---------------------'

const executeGets = () => {
  let one = longGET(1);
  let two = longGET(++one);
  console.log('done with 1 and 2');
}

executeGets();

'---------------------'
// async/await
'---------------------'

// TODO: use async/await
// note: only works if the long running function returns a promise

'---------------------'
// async/await - error handling
'---------------------'

// TODO: error handling with try catch

