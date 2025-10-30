const tax = 0.08

let cashBank = Number(prompt('Quanto você tem de saldo? '))
let phonePrice = Number(prompt('Qual o preço de um celular? '))
let acessoryPrice = Number(prompt(' Qual o preço dos acessórios? '))


function taxCalculator(taxes) {
    phonePrice = phonePrice+(taxes * phonePrice)
    acessoryPrice = acessoryPrice+(taxes * acessoryPrice)
    alert("Houve uma taxa de: " + taxes + "\n"
        + "Preço celular: " + phonePrice + "\n"
        + "Acessórios de Celular: " + acessoryPrice + "\n")
}

function buyAcessorys(actualCashBank){
    let total = 0
    let aux
    while(true){
        if (actualCashBank >= acessoryPrice){
            actualCashBank -= acessoryPrice
            total++
            aux = actualCashBank
        }
        else {
            break;
        }
    }
    cashBank = actualCashBank
    return total
}

function buyPhone(){
    taxCalculator(tax)
    if (cashBank < phonePrice){
        alert("Não tem saldo suficiente..." + " Saldo: " + cashBank + " Celular: " + phonePrice)
    }
    else {
        cashBank = cashBank - phonePrice
        let total = buyAcessorys(cashBank)
        alert("Total de Acessórios comprados: " + total + " Saldo Restante: " + cashBank)
    }
}

buyPhone()