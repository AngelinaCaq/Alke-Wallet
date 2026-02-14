function guardarTransaccionTransferencia(monto, detalle) {
    const historial = JSON.parse(localStorage.getItem("historial")) || [];

    const nuevaTransaccion = {
        tipo: "Transferencia",
        monto: monto,
        fecha: new Date().toLocaleString(),
        detalle: `Enviado a ${detalle}`
    };

    historial.push(nuevaTransaccion);
    localStorage.setItem("historial", JSON.stringify(historial));
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarContactos();
    cargarContactosEnSelect();
});

console.log("select:", document.getElementById("selectContactos"));
//NUEVO CONTACTO
function agregarContacto() {
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];

    const nuevoContacto = {
        nombre: document.getElementById("nombre").value,
        cuenta: document.getElementById("cuenta").value,
        banco: document.getElementById("banco").value
    };

    contactos.push(nuevoContacto);
    localStorage.setItem("contactos", JSON.stringify(contactos));
    mostrarContactos()
    cargarContactosEnSelect();
    alert("Contacto agregado");
    location.reload();
}
//MOSTRAR CONTACTOS 

function mostrarContactos() {
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    const lista = document.getElementById("listaContactos");

    lista.innerHTML = "";

    contactos.reverse().forEach(c => {
        const li = document.createElement("li");

        li.className = "list-group-item text-center";

        li.innerHTML = `
            <div class="h6 mb-1">${c.nombre}</div>
            <div class="small text-muted">
                ${c.banco} - ${c.cuenta}
            </div>
        `;

        lista.appendChild(li);
    });
}
mostrarContactos();

//Seleccionar contacto 
function cargarContactosEnSelect() {
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    const select = document.getElementById("selectContactos");

    select.innerHTML = `<option value="">Selecciona un contacto</option>`;

    contactos.reverse().forEach((c) => {
        const option = document.createElement("option");
        option.value = `${c.nombre} - ${c.cuenta}`;
        option.textContent = `${c.nombre} - ${c.banco}`;

        select.appendChild(option);
    });
}



function hacerTransferencia() {
    const monto = Number(montoDepositar.value);
    const contacto = document.getElementById("selectContactos").value;

    if (monto <= 0 || contacto === "") {
        alert("Monto o contacto inválido");
        return;
    }

    const saldoActual = Number(localStorage.getItem("saldo"));

    if (monto > saldoActual) {
        alert("Saldo insuficiente");
        return;
    }

    const nuevoSaldo = saldoActual - monto;

    localStorage.setItem("saldo", nuevoSaldo);

    guardarTransaccionTransferencia(monto, contacto);

    window.location.href = 'menu.html';
}