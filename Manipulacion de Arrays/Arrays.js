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
const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
  ];
  
  const rta = users.map((user) => user.attributes).flat();
  const rta2 = users.flatMap((user) => user.attributes);
  console.log("map-flat", rta);
  console.log("rta2", rta2);

  const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };
  
  const rta3 = Object.values(calendars).flatMap(item => {
      return item.map(date => date.startDate);
  });
  console.log(rta3);

  //Splice
  const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
  const myProducts = [];
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  const productIndex = products.findIndex(item => item.id === '🍔');
  if (productIndex !== -1) {
      myProducts.push(products[productIndex]);
      products.splice(productIndex, 1);
  }
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));

//Update
const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);
