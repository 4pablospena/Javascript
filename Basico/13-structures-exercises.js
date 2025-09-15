// 1. Crea un array que almacene cinco animalees. 

let animales = ["perro" , "gato", "jirafa", "cobaya", "delfin"]
console.log(animales)

// 2. Añaade dos más. Uno al principio y otro al final.

animales.unshift("megalodon")
animales.push("zebra")

console.log(animales)

// 3. Elimina el que se encuentra en tercera posición.

animales.splice(2,1)
console.log(animales)

// 4. Crea un set que almacene cinco libros.

let book = new Set (["book1", "book2", "book3", "book4", "book5"])
console.log(book)


// 5. Añade dos más. Uno de ellos repetido.

book.add("book6", "book1")
console.log(book)

// 6. Elimina uno concreto a tu elección.

book.delete("book1")
console.log(book)

// 7. Crea un mapa que asocie el número del mes a su nombre.

let mes = new Map ([
    [1 , "Enero"],
    [2 , "Febrero"],
    [3 , "Marzo"],
    [4 , "Abril"],
    [5 , "Mayo"],
    [6 , "Junio"],
    [7 , "Julio"],
    [8 , "Agosto"],
    [9 , "Septiembre"],
    [10 , "Octubre"],
    [11 , "Noviembre"],
    [12 , "Diciembre"]
])
console.log(mes)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.

console.log(mes.has(5))
console.log(mes.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano.

const mesesVerano = ["Junio", "Julio", "Agosto"]

mes.set("verano" , mesesVerano)
console.log(mesesVerano)
console.log(mes)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.

let cadena = ["Paco", "Pedro", "Pio", "Pol", "Pucela"];
console.log("Array:", cadena);

// Transformar a Set
let conjunto = new Set(cadena);
console.log("Set:", conjunto);

// Crear el Map y almacenar el Set bajo una clave
let mapa = new Map();
mapa.set("nombres", conjunto);

console.log("Map:", mapa);

// Acceder al Set desde el Map
console.log("Valores en la clave 'nombres':", mapa.get("nombres"));



