// 1. Usa desestructuración para extraer los dos primeros elementos de un array.

    let array = [ 1, 2, 3, 6, 9, 10]
    let [array1 , array2 ] = array

    console.log(array1)
    console.log(array2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable.

    let arrayB = [ 1, 2]
    let [arrayB1 , arrayB2 , arrayB3 = 4] = arrayB

    console.log(arrayB1)
    console.log(arrayB2)
    console.log(arrayB3)

// 3. Usa desestructuración para extraer dos propiedades de un objeto.

    let persona = {
        nombre : "Pablo",
        edad : 33,
        altura : 183
    }

    let {nombre , edad , altura  } = persona
        console.log(nombre)
        console.log(edad)
        console.log(altura)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y así­gnalas a nuevas variables con nombres diferentes.

    let persona2 = {
        nombre : "Pablo",
        edad : 33,
        altura : 183
    }

    let {nombre : nombrePersona, edad : edadPersona , altura : alturaPersona } = persona2
        console.log(nombrePersona)
        console.log(edadPersona)
        console.log(alturaPersona)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado.

    let animal = {
        nombre : "Gato",
        tipo : "Mamifero",
        raza : {
            nombre: "Siames",
            años : 15,
            peso: 5
        }
    }

    let {nombre : nombreAnimal, raza : { nombre : nombreRaza , años : añosRaza} } = animal
        console.log(nombreAnimal)
        console.log(nombreRaza)
        console.log(añosRaza)

// 6. Usa propagación para combinar dos arrays en uno nuevo.

    let array3 = [1, 2, 4, 6]
    let array4 = [7, 8, 40, 1]

    let array5 = [...array3, ...array4]
    console.log(array5)

// 7. Usa propagación para crear una copia de un array.

    let array6 = [...array5]
    console.log(array6)

// 8. Usa propagación para combinar dos objetos en uno nuevo.

    let persona3 = {
        ciudad : "Oviedo",
        pais: "España",
        peso: 80
    }
    
    let persona4 ={ ...persona2,...persona3} 
    console.log(persona4)

// 9. Usa propagación para crear una copia de un objeto.

    let persona5 = { ...persona4}
    console.log(persona5)

// 10. Combina desestructuración y propagación.

// Objeto original

    let persona6 = {
    nombre6: "Pablo",
    edad6: 33,
    ciudad6: "Oviedo"
    }

    let { nombre6, ...resto } = persona

        console.log(nombre6)
        console.log(resto)


    let persona7 = {
        ...resto,
        nombre: "Lucas" 
    };

    console.log(persona7)
