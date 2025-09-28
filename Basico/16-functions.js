// Funciones

/*
    function nombreDeLaFuncion(parámetros) {
        // código a ejecutar
        return resultado; // valor que devuelve (opcional)
    }
*/


// Simple
function myFunc(){
    console.log("Hola función!")
}
myFunc() //llamada a la funcion.


for ( let i = 0 ; i < 5; i++ ){
    myFunc()
}


// con parametros

function myFuncWithParams(name){
    console.log(`¡Hola, ${name}!`)
}
myFuncWithParams("Pablo")
myFuncWithParams("PabloSPena")


// Funciones Anónimas

const myFunc2 = function (name){
    console.log(`¡Hola, ${name}!`)
}
myFunc2("Pablo Suárez")


// arrow Functions

const myFunc3 = (name) =>{
    console.log(`¡Hola, ${name}!`)
}
myFunc3("Pablo Peña")

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc4("Pablo Suárez Peña")


// parametros

function sum(a,b){
    console.log(a + b)
}
sum( 2, 9)

// por defecto

function defaultSum (a = 0 ,b = 0 ){
    console.log(a + b)
}
defaultSum ( 2, 9)
defaultSum ( 2 )
defaultSum ( )
defaultSum (b = 2)

// retorno de valores

function mult(a , b){
    return a * b
}

    console.log(mult(5, 10))


// funcion anidada

function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("Funcion interna")
    }
    intern()
}
extern()

// Funciones de orden superior

function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc4, ("Funcion de Orden superior")) 

// forEach

myArray = [1, 2, 3, 4]
mySet = new Set(["Pablo", "Suarez", "Peña", 34, true, "4pablosuarezpena@gmail.com"])
myMap = new Map([
    ["name", "pablo"],
    ["email", "4pablosuarezpena@gmail.com"],
    ["age", 34]
])

myArray.forEach((value) => console.log(value))
mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))