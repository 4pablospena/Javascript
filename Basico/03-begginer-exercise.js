// 1. Escribe un comentario en una línea.

        // Ejercicio 1. Begginer-exercise

// 2. Escribe un comentario en varias lí­neas.

        /*
            Ejercicio 2.
            Begginer - exercise 
        */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.

        // String
        let nombre = "Pablo"
        let apellido1 = 'Suarez'
        let apellido2 = `Peña`

        // Number
        let age = 34

        // Bolean
        let isGirl = false
        let isBoy = true

        // Symbol
        let dni = Symbol("52343434")

        //undefinedValue
        let notaExamen

        // null
        let calificacion = null

        // BigInt 
        let numeroEnorme = (123456789012345678901234567890)
        let numeroEnorme2 = 123456789012345678901234567890n


// 4. Imprime por consola el valor de todas las variables.

        console.log(nombre)
        console.log(apellido1)
        console.log(apellido2)

        console.log(age)

        console.log(isBoy)
        console.log(isGirl)

        console.log(dni)

        console.log(notaExamen)
        console.log(calificacion)

        console.log(numeroEnorme)
        console.log(numeroEnorme2)

// 5. Imprime por consola el tipo de todas las variables.

        console.log(typeof nombre)
        console.log(typeof apellido1)
        console.log(typeof apellido2)

        console.log(typeof age)

        console.log(typeof isBoy)
        console.log(typeof isGirl)

        console.log(typeof dni)

        console.log(typeof notaExamen)
        console.log(typeof calificacion)

        console.log(typeof numeroEnorme)
        console.log(typeof numeroEnorme2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo.

        // String
        nombre = "Ana"
        apellido1 = 'Fernandez'
        apellido2 = `San Julian`

        // Number
        age = 30

        // Bolean
        isGirl = true
        isBoy = false

        // Symbol
        dni = Symbol("12923873")

        //undefinedValue
        notaExamen

        // null
        calificacion = null

        // BigInt 
        numeroEnorme = (123456789012345678901234567890273672263527)
        numeroEnorme2 = 123456789012345678901234567890237382787827n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo.

        // String 
        nombre = 9
        apellido1 = true
        apellido2 = null

        // Number
        age = "pepin"

        // Bolean
        isGirl = Symbol("12923873")
        isBoy = Symbol("129238732")

        // Symbol
        dni

        //undefinedValue
        notaExamen = (123456789012345678901234567890273672263527)

        // null
        calificacion 

        // BigInt 
        numeroEnorme = `pepo`
        numeroEnorme2 = 'pepa'

        //las variables declaradas con let en JavaScript pueden cambiar tanto de valor como de tipo.

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.

        const marca = "Ferrari"
        const año = 1991
        const isfast = false
        const matricula = Symbol("3311HCD")
        const cilindrada = undefined
        const kilometros = null 
        const bastidor = (123456789012345678901234567890)

// 9. A continuacion, modifica los valores de las constantes.

        marca = "Audi"
        año = 2009
        isfast = false
        matricula = Symbol("3672BJF")
        cilindrada
        kilometros = 123234
        bastidor = (12345678901234567892345501234567890)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse 
        
        /*
            /Users/pablospena/JavaScript/hola-javascript/Basico/03-begginer-exercise.js:145
                    marca = "Audi"
                        ^

            TypeError: Assignment to constant variable.
                at Object.<anonymous> (/Users/pablospena/JavaScript/hola-javascript/Basico/03-begginer-exercise.js:145:15)
                at Module._compile (node:internal/modules/cjs/loader:1706:14)
                at Object..js (node:internal/modules/cjs/loader:1839:10)
                at Module.load (node:internal/modules/cjs/loader:1441:32)
                at Function._load (node:internal/modules/cjs/loader:1263:12)
                at TracingChannel.traceSync (node:diagnostics_channel:322:14)
                at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
                at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
                at node:internal/main/run_main_module:36:49

            Node.js v22.19.0
            
            Una variable declarada con const no puede recibir un nuevo valor después de su inicialización.
         */