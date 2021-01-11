
'---------------------'
// revealing module pattern
'---------------------'

var counter = (function() {
  // private
  var count = 0;

  function log() {
    console.log(count);
  }

  // public
  function incrementCount() {
    count++;
    log();
  }

  function decrementCount() {
    count--;
    log();
  }

  function getCount() {
    return count
  }

  // TODO reveal methods  

})();

'---------------------'
// singleton pattern
'---------------------'

const db = (() => {
  // "state"
  let connection = '';

  const connect = () => {
    // TODO convert to singleton
    console.log('connecting...');
    connection = `sql.db [${Math.floor(Math.random() * 100)}]`;
    return connection;
  }

  const terminate = () => {
    if (connection) {
      console.log('terminating connection...');
      connection = '';
    } else {
      console.log('no existing connection!');
    }
    
  }

  const getDB = () => {
    return connect();
  }

  const termDB = () => {
    return terminate();
  }

  return {
    getDB,
    termDB
  }

})();

'---------------------'
// ES6 import/export
'---------------------'

// go src/index src/util and src/greet
// export const
// export default
// import {}, import greet
// import {sayHello as SH}
// import Util