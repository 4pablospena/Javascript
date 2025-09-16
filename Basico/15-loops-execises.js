// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los números del 1 al 20.

for (let n = 1; n <= 20; n++ ) {
    console.log(`n = ${n}` )
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.

let suma = 0

for (let n = 1; n <= 100; n++ ) {
    suma += n
} console.log( `suma = ${suma}` )


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50.

for (let n = 1; n <= 50; n++ ){
    if (n % 2 === 0 ){
        console.log (`${n} es un numero par`)
    }
} 

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.

let nombres = ["Pablo", "Juan", "Nacho", "Nana", "Lucas" ]

for (let valor of nombres) {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto.

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

// 8. Usa un bucle para invertir una cadena de texto.

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.
