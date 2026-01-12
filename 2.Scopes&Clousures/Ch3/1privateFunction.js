function doSomething(a) {
    b = a + doSomethingElse( a * 2 ); // 2 + (1 - (2*2))

    console.log( b * 3 );
}

function doSomethingElse(a) {
    return a - 1;
}

let b;

doSomething( 2 ); // 15

//

function doSomething1(d) {
    c = d + doSomethingElse1( d * 2 ); // 2 + (1 - (2*2))

    console.log( c * 3 );

    function doSomethingElse1(d) {
        return d - 1;
    }
}

let c;

doSomething1( 2 ); // 15