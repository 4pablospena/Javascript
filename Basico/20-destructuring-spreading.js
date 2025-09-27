let myArray = [1, 2, 3, 4]

let person = {
    name: "Pablo",
    age: 33,
    alias: "pablospena4"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)


// Desestructuracion.
// Permite extraer valores de arrays u objetos de manera rapida y directa.

let [myValue0 , myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray // predeterminados a 0 si no hay valor.
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos de array

let [myValue10,,, myValue13] = myArray 
console.log(myValue10)
console.log(myValue13)

// sintaxis objetos

let { name, age , alias} = person
console.log(name)
console.log(age)
console.log(alias)

// sintaxis objetos con valores predetemidos.

let { name2, age2 , alias2, email ="pablos@gmail.com"} = person
console.log(name2)  // no existe
console.log(age2) // no existe
console.log(alias2) // no existe 
console.log(email)

// sintaxis objetos con nuevos nombres de variable

let { name: name3, age: age3 , alias: alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Propagación
// facilita la combinación, copia y expansión de arrays y objetos de manera flexible.


