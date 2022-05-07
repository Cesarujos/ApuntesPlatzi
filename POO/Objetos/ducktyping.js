 //Duck typing: Sirve identificar el elemento 
 //Si camina como pato y vuela como pato, entonces es un pato
 //De acuerdo a sus parámetros se puede identificar a un elemento
  
  function requiredParam(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function createLearningPath({ 

      //Parametros que pide la funcion 
    name = requiredParam("name"), //Por defecto el nombre de la ruta con un error
    courses = [], //Por defecto la lista de cursos es un array
  }) {

      //Argumentos
    const private = { 
      "_name": name,
      "_courses": courses,
    };
  
    const public = {
      get name() { //Se puede obtener el nombre de la ruta de aprendizaje
        return private["_name"];
      },
      set name(newName)  {//Se puede cambiar nombre de la ruta
        if (newName.length != 0) { //El nuevo nombre de la ruta debe tener al menos 1 caracter
          private["_name"] = newName;
        } else {
          console.warn("Tu nombre debe tener al menos 1 caracter");
        }
      },
      get courses() {//Se puede obtener la lista de cursos
        return private["_courses"];
      },
    };
  
    return public;
  }
  
  const rutas = createLearningPath({name: "Desarrollo de Softaware", courses: ['Curso 1', 'Curso 2']})

  function createStudent({

      //Parámetros
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {

      //Argumentos
    const private = {
      "_name": name, //nombre del alumno
      "_learningPaths": learningPaths, //Funcion learningPaths
    };
  
    const public = {
      email,
      age,
      approvedCourses,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
      get name() { //Obtener nombre del alumno
        return private["_name"];
      },
      set name(newName) { //Cambiar nombre del alumno
        if (newName.length != 0) {
          private["_name"] = newName;
        } else {
          console.warn("Tu nombre debe tener al menos 1 caracter");
        }
      },
      get learningPaths() { //Obtener lista de cursos
        return private["_learningPaths"];
      },
      set learningPaths(newLP) {//Entra un "algo"
        if (!newLP.name) {//Ese "algo" es un objeto que tiene un parametro con el nombre de name porque sino no funciona
          console.warn("Tu LP no tiene la propiedad name");
          return; //Se sale del set y no devuelve nada
        }
  
        if (!newLP.courses) {//Ese "algo" es un objeto que tiene un parametro con el nombre de courses
          console.warn("Tu LP no tiene courses");
          return;
        }
  
        if (!isArray(newLP.courses)) {//Ese "algo" es un objeto que tiene un parametro con el nombre de courses que es un array
          console.warn("Tu LP no es una lista (*de cursos)");
          return;
        }
        //Si ese algo cumple con lo anterior, ese algo es lo que hemos dicho
        private["_learningPaths"].push(newLP); //Se puede empujar un objeto dentro de un array
      },
    };
  
    return public;
  }
  
  function isObject(subject){
    return typeof subject == "object";
}

function isArray(subject){
    return Array.isArray(subject);
}


  const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });
  