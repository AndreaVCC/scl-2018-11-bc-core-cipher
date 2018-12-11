document.getElementById("codee").addEventListener("click",() => {
    let offset = parseInt(document.getElementById("displacement").value);
    let string = (document.getElementById("txto").value);
    document.getElementById("resultB").innerHTML = "Mensaje Cifrado:"
    document.getElementById("resultC").innerHTML = cipher.encode(offset, string);
})



document.getElementById("decipher").addEventListener("click", () => {
    let offset = parseInt(document.getElementById("displacement").value);
    let string = (document.getElementById("txto").value);
    document.getElementById("resultB").innerHTML = "Mensaje Descifrado:"
    document.getElementById("resultC").innerHTML = cipher.decode(offset, string);
});



// Establecemos las variables poder copiar portapapeles


let textarea = document.getElementById("resultC"); //resultado cifrado y descifrado
let copy   = document.getElementById("copiador"); //boton copiar
copy.addEventListener('click', function(e) {
   
    // Sleccionando el texto
   textarea.select();
   
       // Copiando el texto seleccionado
       var successful = document.execCommand('copy');
   }
);
