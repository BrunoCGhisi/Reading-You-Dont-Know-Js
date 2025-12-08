let a = 2;

foo();                  // funciona porque a declaração `foo()`
                        // é "hoisted"

function foo() {
    let a;
    a = 3;
    console.log( a );   // 3
}

console.log( a );   // 2