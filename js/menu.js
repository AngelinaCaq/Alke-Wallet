//Reedireccuion de botones
function irADepositar(){
    window.location.href = 'deposit.html';
}

function irATransferir(){
    window.location.href = 'sendmoney.html';
}

function irAHistorial(){
    window.location.href = 'transactions.html';
}

//Muestra de saldo
const saldo = localStorage.getItem("saldo");
document.getElementById("saldoActual").textContent = saldo;