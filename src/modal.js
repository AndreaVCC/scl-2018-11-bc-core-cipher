
//Creada para pasar el test


var modal = document.getElementById('id01');


// al hacer click en cualquier lugar fuera de la ventana mpdal se cerrara  
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

