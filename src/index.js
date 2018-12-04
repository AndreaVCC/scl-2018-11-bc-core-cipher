
// A $( document ).ready() block.

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    



document.getElementById("codee").addEventListener("click",() => {
    let offset = parseInt(document.getElementById("displacement").value);
    let string = (document.getElementById("txto").value);
    document.getElementById("resultC").innerHTML = "Mensaje Cifrado: " + cipher.encode(offset, string);
})

document.getElementById("decipher").addEventListener("click", () => {
    let offset = parseInt(document.getElementById("displacement").value);
    let string = (document.getElementById("txto").value);
    document.getElementById("resultC").innerHTML = "Mensaje Descifrado: " + cipher.decode(offset, string);
})




// Obtener el modal
var modal = document.getElementById('id01');

