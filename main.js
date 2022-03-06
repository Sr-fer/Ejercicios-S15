function main() {

var caracteres_comentario = document.getElementById("comentarios")

//botón enviar
document.getElementById("envio").addEventListener("click", () => {
    var numeros = /[0-9]/
    var nombre = document.getElementById("nombre")
    var apellidos = document.getElementById("apellidos")
    var DNI = document.getElementById("nif")
    
if(numeros.test(apellidos.value)) {
    alert("Los Apellidos contienen numeros");
}

if(numeros.test(nombre.value)) {
    alert("El Nombre contiene numeros");
}

if(DNI.value.length < 9) {
alert("El DNI tiene que contener 9 Digitos")
}
})

caracteres_comentario.addEventListener("keyup", (evt) => {
    comprobarComentario(evt, caracteres_comentario);
})

function comprobarComentario(evt, caracteres_comentario) {
    if(caracteres_comentario.value.length > 250){
    caracteres_comentario.value = caracteres_comentario.value.slice(0,250)
}
}
//reset
document.getElementById("reset").addEventListener("click", () => {
    reset()
})
function reset() {
    location.reload()
}

var checkboxes = document.getElementsByClassName("check");
[].forEach.call(checkboxes, function(checkbox) {
    checkbox.addEventListener("change", function() {
        if(checkbox.checked && comprobarCheck()) {
            checkbox.checked = false;
        }
    })      
})

var anio = document.getElementsByClassName("radio")
var aficiones = document.getElementsByTagName("label")

for (let i = 0; i < anio.length; i++) {
    anio[i].addEventListener("click", () => {
        cambiar_aficiones(i)
    })
}
function cambiar_aficiones(anio,) {
    switch (anio) {
        case 0: {
            aficiones[9].innerHTML = '<input type="checkbox" class="check" checked>Futbol'
            aficiones[10].innerHTML = '<input type="checkbox" class="check">Videojuegos'
            aficiones[11].innerHTML = '<input type="checkbox" class="check">Baloncesto'
            aficiones[12].innerHTML = '<input type="checkbox" class="check">Pintura'
        }
            break
        case 1: {
            aficiones[9].innerHTML = '<input type="checkbox" class="check">Lectura'
            aficiones[10].innerHTML = '<input type="checkbox" class="check" checked>Pasear'
            aficiones[11].innerHTML = '<input type="checkbox" class="check">Manualidades'
            aficiones[12].innerHTML = '<input type="checkbox" class="check">Televisión'
        }
            break
        case 2: {
            aficiones[9].innerHTML = '<input type="checkbox" class="check">Dormir'
            aficiones[10].innerHTML = '<input type="checkbox" class="check" checked>Hacer Sudokus'
            aficiones[11].innerHTML = '<input type="checkbox" class="check">Ver el periódico'
            aficiones[12].innerHTML = '<input type="checkbox" class="check">Películas del Oeste'
        }
            break
        default:
            break
    }
}
}

main()