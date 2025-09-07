// Tipos de datos primitivos, datos basicos e inmutables.

// Cadena de texto : String
let nombre = "Pablo Suarez Peña"
let alias = 'Pablospena'
let email = `pablospena@gmail.com`

// Numeros: ( number ) Entero , Decimal
let age = 33
let height = 1.83 

// Boleanos: Bolean
let isStudent = true
let isTeacher = false

// Undefined : Dato no definido
let undefinedValue
console.log(undefinedValue)

// Null: Representa ausencia de valor, intencionada.
let nullValue = null

// Symbol: valores unicos que pueden usarse como Id de propiedades.
let mySymbol = Symbol("mysymbol")

//BigInt : numero extremedamente grande que no entra en 64bits
let myBigInt = BigInt(9829898378264873423874538674254286756)
let myBigInt2 = 9829898378264873423874538674254286756n

// typeof: Mostrar tipo de dato.
console.log(typeof nombre)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof isStudent)
console.log(typeof isTeacher)

console.log(typeof age)
console.log(typeof height)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)
