// Operadores:

// Crea un programa que reciba dos números y muestre:La suma ,La resta
// La multiplicación , La división ,El resto de la división 

    let a = 8
    let b = 4

        console.log(a + b)
        console.log(a - b)
        console.log(a * b)
        console.log(a / b)
        console.log(a % b)

// Indica si un numero es par o impar.

    let c = 8

        if( c % 2 === 0){
            console.log( `${c} es par`)
        } else {
            console.log( `${c} es impar`)
        }


// Crea un programa que calcule el precio final de un producto aplicando un 10% de descuento
// si el precio es mayor de 100.

let precio = 190

if (precio >= 100){
    console.log(precio - (precio * 10)/100)
}else{
console.log(precio)
}


