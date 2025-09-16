// Loops o bucles

// Estructura de control, revision de condiciones.
// Repeticion se codigo cuando condicion verdadera.
// Tareas repetitivas.
// Ejecutar acciones hasta que se cumpla una condicion especifica.



// for : Ejecucion segun se lanza, condicion evaluada cada iteracion. 
// siempre que sea true se ejecuta.
// si no se true(false) finaliza el loop.

for(let i = 0 ; i < 5 ; i++){
    console.log(`Hola peña ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0 ; i < numbers.length ; i++){
    console.log(`Elemento: ${numbers[i]}`)
}


// while : evaluacion antes de cada iteracion.
// condicion externa, se cumple, ejecuto, no finaliza.

let i = 0
while (i < 5 ) { 
     console.log(`Hola peña ${i}`)
     i++
}

// do while : ejecucion al menos una vez

i = 6
do {
    console.log(`Hola peña ${i}`)
    i++
} while (i <5 )


// for of

myArray = [1, 2, 3, 4]
mySet = new Set(["Pablo", "Suarez", "Peña", 34, true, "4pablosuarezpena@gmail.com"])
myMap = new Map([
    ["name", "pablo"],
    ["email", "4pablosuarezpena@gmail.com"],
    ["age", 34]
])

for (let valor of myArray) {
    console.log(valor)
}
for (let valor of mySet) {
    console.log(valor)
}
for (let valor of myMap) {
    console.log(valor)
}


// buenas practicas

// break (termina el bucle antes de tiempo cuando se cumple una condicion)
// continue ( salta la iteracion actualy pasa a la siguiente)

for ( let i = 0; i < 10; i++){
    if ( i == 5 ){
        continue
    } else if ( i == 6){
        break
    }
    console.log(`Hola ${i}`)
}