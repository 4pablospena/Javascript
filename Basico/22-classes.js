// Clases

class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// sintaxis

let person = new Person("Pablo", 33, "Pablospena")
let person2 = new Person("Lucas", 8 , "Tronquito")
    console.log(person)
    console.log(person2)


    console.log(typeof person)


// Valores por defecto

class DefaultPerson {
    constructor(name = "Sin Nombre", age = 0, alias = "Sin Alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson ("Pablo", 33)
    console.log(person3)


// Acceso a propiedades

    console.log(person3.alias)
    console.log(person3["alias"])

    console.log(person3.name)
    console.log(person3["name"])

    person3.alias = "pablospena"

    console.log(person3.alias)

// funciones en clases.

class PersonWhithMetod {
    constructor(name , age , alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("la persona camina")
    }
}

let person6 = new PersonWhithMetod("Pablo", 33, "pablospena")
person6.walk()


// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name , age , alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.#bank
    }
}

let person7 = new PrivatePerson ("Pablo", 33, "pablospena", "IBAN1234567890")
            console.log(person7.bank) // no podemos acceder
            person7.bank = "qwdiujwioedj" //bank no es #bank


// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name , age , alias) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
        
    }

    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }
}

let person8 = new GetSetPerson("Pablo", 33, "pablospena", "IBAN12345678910")
console.log(person8)
console.log(person8.name)

person8.bank = "new IBAN12345678910"