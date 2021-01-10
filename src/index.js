import { sayHello } from "./util";
import { greet } from 'base-npm-lib';
import unlock from "./unlock";

sayHello('world!');
greet();

const unlockEventOptions = ['scroll', 'click', 'keypress', 'mouseout']

unlock(unlockEventOptions);