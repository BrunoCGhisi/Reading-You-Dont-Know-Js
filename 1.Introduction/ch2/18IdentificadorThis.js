function foo() {
    console.log( this.bar );
}

let bar = "global";

let obj1 = {
    bar: "obj1",
    foo: foo
};

let obj2 = {
    bar: "obj2"
};

// --------

foo();              // "global"
obj1.foo();         // "obj1"
foo.call( obj2 );   // "obj2"
new foo();          // undefined
