// Strings

let myName = "Pablo"

// concatenación de cadenas de texto.
let greeting = "Hola, " + myName + "!"

console.log(greeting)
console.log(typeof greeting)

// Longitud de la cadena de texto.
console.log(greeting.length)

// Acceso a caracteres.
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[2])
console.log(greeting[3])
console.log(greeting[11])
console.log(greeting[12])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

console.log(greeting.indexOf("Pablo")) // Donde encontrarlo
console.log(greeting.indexOf("Hola"))

console.log(greeting.includes("Pablo")) // Lo incluye?
console.log(greeting.includes("Hola")) 
console.log(greeting.includes("Pena")) 

console.log(greeting.slice(0,10))

console.log(greeting.replace("Pablo", "Pablo Suarez"))

// Template literals (plantillas literales) ``

let mensaje = `Mensaje
con cadenas   
de texto
en varia lineas`

console.log(mensaje)

console.log(`Hola, ${myName}!`)