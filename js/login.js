const email = document.getElementById('emailValidar');
const password = document.getElementById('contrasenaValidar');

const adminEmail = "admin@gmail.com"
const adminContra = "123"

function comprobarSesion() {
    if (email.value === adminEmail && password.value === adminContra) {
        window.location.href = 'menu.html';
    } else {
        alert("ERROR");
    }

}