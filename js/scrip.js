function saludo() {
    var nombre = prompt("Por favor, ingrese su nombre:");
    
    if (nombre === null || nombre === "") {
        alert("Por favor, ingrese su nombre.");
    } else {
        alert("¡Bienvenido, " + nombre + "!");
    }
}

window.onload = saludo;