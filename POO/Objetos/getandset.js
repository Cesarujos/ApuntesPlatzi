function requiredParam(param) { //Funcion que devuelve un error
    throw new Error(param + " es obligatorio");
  }
  
  function createStudent({
    name = requiredParam("name"), //Permite mandar por defecto un error
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],//Permite mandar por defecto que es un array vacío
    learningPaths = [],
  } = {}) {
    const private = { //Crea un objeto con los parametros privados
      "_name": name, //Por convención, así se nombran las propiedades privadas
    };
  
    const public = { //Crea un objeto con los parámetros públicos
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
      
      //GETTER Y SETTER Crean una propiedad falsa para llamar propiedades privadas

      get name(){ //Retorna el nombre, simula un value
          return private["_name"];
      },
      set name(newName){// Cambia el nombre, puede escribirse tambien como juan.name = "newName" // simula un writable
          if (newName.lenght != 0){
              private["_name"] = newName; 
          }else{
              console.warn("Ya p causa, pon un nombre p");
          }
      }
    };
  
    return public; //Retorna solo las variables privadas
  }
  
  const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });