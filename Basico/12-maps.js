// Map

// coleccion de elementos unicos. Par clave-valor (key-value)
// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicializacion

myMap = new Map([
    ["name", "pablo"],
    ["email", "4pablosuarezpena@gmail.com"],
    ["age", 34]
])

console.log(myMap)

// METODOS

// set : Si no hay clave la añade, si hay la actualiza.

myMap.set("alias", "pablospena")
myMap.set("name", "Pablo Suarez")
console.log(myMap)

// set : recuperar el valor,

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has: clave existe?

console.log(myMap.has("name"))
console.log(myMap.has("surname"))

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size 
console.log(myMap.size)

// delete:

myMap.delete("email")
console.log(myMap)

// clear: limpiar el map 

myMap.clear()

console.log(myMap)

