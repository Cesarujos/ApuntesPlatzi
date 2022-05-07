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
      readName() { //Metodo para leer nombre
        return private["_name"];
      },
      changeName(newName) { //metodo para cambiar nombre
        private["_name"] = newName;
      },
    };
  
    Object.defineProperty(public, "readName", { //Proteger el metodo de leer nombre
      writable: false,
      configurable: false,
    });
    Object.defineProperty(public, "changeName", { //PProteger el metodo de cambiar nombre
      writable: false,
      configurable: false,
    });
  
    return public; //Retorna solo las variables privadas
  }
  
  const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });