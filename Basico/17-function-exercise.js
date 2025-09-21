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


// 4. Crea una funciÃ³n que reciba un array de strings y devuelva un nuevo array con las strings en mayÃºsculas.


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


// 5. Crea una funciÃ³n que reciba un nÃºmero y devuelva true si es primo, y false en caso contrario.

// 6. Crea una funciÃ³n que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

// 7. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva la suma de todos los nÃºmeros pares.

// 8. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva un nuevo array con cada nÃºmero elevado al cuadrado.

// 9. Crea una funciÃ³n que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

// 10. Crea una funciÃ³n que calcule el factorial de un nÃºmero dado.