const carro = {
    name: "Toyota",
    anio: 2020,
    model: "CR20"
}

console.log(carro.name, carro.anio)

//DESESTRUCTURACIÓN y CON SPREAD
let {name, anio, ...all} = carro
console.log(anio, all)


//MULTILINEA
console.log(`Lorem
ANimalaels
jkhsdkf,jdskfj`)

//SPREAD OPERATION : OPERADOR DE PROPAGACIÓN

let team1 = [1,2,3,4]
let team2 = [5,6,7,8,9]
let educacion = [10, ...team1, ...team2]
console.log(educacion)

//OBJETOS
let nombre = 'Juanitoi'
let apellido = 'Chavesta'

obj2 = {nombre: nombre, apellido: apellido}
obj = {nombre, apellido}
console.log(obj)

//PROMESAS
const hellopromesa = () => new Promise((resolve, reject) => {
    if (true) {
        resolve('Hey')
    } else {
        reject('Ups!!')
    }
});

hellopromesa()
    .then(response => console.log(response))
    .catch(err => console.log(err))

//Clases

class Sumar{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(a,b){
        this.valueA = a;
        this.valueB = b;
        return this.valueA + this.valueB
    }
}

const calc = new Sumar();
console.log(calc.sum(2,2))

//Generadoooor

function* helloWorld(){
    if (true){
        yield 'Hello, '; 
    }
    if (true){
        yield 'World';
    }
}

const generadorhola = helloWorld();
console.log(generadorhola.next().value) //Sale Hello, 
console.log(generadorhola.next().value) //Sale World
console.log(generadorhola.next().value) //Sale Undefined


//Include
let numbrs = [1,2,3,4,6,8,9]
if(numbrs.includes(7)){
    console.log('Si se encuentra el valor de 7')
} else {
    console.log('NO SE ENCUENTRA EL VALOR DE 7')
}

//Expontes
let a = 2
let b = 10
let expo = a ** b;
console.log(expo)

//Entrie
const juan = {
    name: 'Juanito',
    age: 18,
    course: ['Curso1'],
}

console.log(Object.keys(juan)); //Lista las propiedades en ARRAY
console.log(Object.getOwnPropertyNames(juan)); //Lista los nombres de las propiedades
console.log(Object.entries(juan));  //Array de arrays [[nomprop, prop]]
console.log(Object.values(juan)) //Un array de solo las propiedades, sin los nombres

//Padding
const hello = 'Hello'
console.log(hello.padStart(7,'hi'))
console.log(hello.padEnd(12,'-'))

//If tercanrio
// condición ? expr1 : expr2 

//Async y Await
const melloWo = () => new Promise((resolve, reject) => {
     (false) 
        ? setTimeout(() => resolve('HelloWorld'), 3000)
        : reject(new Error('Error muy feo'))
    }
);

const helloasync = async () => {
    const hello = await melloWo();
    console.log(hello);
}
helloasync();

const otrafunction = async () => {
    try {
        const hello = await melloWo();
        console.log(hello);
    }
    catch (error){ //Actualmente no es necesario poner (error)
        console.log(error);
    }
}
otrafunction();

//ES9 OPERADOR DE PROPAGRACION
const objeto = {
    name: 'Juan',
    age: 22,
}

const objeto2 = {
    ...objeto,
    direccion: "Los Algarrobos 335",
    country: "PE"
}
console.log(objeto2);

//Cuando ha terminado un llamdo y poder ejecutar

const helloWorld2 = () => new Promise((resolve, reject) => {
    (true)
        ? setTimeout(()=>resolve('HelloWordPero'),3000)
        :reject(new Error('Mi otro error'))
});
helloWorld2()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log("Finalizo"))

//REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day)


//FALT
const matriz = [
    [1,2,3],
    [4,5,[7,[3, 4, 6, 45],9]],
    [10, 11, 12]
];
console.log(matriz.flat(5))
console.log(matriz.flat(5).flatMap(item => [item, item*2]))


//TRIMSTART Y TRIMEND
hellin = "        Holiiiiiis            "

console.log(hellin)
console.log(hellin.trimStart().trimEnd())

//Convertir array de arry (como Entries) a objeto 
let entries = [["name", "Lucas"], ['Edad', 28]]
console.log(Object.fromEntries(entries))


//Objeto de tipo simbolo
let mySimbolin = `my simbolin`;
let simbolin = Symbol(mySimbolin);
console.log(simbolin.description)