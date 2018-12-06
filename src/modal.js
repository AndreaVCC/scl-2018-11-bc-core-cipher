
//Creada para pasar el test


var modal = document.getElementById('id01');


// al hacer click en cualquier lugar fuera de la ventana se cerrara  (ocultar para pasar test)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

