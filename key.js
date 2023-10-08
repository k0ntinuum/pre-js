import * as mode from './mode.js';
import * as tg from './tg.js';

export function random_key(num_modes, num_words, a, max_letters) {
    let k  = [];
    for (let i = 0 ; i < num_modes ;  i++) 
        k.push(mode.random_mode(num_modes, a, num_words, max_letters));
    return k;
}
export function print_key(k) {
    const state_hue = 165;
    for (let i = 0 ; i < k.length ;  i++) {


        for (let j = 0 ; j < k[0].length ;  j++) {
            tg.set_rgb(255,0,0);
            tg.print(`${k[i][j][0]} `);
            tg.set_rgb(255,255,0);
            tg.print(`${k[i][j][1]} `);
            tg.set_rgb(state_hue ,state_hue ,state_hue );
            tg.print(`${k[i][j][2]}\n`);
        }
        tg.print(`\n`);
    }

}

