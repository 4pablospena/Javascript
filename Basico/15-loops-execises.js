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

let cadena = "esto es una cadena de texto."
let count = 0
let vocales = "aeiouAEIOU"

for (let i = 0; i <=cadena.length; i++){
    if(vocales.includes(cadena[i])){
        count++;
    }
}
console.log( "Numero de vocales :", count )

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.

let number = [ 1, 2, 3, 4, 4, 5]
let mult = 1

for ( let i = 0; i < number.length; i++ ){
    mult = mult * number[i]
}
console.log( `El producto es: ${mult}` )


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

let multiplo = 5

console.log(`Tabla del ${multiplo} :`)
for (let i = 0 ; i <= 10; i++ ){
    console.log(i * multiplo)
}

// 8. Usa un bucle para invertir una cadena de texto.

let texto = "Hola Mundo"
let invertida = ""

for (let i = texto.length - 1; i >= 0; i--) {
  invertida = invertida + texto[i];
}

console.log("Texto invertido:", invertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.

let n1 = 0;
let n2 = 1;
let siguiente;

console.log(n1); // primer número
console.log(n2); // segundo número

for (let i = 3; i <= 10; i++) {
  siguiente = n1 + n2;   // suma de los dos anteriores
  console.log(siguiente);
  
  // avanzar en la secuencia
  n1 = n2;
  n2 = siguiente;
}


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.

let numeros10 = [1, 2, 3, 12, 4, 13, 493, 3, 4];
let mayoresDiez = []; // nuevo array

for (let i = 0; i < numeros10.length; i++) {
    if (numeros10[i] > 10) {
        mayoresDiez.push(numeros10[i]); // añadir al nuevo array
    }
}

console.log(mayoresDiez); // [12, 13, 493]
