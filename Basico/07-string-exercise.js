// 1. Concatena dos cadenas de texto.
let nombre = "Pablo"
let apellido1 = "Suarez"

console.log("Mi nombre es: " + nombre + " " + apellido1 + " Pena")

// 2. Muestra la longitud de una cadena de texto.
console.log(nombre.length)
console.log(apellido1.length)

// 3. Muestra el primer y último carácter de un string.

console.log(nombre[0])
console.log(nombre[4])
console.log(apellido1[0])
console.log(apellido1[5])

// 4. Convierte a mayusculas y minusculas un string.

console.log(nombre.toUpperCase())
console.log(apellido1.toUpperCase())

console.log(nombre.toLowerCase())
console.log(apellido1.toLowerCase())

// 5. Crea una cadena de texto en varias lí­neas.

let parrafo = `Con diez cañones
por banda,
viento en popa
a toda vela`

// 6. Interpola el valor de una variable en un string.

console.log(`Hola ${nombre} ${apellido1}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

let frase = "Hola esta frase lleva espacios"
console.log(frase.replace(" ", "-"))
console.log(frase.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

console.log(frase.includes("Hola"))
console.log(frase.includes("esta"))
console.log(frase.includes("frase"))
console.log(frase.includes("lleva"))
console.log(frase.includes("espacios"))
console.log(frase.includes("guion"))

// 9. Comprueba si dos strings son iguales.

let frase1 = "Hola esta frase no lleva guiones"
let frase2 = "Hola esta frase lleva espacios"
console.log( frase == frase1)
console.log( frase2 == frase)

// 10. Comprueba si dos strings tienen la misma longitud.

console.log(frase1.length == frase2.length)
console.log(frase.length == frase2.length)