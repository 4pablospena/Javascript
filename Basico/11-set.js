//set

// Declaracion

let mySet = new Set()

console.log(mySet)
// Inicialización

mySet = new Set(["Pablo", "Suarez", "Peña", 34, true, "4pablosuarezpena@gmail.com"])

console.log(mySet)

// metodos comunes

// add & delete: No hay acceso directo a los indices.

mySet.add("Gijon ")
console.log(mySet)

mySet.delete("Gijon ")
console.log(mySet)

console.log(mySet.delete("Pablo"))
console.log(mySet.delete(3))

console.log(mySet)

//has (exite)

console.log(mySet.has("Pablo"))
console.log(mySet.has("Suarez"))

console.log(mySet)

// size

console.log(mySet.size)

// convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// convertir un array a set

mySet = new Set(myArray)
console.log(mySet)


// no admite duplicados. (por eso no indexa)

mySet.add("4pablosuarezpena@gmail.com")
mySet.add("4pablosuarezpena@gmail.com")
mySet.add("4pablosuarezpena@gmail.com")
mySet.add("4pablosuarezpena@gmail.com")
mySet.add("4pablosuarezpena@gmail.com")
mySet.add("4pablosuarezpena@gmail.com")
console.log(mySet)