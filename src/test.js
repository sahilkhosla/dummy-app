// es6 imports
import { sayHello } from './util';

export default () => {
  sayHello('world');

  // es6 fat arrow function
  (() => {
    let a = 'name';
    console.log('I am a fat arrow!!');
  })();
};
