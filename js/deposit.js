const montoDeposito = document.getElementById("montoDeposito");
const botonDeposito = document.getElementById("btnDepositar");

botonDeposito.addEventListener("click", () => {
    const monto = Number(montoDeposito.value);

    if (monto <= 0) {
        alert("Monto invalido");
        return
    } else {
        const saldoActual = Number(localStorage.getItem("saldo"));
        const nuevoSaldo = saldoActual + monto;
        
        localStorage.setItem("saldo", nuevoSaldo);
        console.log(localStorage.getItem("saldo"));
        window.location.href = 'menu.html';
    }
})