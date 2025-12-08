const a = "hello world"
console.log( `1 ${a} é ${typeof a}`)

const b = 26
console.log( `2 ${b} é ${typeof b}`)

const c = false
console.log( `3 ${c} é ${typeof c}`)

const d = {a: a, b: b}
console.log( `4 ${d} é ${typeof d}`)

const e = null
console.log( `5 ${e} é ${typeof e}`)

const f = undefined
console.log( `6 ${f} é ${typeof f}`)

let g
console.log( `7 ${g} é ${typeof g}`)

function foo() {
    return 42;
}

foo.bar = "hello world";

console.log(`8.1 ${typeof foo}`);         // "function"
console.log(`8.2 ${typeof foo()}`);       // "number"
console.log(`8.3 ${typeof foo.bar}`);     // "string"