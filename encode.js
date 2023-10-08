export function encode_next(k,m,p) {
    for (let i = 0; i < k[m].length ; i++) {
        const f = k[m][i][0];
        if (p.startsWith(f)) 
            return [k[m][i][1], p.slice(f.length), k[m][i][2]];
    }
    throw new Error('could not encode');
}
export function encode(k,p) {
    let m = 0;let c = '';let r;
    while (! p == '') {
        r = encode_next(k,m,p);
        c += r[0];
        p = r[1];
        m = r[2];
    }
    return c;
}
