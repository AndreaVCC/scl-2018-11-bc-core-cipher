document.getElementById("cifrar").addEventListener("click",() => {
    let offset = parseInt(document.getElementById("nivel").value);
    let string = (document.getElementById("txto").value);
    document.getElementById("resultC").innerHTML = "Mensaje cifrado: " + cipher.encode(offset, string);
})

document.getElementById("descifrar").addEventListener("click", () => {
    let offset = parseInt(document.getElementById("nivel").value);
    let string = (document.getElementById("txto").value);
    document.getElementById("resultC").innerHTML = "Mensaje descifrado: " + cipher.decode(offset, string);
})





