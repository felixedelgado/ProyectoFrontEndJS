const inputCategoria = document.getElementById("inputCategoria");
const inputCantidad = document.getElementById("inputCantidad");
const botonResumen = document.getElementById("botonResumen");
const resultadoTotal = document.getElementById("resultadoTotal");
const valorTicket = 200;

let cantidad;
let categoria;

function valCantidad(num) {
    let cantidadT = parseInt(num);
    if (cantidadT > 0) {
        return cantidadT;
    }
    return 0;
}

function valCategoria(cat) {
    if (cat == "Estudiante") {
        return 0.2;
    } else if (cat == "Trainee") {
        return 0.5;
    } else if (cat == "Junior") {
        return 0.85;
    }
}

botonResumen.onclick = function () {
    cantidad = valCantidad(inputCantidad.value);
    categoria = valCategoria(inputCategoria.value);
    resultadoTotal.innerHTML = valorTicket * cantidad * categoria;
};
