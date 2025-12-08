//Polyfi de syntax

/*
function foo(a = 2) {
    console.log(a);
}

foo();      // 2
foo(42);  // 42

*/

// If using a older JS version:

function foo() {
    let a = arguments[0] !== (void 0) ? arguments[0] : 2;
    console.log( a );
}