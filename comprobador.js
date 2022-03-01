function comprobarCheck() {
    var contador = 0
    var checkboxes = document.getElementsByClassName("check");
    [].forEach.call(checkboxes, function(checkbox) {
    if(checkbox.checked === true) {
            contador++
    }
    });
    return contador > 1
}