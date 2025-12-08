let a = "26"
let b = 26

let c = 32
let d = 49

console.log(a == b)     // "26" == 26? --> 26 == 26 --> true
console.log(a === b)    // String not equals to a Int value. --> false

console.log(c == d)     // 32 == 49?  ---> false
console.log(c === d)    // 26 === 49? ---> false

console.log(c != d)     // 32 != 49?  ---> true - not equals? yes.
console.log(c !== d)    // 26 !== 49? ---> true - not equals? yes.