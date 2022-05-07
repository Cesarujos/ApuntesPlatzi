//declarativas
function miFuncion(){
   return 3;
}
//Expresión
var miFuncion2 = function (a,b){
    return a + b;
}
//Funciones declarativas = son asignadas a la memoria por lo que la podemos llamar antes sin problemas. Funciones de expresión = NO son asignadas en memoria por lo que no pueden ser llamadas antes. ¿QUÉ ES EL HOISTING en JAVASCRIPT? La definición de hoisting nos dice que las variables y funciones al ser declaradas se mueven físicamente hacia arriba en el código, es decir, el navegador las lee primero. Internamente, lo que pasa es lo siguiente: JS pone las variables y funciones declaradas en memoria mientras está en la fase de compilación (eso hace que el navegador las lea primero), pero en realidad siempre van a estar en el mismo sitio de tu código, nunca se mueven hacia arriba.

//Arrow Funcion
const fact = (numero)=>{
    let factorial = 1;
    for (let i = numero; i > 0; i--){
        factorial = factorial * i;
    }
    return factorial;
};
console.log(fact(4));

//coercion explicita
a = 20;
b = String(a); //Se convierte en String
c = Number(b); //Se convierte en numero

//Truthy y Falsy
//False
    Boolean(0);
    Boolean(null);
    Boolean(NaN); 
    Boolean(undefined); 
    Boolean(False); 
//Verdadero
    Boolean(1);
    Boolean("a");
    Boolean({});
    Boolean([]);
    Boolean(function());
    Boolean(true);
//Negación
    !false = true;
//Comparacióm
    3 == "3" true;
    3 === "3" false;
    && "y";
    || "o";
//Aumentar
edad +=2;
//Switch
switch(true || false){
    case 1:
        "Que quieres que haga";
        break;
    case 2:
        "Que quieres que haga";
        break;
    default:
        "Que quieres que haga";
        
}
//arrays
//Crear Array
let arrayw = new Array();
for (let i = 0; i < 10; i++){
    arrayw[i] = i;
}
console.log(arrayw[4]);

var frutas = ["POLLO","PERRO","VACA"]
    //añadir al array y crea una variable con el numero de elementos totales
    var masFrutas = frutas.push("DINOSAURIO","ONICHAN");
    //BORRAR ULTIMO
    var ultimo = frutas.pop("ONICHAN");
    //agregar al inicio
    var inicio = frutas.unshift("DIANA");
    //borrar inicio y lo guarda en una variable
    var borrarinicio = frutas.shift();
    //Buscar posiciom
    var posicion = frutas.indexOf("PERRO");

//loops for
var estudiantes = ["María", "Sergio","Rosa"];
function saludar(estudiante){
        console.log(`Hola, ${estudiante}`);
    }
    for (var i = 0; i < estudiantes.length; i++){
        saludar(estudiantes[i])
    }
//Loops for ...of Crea un plural y singular de un array
var estudiantes = ["María", "Sergio","Rosa"];
function saludar(estudiante){
        console.log(`Hola, ${estudiante}`);
    }
    for (var estudiante of estudiantes){
        saludar(estudiante);
    }
//While
var estudiantes = ["María", "Sergio","Rosa"];
function saludar(estudiante){
        console.log(`Hola, ${estudiante}`);
    }
    while(estudiantes.length > 0){
        var n = estudiantes.shift();
        saludar(n);
    }
//FUNCION CONSTRUCTORA Construye un objeto de acuerdo a parametros
function auto(marca, model, annio) {
    this.marca = marca;
    this.modelo = model;
    this.annio = annio;
}
var autoNuevo = new auto("Tesla", "Free", "2022");
console.log(autoNuevo);

// Arrays Function
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;
var juanito = [1, 4, 5, 7];
var EJEMPLO = juanito.splice(1, 1);
console.log(juanito);