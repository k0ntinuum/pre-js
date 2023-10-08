import * as word from './word.js';
import * as puts from './puts.js';
import * as goes from './goes.js';
import * as finds from './finds.js';
import * as mode from './mode.js';
import * as key from './key.js';
import * as tg from './tg.js';
import * as encode from './encode.js';
import * as decode from './decode.js';



let a = 'O|@*';
let k = key.random_key(4,7,a,5);
key.print_key(k);
let p = word.random_word(a,5,9);
let c =  encode.encode(k,p);
let d = decode.decode(k,c);
tg.print(p);
tg.print('\n');
tg.print(c);
tg.print('\n');
tg.print(d);


// tg.cls();
// tg.cursor_to(20,20);
// tg.print(a);