const montoTransferir = document.getElementById("montoTransferir");
const btnTransferir = document.getElementById("btnTransferir");

btnTransferir.addEventListener("click", () => {
    const monto = Number(montoTransferir.value);

    if (monto <= 0) {
        alert("Monto invalido");
        return
    } else {
        const saldoActual = Number(localStorage.getItem("saldo"));
        const nuevoSaldo = saldoActual - monto;
        
        localStorage.setItem("saldo", nuevoSaldo);
        window.location.href = 'menu.html';
    }
})


//NUEVO CONTACTO

