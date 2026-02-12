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
}
//MOSTRAR CONTACTOS 

function mostrarContactos() {
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    const lista = document.getElementById("listaContactos");

    lista.innerHTML = "";

    contactos.forEach(c => {
        const li = document.createElement("li");
        li.textContent = `${c.nombre} - ${c.banco}`;
        lista.appendChild(li);
    });
}
mostrarContactos();

//Seleccionar contacto 
function cargarContactosEnSelect() {
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    const select = document.getElementById("selectContactos");

    select.innerHTML = `<option value="">Selecciona un contacto</option>`;

    contactos.forEach((c) => {
    const option = document.createElement("option");
        console.log("hola")
    option.textContent = `${c.nombre} - ${c.banco}`;

    select.appendChild(option);
    });
}



function hacerTransferencia() {
    const monto = Number(montoDepositar.value);
    const contactoEnviar = document.getElementById("selectContactos").value;

    if (monto <= 0 || contactoEnviar === "" ) {
        alert("Monto o contacto invalido");
        return
    } else {
        const saldoActual = Number(localStorage.getItem("saldo"));
        const nuevoSaldo = saldoActual - monto;
        
        localStorage.setItem("saldo", nuevoSaldo);
        window.location.href = 'menu.html';
    }
}