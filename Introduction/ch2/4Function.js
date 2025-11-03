function foo() {
    return 42;
}

foo.bar = "hello world";

console.log(typeof foo);         // "function"
console.log(typeof foo());       // "number"
console.log(typeof foo.bar);     // "string"