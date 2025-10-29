let bankAccount = 300.00    //
let amount = 99.99          //Will change
const TAX = 0.8             //Will not change

amount += amount
amount *= TAX

console.log(amount)         //Numeric value
console.log(bankAccount)

if (amount > bankAccount) {
    bankAccount = bankAccount - amount
}
else {
    console.log("Bank account doesn't match")
}

amount = bankAccount
console.log(bankAccount)