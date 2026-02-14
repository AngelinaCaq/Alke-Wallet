function guardarTransaccionDeposito(monto) {
    const historial = JSON.parse(localStorage.getItem("historial")) || [];

    const nuevaTransaccion = {
        tipo: "Depósito", // ← lo escribimos directo
        monto: monto,
        fecha: new Date().toLocaleString(),
        detalle: "Depósito"
    };

    historial.push(nuevaTransaccion);
    localStorage.setItem("historial", JSON.stringify(historial));
}


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
        guardarTransaccionDeposito(monto);
        window.location.href = 'menu.html';
    }
})