// 1. Crea un objeto con 3 propiedades.

let car = {
    marca:"Audi",
    año: 2010,
    modelo: "A4"
}
console.log(car)

// 2. Accede y muestra su valor.

console.log(car.marca)
console.log(car.año)
console.log(car.modelo)

// 3. Agrega una nueva propiedad.

car.matricula = "2342GH"
console.log(car)
console.log(car.matricula)

// 4. Elimina una de las 3 primeras propiedades.

delete car.año
console.log(car)

// 5. Agrega una función e invócala.

let car2= {
    marca:"Audi",
    año: 2010,
    modelo: "A4",
    arrancar : function() {
        console.log("El coche arranca")
    }
}
car2.arrancar()

// 6. Itera las propiedades del objeto.


for(let key in car2){
    console.log(key + ":" + car2 [key])
}

// 7. Crea un objeto anidado.

let car3= {
    marca:"Audi",
    año: 2010,
    modelo: "A4",
    arrancar : function() {
        console.log("El coche arranca")
    },
    ruedas:{
        tamaño: 20,
        tipo: "Llanta",
        dibujo: "Intermedio"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas.

console.log(car3.ruedas.tamaño)
console.log(car3.ruedas.tipo)
console.log(car3.ruedas.dibujo)

// 9. Comprueba si los dos objetos creados son iguales.

console.log(car)
console.log(car2)

console.log(car == car2)  // no se pueden igualar referencias a objatos
console.log(car === car2)

console.log(car.marca == car2.marca) 
console.log(car.modelo == car2.modelo)
console.log(car.año == car2.año)


// 10. Comprueba si dos propiedades diferentes son iguales.