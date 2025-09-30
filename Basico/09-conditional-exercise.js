// 1. Imprime por consola tu nombre si una variable toma su valor.

    let myName = "Pablo"

    if (myName == "Pablo"){
        console.log("Mi nombre es Pablo")
    }else{
        console.log("Nombre no coincide")
    }

// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide con unos establecidos.

    let user = "usuario"
    let password = "contraseña"

    if(user == "usuario" && password == "contraseña"){
        console.log("usuario y contraseña correctos")
    }else{
        console.log("usuario o contraseña incorrectos")
    }

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje.

    let number

    if (number == 0){
        console.log("el numero es 0")
    }else if (number > 0){
        console.log("el numero es positivo")
    } else {
        console.log("el numero es negativo")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan.

    let age

    if (age >= 18){
        console.log("Es mayor de edad")
    } else {
        console.log("No es mayor de edad, le faltan " + (18 - age) + " años.")
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .

    let edad = 18  

    const etapa = edad >= 18 ? "Adulto" : "Menor"
        console.log(etapa)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".

    let mes = 9

    if (mes == 12 || mes == 1 || mes == 2) {
        console.log("Invierno")
    } else if (mes >= 3 && mes <= 5) {
        console.log("Primavera")
    } else if (mes >= 6 && mes <= 8) {
        console.log("Verano")
    } else if (mes >= 9 && mes <= 11) {
        console.log("Otoño")
    } else {
        console.log("Mes inválido");
    }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.

    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
        console.log("El mes tiene 31 días");
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        console.log("El mes tiene 30 días");
    } else if (mes == 2) {
        console.log("El mes tiene 28 días (29 si es año bisiesto)");
    } else {
        console.log("Mes inválido");
    }

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

    let lang = "es"
    
    switch(lang){
        case "es":
            console.log("¡Hola!")
            break
        case "en":
            console.log("Hello!")
            break
        case "po":
            console.log("Olá!")
            break
        case "fr":
            console.log("Bonjour!")
            break
        case "de":
            console.log("Hallo!")
            break
        default:
            console.log("Idioma no reconocido")
    }

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

    switch(mes){
        case 1:
        case 2:
        case 12:
            console.log("Invierno")
            break
        case 3:
        case 4:
        case 5:
            console.log("Primavera")
            break
        case 6:
        case 7:
        case 8:
            console.log("Verano")
            break
        case 9:
        case 10:
        case 11:
            console.log("Otoño")
            break
        default:
            console.log("Mes inválido")
    }

// 10. Usa un switch para hacer de nuevo el ejercicio 7.

switch(mes){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("El mes tiene 31 días")
            break
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("El mes tiene 30 días")
            break
        case 2:
            console.log("El mes tiene 28 días (29 si es año bisiesto)")
            break
        default:
            console.log("Mes inválido")
    } 