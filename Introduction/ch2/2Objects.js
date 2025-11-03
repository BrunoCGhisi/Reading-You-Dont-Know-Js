let obj = {
    a: "Hello World",
    b: 26,
    c: false
};

console.log("************")

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

console.log("************")

console.log(obj["a"]);   // "hello world"
console.log(obj["b"]);   // 26
console.log(obj["c"]);   // false

console.log("************")

obj.a =  obj.a + ", Bruno Ghisi"
obj.b = obj.b / 2
obj.c = true

console.log(obj.a);     // Bruno Ghisi
console.log(obj.b);     // 13
console.log(obj.c);     // true
