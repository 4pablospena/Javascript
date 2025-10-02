// 1. Crea una clase que reciba dos propiedades.

class Person {
    constructor(name, id){
        this.name = name
        this.id = id
    }
}

// 2. Añade un método a la clase que utilice las propiedades.

class Person2 {
    constructor(name, id){
        this.name = name
        this.id = id
    }
    walk(){
        console.log("una persona camina")
    }
}

// 3. Muestra los valores de las propiedades e invoca a la funciónn.
// Crear una instancia de la clase
let p1 = new Person2("Pablo", 123);

    console.log("Nombre:", p1.name);
    console.log("ID:", p1.id);

p1.walk();

// 4. Añade un metodo estatico a la primera clase.

class Person3 {
    constructor(name, id){
        this.name = name
        this.id = id
    }
    walk(){
        console.log("una persona camina")
    }

    static sayHello(){
        console.log("Hola, buenos días!")
    }
}

// 5. Haz uso del mÃ©todo estÃ¡tico.

Person3.sayHello() 

// 6. Crea una clase que haga uso de herencia.

class Worker extends Person3{
    constructor(name,id,work){
        super(name,id)
        this.work = work
    }
}

// 7. Crea una clase que haga uso de getters y setters.

class Person4 {
    constructor(name, id){
        this._name = name   // propiedad interna
        this._id = id       // propiedad interna
    }

    // Getter y Setter de name
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }

    // Getter y Setter de id
    get id(){
        return this._id
    }
    set id(newId){
        this._id = newId
    }
}
// 8. Modifica la clase con getters y setters para que use propiedades privadas.

class Person5 {

    #name
    #id

    constructor(name, id){
        this.#name = name
        this.#id = id
    }

    get name(){
        return this.#name
    }
    set name(newName){
        this.#name = newName
    }

    get id(){
        return this.#id
    }
    set id(newId){
        this.#id = newId
    }
}


// 9. Utiliza los get y set y muestra sus valores.

let persona = new Person4 ("Pablo" , 53)
console.log("Nombre: ", persona.name)
console.log("DNI: ", persona.id)

// 10. Sobrescribe un mÃ©todo de una clase que utilice herencia.

// Clase base
class Animal {
    hacerSonido(){
        console.log("El animal hace un sonido genérico")
    }
}

// Clase hija que hereda de Animal
class Perro extends Animal {
    // Sobrescritura del método
    hacerSonido(){
        console.log("El perro ladra: ¡Guau guau!")
    }
}

// Otra clase hija que también hereda de Animal
class Gato extends Animal {
    // Sobrescritura del método
    hacerSonido(){
        console.log("El gato maúlla: ¡Miau miau!")
    }
}

// Ejemplo de uso
let a = new Animal()
a.hacerSonido()  // "El animal hace un sonido genérico"

let p = new Perro()
p.hacerSonido()  // "El perro ladra: ¡Guau guau!"

let g = new Gato()
g.hacerSonido()  // "El gato maúlla: ¡Miau miau!"
