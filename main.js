import * as word from './word.js';
import * as puts from './puts.js';
import * as goes from './goes.js';
import * as finds from './finds.js';
import * as mode from './mode.js';
import * as key from './key.js';
import * as tg from './tg.js';
import * as encode from './encode.js';
import * as decode from './decode.js';
import * as key_demo from './key_demo.js';
import * as encoding_demo from './encoding_demo.js';
import * as demo_encode from './demo_encode.js';



let a = 'O|@';
let k = key.random_key(4,7,a,5);
let p = word.random_word(a,6,9);
console.log(p);
let c,h = demo_encode.encode_p_c_history(k,p);
console.log(c,h);
demo_encode.print_history(p,c,h);
