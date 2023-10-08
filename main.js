import * as word from './word.js';
import * as puts from './puts.js';
import * as goes from './goes.js';
import * as finds from './finds.js';
import * as mode from './mode.js';
import * as key from './key.js';
import * as tg from './tg.js';



let a = 'O|@*';
let k = key.random_key(4,7,a,5);
console.log(k);
key.print_key(k);

// tg.cls();
// tg.cursor_to(20,20);
// tg.print(a);