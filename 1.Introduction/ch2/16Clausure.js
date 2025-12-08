function makeAdder(x){

    function add(y){
        return y + x;
    }

    return add
}

let plusOne = makeAdder(1)
let plusTen = makeAdder(10)

console.log(plusOne(5))
console.log(plusOne(10))
console.log(plusTen(16))