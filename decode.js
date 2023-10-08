export function decode_next(k,m,c) {
    for (let i = 0; i < k[m].length ; i++) {
        const f = k[m][i][0];
        const p = k[m][i][1];
        if (c.startsWith(p)) 
            return [f, c.slice(p.length), k[m][i][2]];
    }
    throw new Error('could not decode');
}
export function decode(k,c) {
    let m = 0;let p = '';let r;
    while (! c == '') {
        r = decode_next(k,m,c);
        p += r[0];
        c = r[1];
        m = r[2];
    }
    return p;
}


