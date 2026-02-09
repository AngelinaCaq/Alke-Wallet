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

function agregarContacto() {
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];

    const nuevoContacto = {
        nombre: document.getElementById("nombre").value,
        cuenta: document.getElementById("cuenta").value,
        banco: document.getElementById("banco").value
    };

    contactos.push(nuevoContacto);
    localStorage.setItem("contactos", JSON.stringify(contactos));

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
