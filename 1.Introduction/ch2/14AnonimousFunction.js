let a = 2

//anonimous function
let fun = function(){
    a += 2
    return a
}
console.log(fun())

//or

let b = 3

//named function
function fon() {
    b += a
    return b
}
console.log(fon())