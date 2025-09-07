// operadores. Relaciones, operaciones con los valores.
 
// Operadores aritméticos.

    let a = 4
    let b = 2

    console.log( a + b) // Suma
    console.log( a - b) // Resta
    console.log( a * b) // multiplicación
    console.log( a / b) // división

    console.log( a % b) // modulo,  resto de división
    console.log( a ** b) // exponente

    a++  // autoincremento
    console.log(a)

    b--  // autodecremento
    console.log(b)

// Operadores de asignación.

    let myVariable = 2  
    console.log (myVariable)

    myVariable += 5  // auto suma 5 = 7
    console.log (myVariable)

    myVariable -= 1  // auto resta 1 = 6
    console.log (myVariable)

    myVariable *= 2  // auto multiplicación 2 = 12 
    console.log (myVariable)

    myVariable /= 2  // auto división 2 = 6
    console.log (myVariable)

    myVariable %= 4  // auto modulo 4 = 2
    console.log (myVariable)

    myVariable **= 2  // auto exponente 2 = 4
    console.log (myVariable)


// Operadores de comparación.

    console.log(a > b) // a mayor que b
    console.log(a < b) // a menor que b
    console.log(a >= b) // a mayor o igual que b
    console.log(a <= b) // a menor o igual que b
    console.log(a == b) // a es igual que b
    console.log(a == 6) // a es igualdad por valor 6
    console.log(a == "6") // a es igualdad por valor 6 (reconoce string)
    console.log(a == a)
    console.log(a === a) // a es igualdad por identidad (tipo y valor)
    console.log(a === 6)
    console.log(a === "6")
    console.log(a != 6)
    console.log(a !== "6")
    

    // Truthy values (Valores verdaderos)
    // Todos los numeros positivos y negativos, menos el cero
    // Todas las cadenas de texto menos las vacias
    // El boolean true

    //Falsy values (valores falsos)
    // 0
    // 0n
    // null
    // undefined
    // NaN - not a number
    // El boolean false
    // Cadenas de texto vacias


// Operadores logicos

    //and (&&)
    console.log(5 > 10 && 15 > 20)
    console.log(5 < 10 && 15 < 20)
    console.log(5 < 10 && 15 > 20)

    //or (||)
    console.log(5 > 10 || 15 > 20)
    console.log(5 < 10 || 15 < 20)
    console.log(5 < 10 || 15 > 20)

    //not (!)
    console.log(!(5 > 10 && 15 > 20))
    console.log(!(5 < 10 && 15 < 20))
    console.log(!(5 < 10 && 15 > 20))
    console.log(!(5 > 10 || 15 > 20))
    console.log(!(5 < 10 || 15 < 20))
    console.log(!(5 < 10 || 15 > 20))


//Operadores ternarios: permiten escribir condicionales.
    const isRaining = false

    isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")
    // si es true se cumple la primera parte de la condicion, si no se cumple la otra.
