// estructura de datos : almacenar varios valores en una sola
// variable.


// array : Manejo de listados de elementos.
    // Listado es ordenado.

// Declaración

let myArray = []        //recomendado.
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Pablo", "Suarez", "Peña", 34, true]
myArray2 = new Array("Pablo", "Suarez", "Peña", 34, true)

console.log(myArray)
console.log(myArray2)


// Asignacion de valores.

myArray = new Array(3)
myArray[0] = "Pablo"
myArray[1] = "Suarez"
myArray[2] = "Peña"
console.log(myArray)

// Métodos comunes

myArray = []

// Push y Pop

myArray.push("Pablo")
myArray.push("Suarez")
myArray.push("Peña")
myArray.push(34)

console.log(myArray)

console.log(myArray.pop())
console.log(myArray)

// shift (Elimina el primer elemento de la array.)

console.log(myArray.shift())
console.log(myArray)

// Unshift (Añade elementod al inicio del array.)
myArray.unshift("Pablo")
console.log(myArray)

// length : longitud del array.

console.log(myArray.length)

// clear. 

myArray = []    // incializar de nuevo
myArray.length = 0  // Dar longitud cero al array
console.log(myArray)

//slice : Porciones de array

myArray.push("Pablo", "Suarez", "Peña", 34, true)

let myNewArray = myArray.slice(1, 2)
console.log(myNewArray)

//splice : Porcion pero borra lo que indicamos. (indice, cantidad)

myArray.splice(1, 2)
console.log(myArray)