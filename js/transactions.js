document.addEventListener("DOMContentLoaded", () => {
    const historial = JSON.parse(localStorage.getItem("historial")) || [];
    const contenedor = document.getElementById("listaTransacciones");

    contenedor.innerHTML = "";

    historial.reverse().forEach(transaccion => {
        const li = document.createElement("li");

        li.className = "list-group-item";

        li.innerHTML = `
            <div class="font-weight-bold">${transaccion.detalle}</div>
            <div class="small text-muted">${transaccion.fecha}</div>
            <div class="${transaccion.tipo === 'Transferencia' ? 'text-danger' : 'text-success'} font-weight-bold">
            <div>$${transaccion.monto}</div>

        `;

        contenedor.appendChild(li);
    });
});