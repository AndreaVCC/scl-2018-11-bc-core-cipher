window.cipher = {

  encode: (offset, string) => {
  let resultC = "";
  
  for (let i = 0; i < string.length; i++){
  let codeAscii = string.charCodeAt(i); //codigo ascii
    
    if (codeAscii >=65 && codeAscii <=90){ //si el codigo va de 65 a 90 es mayuscula y se continua y crea una variable
    let capitalLetter = (codeAscii - 65 + offset) % 26 + 65; // se genera un nuevo codigo ascii segun el offset ingresado
    let newCapitalLetter = String.fromCharCode(capitalLetter); // pasa el nuevo codigo ascii en una letra 
    resultC+=newCapitalLetter; //concatena y sigue con la siguiente letra
    }
    // Mayuscula = Capital Letter


    if (codeAscii >=97 && codeAscii <=122){ //Condicion de las letras minusculas
    let lowerCase = (codeAscii - 97 + offset) % 26 + 97; //se genera nueva posicion de numero ascci segun el offset ingresado
    let newLowerCase = String.fromCharCode(lowerCase); // pasa el nuevo numero a un string o nueva letra
    resultC+=newLowerCase; // concatenar
    }
    //minuscula = Lower Case
        
    if (codeAscii === 32){  //32 es el numero ASCII del espacio
    let space = " ";
    resultC+=space;
    }
    
    if (codeAscii >= 48 && codeAscii <=57){ // rango de numero 1-9
    let number= (codeAscii - 48 + offset) % 10; //se genera nueva posicion del numero segun el offset
    resultC+=number;
    }
             
  }
    return resultC;
 
},

decode: (offset, string) => {
let resultC ="";
         
for (let i = 0; i < string.length; i++){
let codeAscii = string.charCodeAt(i); //codigo ascii
    
    if (codeAscii >=65 && codeAscii <=90){ //si el codigo va de 65 a 90 es mayuscula y se continua y crea una variable
    let mayuscula = (codeAscii + 65 - offset) % 26 + 65; // se genera un nuevo codigo ascii segun el offset ingresado
    let nuevoCodigoAsciiMa = String.fromCharCode(mayuscula); // pasa el nuevo codigo ascii en una letra 
    resultC+=nuevoCodigoAsciiMa; //concatena y sigue con la siguiente letra
    }
    
    if (codeAscii >=97 && codeAscii <=122){ //Condicion de las letras minusculas
    let minuscula = (codeAscii - 97 - offset) % 26 + 97; //se genera nueva posicion de numero ascci segun el offset ingresado
    let nuevoCodigoAsciiMi = String.fromCharCode(minuscula); // pasa el nuevo numero a un string o nueva letra
    resultC+=nuevoCodigoAsciiMi; // concatenar
    }
        
    if (codeAscii === 32){  //32 es el numero ASCII del espacio
    let espacio = " ";
    resultC+=espacio;
    }
    
    if (codeAscii >= 48 && codeAscii <=57){ // rango de numero 1-9
    let numero = (codeAscii - 48 - offset) % 10; //se genera nueva posicion del numero segun el offset
    resultC+=numero;
    }
  }
    return resultC;    
  }
}



 