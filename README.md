# PROYECTO: CIFRADO CÉSAR

La siguiente aplicación tiene como objetivo principal que el usuario logre enviar o recibir mensajes codificados con el método del **Cifrado César** o también conocido como **Cifrado por desplazamiento**.
![enter image description here](http://subirimagen.me/uploads/20181206200905.png)

Esta es una de las técnicas de cifrado más simples y más usadas. Es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra en otra posición del alfabeto, Por ejemplo:

    Si el Mensaje ingresado por el usuario es: "ABC"      Si el Mensaje ingresado por el usuario es: "ABC"             
    El nivel de desplazamiento elegido es: 1              El nivel de desplazamiento elegido es: 2
    Entonces el mensaje cifrado será: "BCD"               Entonces el mensaje cifrado será: "CDE"    

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## PROCESO DE DISEÑO

### Descubrir e investigar

Existe una Necesidad de poder enviar mensajes cifrados, que no puedan ser leídos y comprendidos a simple vista. Uno de los mayores problemas que pueden dificultar dicho proceso para la persona es tener restricción a ciertas aplicaciones muy conocidas ya sea en su lugar de trabajo, estudios, etc. Es por eso que nuestro objetivo principal es la creación de una aplicación web en la cual puedas enviar mensajes cifrados de manera discreta.

### **Síntesis y definición**

En definitiva, hay que pensar y crear un diseño que no llame la atención, que pase desapercibido y las personas que están alrededor del usuario no se den cuenta que está enviando un mensaje.

### **Ideación**

Para que el usuario pase desapercibido a la hora de usar la aplicación de mensajería cifrada nos basaremos en los diseños de las páginas más usadas del 2018, y así idearemos diferentes interfaces para que el usuario pueda elegir según lo que más se adapte a su entorno y le resulte más cómodo para poder enviar mensajes de una manera rápida y efectiva desde una oficina, sala de clase, reunión, etc.

### **Prototipado**

Se realiza un sketch del primer modelo, basándose en la interfaz de un buscador muy conocido para que así no llame la atención cuando se esté ejecutando.

![Primer Sketch papel](http://subirimagen.me/uploads/20181206191033.png)

Luego de recibir diferentes feedback se modifica el diseño y se realiza el prototipo en un programa gráfico (Adobe Photoshop).

![Primer Sketch gráfico](http://subirimagen.me/uploads/20181206191533.jpg)

Luego de diferentes modificaciones el prototipo final es el siguiente:

![Primer Sketch gráfico](http://subirimagen.me/uploads/20181206195609.png)

El diseño  final posee:
-Un botón “Instrucciones” que se abrirá al darle clic y el usuario podrá leer y aclarar la funcionalidad de la página. La ventana podrá cerrarse dándole clic en una “x” o en cualquier lugar fuera de la ventana.

-Icono de interrogación para recordarle al usuario que solo use números en el nivel de desplazamiento.

-Un link para ocultar que va a direccionar a la página similar.


Prototipos de otros diseños (Aún solo ideas para seguir mejorando y agregando )


### **Testeo con usuarios**

Experiencia de usuario: 

Imagina que estás en tu oficina o lugar de estudios y tienes prohibido ingresar a ciertas páginas de mensajería, así que usas la siguiente aplicación para cifrar un mensaje y enviarlo siguiendo las siguientes instrucciones:

- [ ] Escribe el mensaje que quieres cifrar.

- [ ] Elige el número de desplazamiento, esto indica cuántos espacios se moverá la letra para cifrarla (Ejemplo: Si tu mensaje es ABC y el desplazamiento es 1 tu mensaje será BCD, o sea que todas las letras se correrán en un espacio).

- [ ] Dale clic al botón cifrar.

- [ ] Copia y envía tu mensaje (Envíalo directo ingresando email del destinatario).

Al testearlo con diferentes personas pude entender ciertos problemas que se generan al usuario: tuve que ser más específica y dar ejemplos en las instrucciones, además la mayoría se complica al momento de seleccionar copiar, cortar o enviar el mensaje por lo que debemos corregir y hacer ese proceso de enviado mas fácil.

### Historia de Usuario

Yo como trabajador de oficina y estudiante deseo poder enviar mensajes cifrados de forma rápida, fácil y segura sin la necesidad de abrir aplicaciones conocidas que puedan llamar la atención desde mis dispositivos, usando diseños similares a páginas o buscadores cotidianos y así pasar lo más inadvertido posible a la hora de enviar un mensaje.

## Organizacion del proyecto:

Tablero trello: https://trello.com/b/YmFUplXP/proyecto-1


### Parte Opcional: "Hacker edition"
* [ ] 
* [ ] 
* [ ] 
