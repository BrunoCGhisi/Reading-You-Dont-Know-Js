let obj = {
    a: 2,
    b: 3,
    c: 4
}

/*
"normal" way to do this
obj.a = 2;
obj.b = 3;
obj.c = 4;

*/

with (obj) {
    a = 5
    b = 6
    c = 7
}

//OBS: Bad performance!