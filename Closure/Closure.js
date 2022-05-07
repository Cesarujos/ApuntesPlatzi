//Closure

let papa = () =>{
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();

traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(1)  // cantidad de engendritos = 2
traigamosHijosAlMundo(1)  // cantidad de engendritos = 3

//Ambito lexico en closure

const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        console.log(count++); // Significa que primero imprimirá count y luego sumara uno: equivalente a console.log(count); count++.
        //Si se quisiera sumar antes de imprimir sería al reves o más elegante: ++count;
    }
    return displayCount;
};

//Crear variables privadas con closure CON SETTER Y GETTER
const person = () => {
    let name = 'Name'
  
    return {
      get name () {
        return name
      },
  
      set name (value) {
        name = value
      }
    }
  }
  
  const newPerson = person()
  console.log(newPerson.name)
  newPerson.name = 'César'
  console.log(newPerson.name)
//Crear variables privadas con closure
  const person2 = () => {
    let nombre = "sin nombre"; // Se declara la variable con let justo en la raíz de la función para que pueda ser vista en todos los niveles interiores.
    return { // Se retorna un "objeto" con 2 "metodos" (funciones)
        obtenerNombre: () => { // método 1, que no recibe parámetros y sólo devuelve la variable nombre.
            return nombre;
        },
        definirNombre: (nuevoNombre) => { // método 2, que recibe un parámetro y lo asigna a la propiedad nombre definida en la raíz de este objeto.
            nombre = nuevoNombre;
        }
    };
};
    const mipersona = person2(); // Define la constante mipersona y le asigna el objeto (la función) persona, recibiendo asi los 2 métodos (obtenerNombre y definirNombre).
    console.log(mipersona.obtenerNombre()); // Te dará el valor por omisión que en este caso sería sin nombre.
    mipersona.definirNombre('César'); // Asignas un nuevo nombre por medio del método definirNombre().
    console.log(mipersona.obtenerNombre()); // Te dará el nuevo valor que asignaste la línea anterior.

    //loops
    const MiFuncion = () => {
        debugger;
        for (var i = 0; i < 10; i++ ){
            setTimeout(
                () => {
                    console.log(i);
                }, 1000)
        }
    };

    MiFuncion();
    //Hoisting Funciona en las declaraciones pero no en las inicializaciones
    console.log(a);
    var a;
    a = 2;