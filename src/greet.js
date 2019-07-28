// es6 imports
import { sayHello } from './util';

export default () => {
  sayHello('world');

  // es6 fat arrow function
  (() => {
    let name = 'foo';
    console.log(`greetings from ${name}`);
  })();
};
