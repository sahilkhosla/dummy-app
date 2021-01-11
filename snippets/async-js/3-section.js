'>>>>>>>>>>>>>>>>>>>>>'
// 1. Revealing Module Pattern
'>>>>>>>>>>>>>>>>>>>>>'

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

  return {
    incrementCount,
    decrementCount,
    getCount
  }

})();

'>>>>>>>>>>>>>>>>>>>>>'
// 2. CommonJS
'>>>>>>>>>>>>>>>>>>>>>'

// webpack.config.json

'>>>>>>>>>>>>>>>>>>>>>'
// 3. RequireJS
'>>>>>>>>>>>>>>>>>>>>>'

// https://github.com/volojs/create-template
// https://github.com/requirejs/example-multipage

'>>>>>>>>>>>>>>>>>>>>>'
// 4. Import/Export
'>>>>>>>>>>>>>>>>>>>>>'

// greet.js
// todo: create a default export

// util.js
const printName = (name) => {
  console.log(`name: ${name}`);
};

// public
const sayHello = (name) => {
  console.log(`hello ${name}`);
}

// todo: create a named export

// index.js
// todo: use default and named export



