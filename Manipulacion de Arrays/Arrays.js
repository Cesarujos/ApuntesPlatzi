//FOR EACH
const arrys = ['aasdas', 'bdsfdfhg', 'cdtgc'];

let array2 = [];
arrys.forEach((items) => array2.push(items));




// MAP
class products {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
}
const zapatos =new products ('Zapatos', 300);
const smartphone =new products ('smartphone', 600);
let listaproducts = [ zapatos, smartphone];

const names = listaproducts.map(item => item.name);

//Si queremos agregar un parametro a cada item este ES INCORRECTO, MODIFICA AL ARREGLO PRINCIPAL
// const addIGV = listaproducts.map( item => {
//     item.tax = .18*item.price;
//     return item;
// });

//De manera correcta
const addIGV2 = listaproducts.map((item) => {
    return {
        ...item, //copia el item
        tax: .18*item.price
    };
});

//FILTER
const filtrado = arrys.filter(item => item.length >=6);

const tv = new products('ZapTV', 3000);
listaproducts.push(tv);
const Buscar = (query) =>{
    return listaproducts.filter(item => {
        return item.name.includes(query);
    })
}


//Reduce : Reduce a un solo valor
const num = [1, 2, 3, 2, 1, 3, 4, 1, 5, 1]
const multiplicacion = num.reduce((sum, item) => sum * item, 1);

const rpta = num.reduce((Obj, item) => {
    if (!Obj[item]){ //Si el Objeto no tiene el nombre de propiedad del item
        Obj[item] = 1;
    } else {
        Obj[item] = Obj[item] + 1
    }
    return Obj;
}, {})



//FindIndex Encontrar posicion del elemento buscado
const productindex = num.findIndex(item => item == 5);


//Splice
num.splice(productindex, 1);
console.log(num);


//SOME: Regresa valor true o false
const some = num.some(item => item%2 === 0); //Si hay pares en el arreglo



// EVERY EJEMPLO
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];
  
const ninos = team.map(item => item.age).every(item => item <=15)



//Join
const union = arrys.join('/');


//Split Convierte una cadena en array mediante un separador
const titulo = 'CURSO DE MANIPULACIÓN DE ARRAYS';
const separadotitulo = titulo.split(' ');

//Convertir a minuscula
const titulominuscula = titulo.toLowerCase();


//Concat
const concactenados = separadotitulo.concat(arrys);
const conc2 = [...separadotitulo, ...arrys]; //tambien se puede concatenar
separadotitulo.push(...arrys); //tambien se puede concatenar PERO modificando el original


//Flat
const matriz = [
    [1,2,3],
    [4,5,[7,[3, 4, 6, 45],9]],
    [10, 11, 12]
];

function isArray(subject){
    return Array.isArray(subject);
}
const matrizflat = [];
 function flatizar(subject){
    for (key in subject) {
        const keyisarray = isArray(subject[key]);
        if(keyisarray){
            flatizar(subject[key]);
        }else{
            
            matrizflat.push(subject[key]);
        }
    }
 }
 flatizar(matriz);
 
 const matrizflat2 = matriz.flat(4); //EL parametro son los niveles de aplanado



//Flatmap. Mapeo de y despues aplana
