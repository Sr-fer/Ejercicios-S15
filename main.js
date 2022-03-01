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

document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("formulario")
})

var checkboxes = document.getElementsByClassName("check");
[].forEach.call(checkboxes, function(checkbox) {
    checkbox.addEventListener("change", function() {
        if(checkbox.checked && comprobarCheck()) {
            checkbox.checked = false;
        }
    })      
})

}

main()