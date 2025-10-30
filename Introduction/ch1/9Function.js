let cashBank = 200
let amount = 100    // divida
let tax = 1.5       // 50%

function printCashBank(){
    console.log(cashBank)
}

function totalAmount() {
    amount = amount * tax
    printCashBank()
    console.log(amount)
    return amount
}

function actualCashBank(cash){
    cash = cash - amount
    cashBank = cash
    printCashBank()
    return cashBank
}

totalAmount()
actualCashBank(cashBank)