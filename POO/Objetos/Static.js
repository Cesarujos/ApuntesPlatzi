
//Creacion de objeto

const juan = {
        name: 'Juanito',
        age: 18,
        course: ['Curso1'],
    newCourse(nuevoCurso) {
        this.course.push(nuevoCurso);
    }
}

//Propiedades del objeto madre Object

console.log(Object.keys(juan)); //Lista las propiedades en ARRAY
console.log(Object.getOwnPropertyNames(juan)); //Lista los nombres de las propiedades
console.log(Object.entries(juan));  //Array de arrays
Object.entries(juan)[3][1]; //('Curso3') Puede que no funcione porque el this representa a [newCourse, f] //error

Object.defineProperty(juan, 'pruebaNasa', { //Objeto, nombre de la propiedad nueva, objeto donde del nuevo nombre de propiedad con las propiedades
    value: "Extraterrestre",
    writable: true, //Permite editar la propiedad
    enumerable: true, //Hace que sea visible con Object.keys, pero siempre se verá con Object.getOwnPropertyNames por ello no se copia
    configurable: true, //Permite borrar la propiedad
})

console.log(Object.getOwnPropertyDescriptors(juan)); //Objetos de cada propiedad

delete juan.age //Borra propiedades del objeto
console.log(juan);

//Seal y Freeze

Object.seal(juan); //Hace que las propiedades no se puedan borrar
Object.freeze(juan); // Hace que todas las propiedades no se puedan borrar ni modificar 
Object.isSealed(juan); //Comprueba que las propiedades no se pueden borrar arrojando true o false
Object.isFrozen(juan); //Comprueba que las propiedades se pueden borrar O modificar arrojando true o false

//Copiar un objeto //error

const juan2 = {};
for (prop in juan) { //Esta forma tiene un problema si es que dentro del objeto hubiese más objetos
    juan2[prop] = juan[prop]
}

const juan3 = Object.assign({}, juan); //tenemos el mismo problema que el ciclo for
const juan4 = Object.create(juan); //crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado heredando todo, incluso lo que se modifique después.

//Copy Object  excepto cuando trabajamos con metodos, JSON no trabajan con funciones/ no copia metodos

const stringcomplexobj = JSON.stringify(juan); //CONVIERTE objeto en string
const juan5 = JSON.parse(stringcomplexobj); //convierte de string a objeto

// Copy recursividad

function deepCopy(subject){
    let copySubject; //se crea una copia del elemento

    const subjectIsArray = isArray(subject);
    const subjectIsObject =isObject(subject);

    if(subjectIsArray){ //se le asigna el tipo a la copia creada
        copySubject = [];   
    } else if (subjectIsObject){
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject){
        const keyIsObject = isObject(subject[key]);
        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        }else{
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

//verificar si es objeto o array
function isObject(subject){
    return typeof subject == "object";
}

function isArray(subject){
    return Array.isArray(subject);
}