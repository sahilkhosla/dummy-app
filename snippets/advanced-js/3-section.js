'-------------------'
// 1.
'-------------------'

function func() {
  console.log('this:', this);
}

var obj = {
  name: 'foo',
  info: function() {
    console.log('info this:', this)
  }
}

func();
obj.info();

'-------------------'
// 2.
'-------------------'

// 2a.
// TODO: demo closure 
function makeFunc() {
  var name = 'Pearson';
  function displayName() {
    console.log(name);
  }
  console.log('makeFunc - done executing!');
  return displayName;
}

var displayNameFunc = makeFunc();

'-------------------'
// 2b.
'-------------------'

function createClosure() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log('i:', i);
    }, 2000);
  }

  console.log('done creating closures!');
}

createClosure();

'-------------------'
// 2c.
'-------------------'

// TODO: demo IIFE remedy (function{})()
// or let (ES6)

'-------------------'
// 3.
'-------------------'

var obj = {target: 'div'};

function logTarget() {
  console.log('target:', this.target);
}

logTarget();

// bind
// call
// apply












