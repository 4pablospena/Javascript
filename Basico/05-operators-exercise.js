// 1. Crea una variable para cada operación aritmética.

    let x = 4
    let y = 3

    let suma = x + y
    let resta = x - y
    let multica = x * y
    let division = x / y
    let modulo = x % y
    let exponencial = x ** y
    let autoincremento = x++
    let autodecremento = y--

    // imprimo por panatalla para comprobarlo.
            console.log(suma)
            console.log(resta)
            console.log(multica)
            console.log(division)
            console.log(modulo)
            console.log(exponencial)
            console.log(autodecremento)
            console.log(autoincremento)

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las
//  operaciones aritméticas.

    let variableAsig = 4 
    console.log(variableAsig)

    variableAsig += 2
    console.log(variableAsig)
    variableAsig -= 3
    console.log(variableAsig)
    variableAsig *= 2
    console.log(variableAsig)
    variableAsig /= 3
    console.log(variableAsig)
    variableAsig %= 3
    console.log(variableAsig)
    variableAsig **= 3
    console.log(variableAsig) 

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación.

    let a = 4
    let b = 3 

    console.log( a > b )
    console.log( b < a )
    console.log( a != b )
    console.log( a == 4 )
    console.log( a === 4 )

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.

    console.log( a < b )
    console.log( b > a )
    console.log( a === b )
    console.log( a != 4 )
    console.log( b === 4 )

// 5. Utiliza el operador lógico and.

    console.log(a == 4 && a === 4 )
    console.log(a < b && b > a )
    console.log(a == 4 && a < b)

// 6. Utiliza el operador lógico or.

    console.log(a == 4 || a === 4 )
    console.log(a < b || b > a)
    console.log(a == 4 || a < b)

// 7. Combina ambos operadores lógicos.

    console.log(a == 4 && a === 4 || b < a  )
    console.log(b === 4 && a === 4 || b < a  )
    console.log(b === 4 && a === 4 || b > a  )

// 8. Añade alguna negación.

    console.log(!(a == 4 && a === 4 || b < a  ))
    console.log(b === 4 && a === 4 ||!( b < a  ))
    console.log(!(b === 4 && a === 4) || b > a  )

// 9. Utiliza el operador ternario.

    let isAbierto = true
    isAbierto ? console.log("puedes pasar") : console.log("no puedes pasar")

// 10. Combina operadores aritméticos, de comparación y lógicas.

    let c = 3
    let d = 5

    console.log((c + d) == ( d + c)) && (d > c)
    console.log((d--) == ( c++)) || (c >= d)