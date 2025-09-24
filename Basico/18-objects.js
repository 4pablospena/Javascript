// Objetos

// Datos no primitivos
// Coleccion de propiedades

// Sintaxis

let person = {
    name: "Pablo",
    age: 33,
    alias: "pablospena4"
}

// Acceso a propiedades

// notacion llamada por punto. (MEJOR)
console.log(person.name)
console.log(person.age)
console.log(person.alias)

// notacion de corchetes
console.log(person["name"])
console.log(person["age"])
console.log(person["alias"])

// Modificación

person.name = "Pablo Suarez"
console.log(person.name)


console.log(typeof person.age)
person.age = "33"
console.log(person.age)
console.log(typeof person.age)

// Eliminaciond de propiedades

delete person.age
console.log(person)


// Nueva propiedad

person.email = "pablospena@gmail.com"
person["age"] = 33
console.log(person)


// Metodos (Funciones)

let person2 = {
    name: "Pablo",
    age: 33,
    alias: "pablospena4",
    walk : function(){
        console.log("la persona camina.")
    }
}
person2.walk()

// Anidacion de objetos

let person3 = {
    name: "Pablo",
    age: 33,
    alias: "pablospena4",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Floor Manager",
        exp: 3,
        work: function (){
            console.log("La persona trabaja.")
        }
    }
}

console.log(person3)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos

let person4 = {
    name: "Pablo Suarez",
    age: 33,
    alias: "pablospena4"
}

console.log(person)
console.log(person4)

console.log(person == person4)  // no se pueden igualar referencias a objatos
console.log(person === person4)

console.log(person.name == person4.name) 
console.log(person.age == person4.age)
console.log(person.alias == person4.alias)
