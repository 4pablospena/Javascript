// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.

function sum (x,y) {
    console.log (x + y)
}
sum ( 2, 9)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.

let numeros = [ 1, 2, 3, 4, 5]

function maximoNumero(numeros) {
  if (numeros.length === 0) return null;

  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i]
    }
  }
  return mayor
}

let resultado = maximoNumero(numeros)
console.log("El número mayor es:", resultado)


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.

let frase = "PablitO clavo un clAvito, que clavito clavo PablIto"
frase = frase.toLowerCase()

function numeroVocales (frase){

    const vocales = "aeiou" 
    let contador = 0 
        
        for (let i = 0; i < frase.length; i++){
        if (vocales.includes(frase[i])){
            contador++
            }
        }
    return contador
}

let resultado2 = numeroVocales(frase)
console.log("El número mayor de vocales es :", resultado2)


// 4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas.


function mayus(cadena){
    let cadena2 = []

        for(let i = 0 ; i < cadena.length ; i++){
            cadena2.push(cadena[i].toUpperCase())
        }
        return cadena2
}

let pablo = ["p","a","b","l","o"]
let resultado3 = mayus(pablo)
console.log(resultado3)


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

function primo (numero){
    if (numero <= 1)
        return false

    for (let i = 2 ; i < numero; i++){
        if ( numero % i === 0){
            return false
        }
    }
    return true
}

console.log(primo(3))
console.log(primo(4))
console.log(primo(10))
console.log(primo(13))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

function elementosComunes(arr1, arr2) {
  let resultado = []

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !resultado.includes(arr1[i])) {
        resultado.push(arr1[i])
        }
    }
    return resultado
}

let array1 = [1, 2, 3, 4]
let array2 = [3, 4, 5, 6]

console.log(elementosComunes(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

function pares(n){
    let suma = 0

    for (let i = 0 ; i < n.length ; i++) {
        if (n[i] % 2 === 0){
            suma += n[i]
        }
    }return suma
}

let n = [1, 2, 3, 4, 5 , 6 , 7, 8 ]
console.log(pares(n))



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

function cuadrados(m){
    let listaCuadrdado = []

    for (let i = 0 ; i < m.length ; i++) {
        listaCuadrdado.push(n[i] ** 2)    
    }
    return listaCuadrdado
 }


let m   = [1, 2, 3, 4, 5 , 6 , 7, 8 ]
console.log(cuadrados(m))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

function inversa(texto) {
  let palabras = texto.split(" ")
  let palabrasInvertidas = palabras.reverse()
  return palabrasInvertidas.join(" ")
}

let texto = "Pablo Suarez Peña"
console.log(inversa(texto))


// 10. Crea una función que calcule el factorial de un número dado.

function factorial(number){

    if (number < 0) return null

    let numFac = 1

    for (let i = 1; i <= number ; i++){
        numFac *= i
    }
    return numFac
}

console.log(factorial(5))