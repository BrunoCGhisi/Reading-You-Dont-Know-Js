const TAX = 0.8    //Will not change
let amount = 99.99 //Will change

amount += amount
amount *= TAX

console.log(amount) //Numeric value
console.log("Conversion to string with $ ")
amount = "R$ " + amount
console.log(amount)