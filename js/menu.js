let saldo = Number(localStorage.getItem("saldo"));

if (isNaN(saldo)) {
    saldo = 150000;
    localStorage.setItem("saldo", saldo);
}
document.getElementById("saldoActual").textContent = "$" + saldo;

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
