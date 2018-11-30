window.cipher = {
    encode: (offset, string) => {
      let resultC = "";
  
  for (let i = 0; i < string.length; i++){
    let codigoAscii = string.charCodeAt(i); //codigo ascii
    
        if (codigoAscii >=65 && codigoAscii <=90){ //si el codigo va de 65 a 90 es mayuscula y se continua y crea una variable
          let mayuscula = (codigoAscii - 65 + offset) % 26 + 65; // se genera un nuevo codigo ascii segun el offset ingresado
          let nuevoCodigoAsciiMa = String.fromCharCode(mayuscula); // pasa el nuevo codigo ascii en una letra 
          resultC+=nuevoCodigoAsciiMa; //concatena y sigue con la siguiente letra
        }
    
        if (codigoAscii >=97 && codigoAscii <=122){ //Condicion de las letras minusculas
          let minuscula = (codigoAscii - 97 + offset) % 26 + 97; //se genera nueva posicion de numero ascci segun el offset ingresado
          let nuevoCodigoAsciiMi = String.fromCharCode(minuscula); // pasa el nuevo numero a un string o nueva letra
          resultC+=nuevoCodigoAsciiMi; // concatenar
        }
        
        if (codigoAscii === 32){  //32 es el numero ASCII del espacio
          let espacio = " ";
          resultC+=espacio;
        }
    
        if (codigoAscii >= 48 && codigoAscii <=57){ // rango de numero 1-9
          let numero = (codigoAscii - 48 + offset) % 10; //se genera nueva posicion del numero segun el offset
          let nuevoCodigoAsciiNu = String.fromCharCode(numero); // pasa el nuevo numero a otor numero
          resultC+=numero;
        }
             
          }
          return resultC;
 
    

    },

    decode: (offset, string) => {

      let resultC ="";
         for (let i = 0; i < string.length; i++){
  
          let codigoAscii = string.charCodeAt(i); //codigo ascii
    
        if (codigoAscii >=65 && codigoAscii <=90){ //si el codigo va de 65 a 90 es mayuscula y se continua y crea una variable
          let mayuscula = (codigoAscii + 65 - offset) % 26 + 65; // se genera un nuevo codigo ascii segun el offset ingresado
          let nuevoCodigoAsciiMa = String.fromCharCode(mayuscula); // pasa el nuevo codigo ascii en una letra 
          resultC+=nuevoCodigoAsciiMa; //concatena y sigue con la siguiente letra
        }
    
        if (codigoAscii >=97 && codigoAscii <=122){ //Condicion de las letras minusculas
          let minuscula = (codigoAscii - 97 - offset) % 26 + 97; //se genera nueva posicion de numero ascci segun el offset ingresado
          let nuevoCodigoAsciiMi = String.fromCharCode(minuscula); // pasa el nuevo numero a un string o nueva letra
          resultC+=nuevoCodigoAsciiMi; // concatenar
        }
        
        if (codigoAscii === 32){  //32 es el numero ASCII del espacio
          let espacio = " ";
          resultC+=espacio;
        }
    
        if (codigoAscii >= 48 && codigoAscii <=57){ // rango de numero 1-9
          let numero = (codigoAscii - 48 - offset) % 10; //se genera nueva posicion del numero segun el offset
          let nuevoCodigoAsciiNu = String.fromCharCode(numero); // pasa el nuevo numero a otor numero
          resultC+=numero;
        }
             
          }
        return resultC;    
        
    }
}



 