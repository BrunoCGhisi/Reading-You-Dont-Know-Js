"use strict";
//Because a is not with let, const or var. "use strict" will raise errors even when the code "run"
//Basically will find tiny error/warning

function foo() {
    a = 1;

    if (a >= 1) {
        let b = 2;

        while (b < 5) {
            let c = b * 2;
            b++;

            console.log( a + c );
        }
    }
}

foo();
// 5 7 9