//Clases
//Se recomienda que empiecen con mayusculas

//Clases declarativas 
class Miclase {
    constructor (nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}
//Clases expresivas
const Miclase2 = class {}




//Ejemplo de classe con metodo
class Cliente {
    constructor (nombre, saldo){
        this.name = nombre;
        this.balance = saldo;
    }
    //Creacion de metodo
    mostrarinfo(){
        return `Cliente: ${this.name}, tu saldo es: ${this.balance}`
    }
    static bienvenida (){ //Esto pertenece a la clase, no al objeto
        return `Bienvenida al cajero`;
    }
}
const juan = new Cliente('Juan', 200);
console.log(juan.mostrarinfo());
console.log(Cliente.bienvenida());
//Heredar una clase (hereda la anterior)
class Empresa extends Cliente{
    //si se quiere agrerar algunas propiedades
    constructor (nombre, saldo, telefono, categoria){
        super(nombre, saldo); //agrega los valores del padre
        this.phone = telefono;
        this.category = categoria;
    }
    static bienvenida (){ //Reescribir el metodo del padre
        return `Bienvenida al cajero de empresas`;
    }
}
const Alicorp = new Empresa('Alicorp', 500, 'i', 5);
console.log(Alicorp.mostrarinfo());
console.log(Empresa.bienvenida());

//Propiedades privadas de clases

class Client {
    #name; //Declara variable privda de la clase
    constructor (nombre, saldo){
        this.#name = nombre; //# Para volverlo privado
        this.balance = saldo;
    }
    //Creacion de metodo
    mostrarinfo(){
        return `Cliente: ${this.#name}, tu saldo es: ${this.balance}`
    }
    static bienvenida (){ //Esto pertenece a la clase, no al objeto
        return `Bienvenida al cajero`;
    }
}

const Cesar = new Client('César', 1200);
// console.log(Cesar.#name); Esto sale error
console.log(Cesar.mostrarinfo());