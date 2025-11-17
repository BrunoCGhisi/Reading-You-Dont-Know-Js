let foo = {
    a: 42
};


let bar = Object.create( foo );

bar.b = "hello world";

console.log(bar.b);      // "hello world"
console.log(bar.a);      // 42 <-- delegado para `foo`
console.log(bar.b);      // "hello world"