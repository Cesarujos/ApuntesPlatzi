

function requiredParam(param) { //Funcion que devuelve un error
    throw new Error(param + " es obligatorio");
  }
function LearningPaths (name = requiredParam("name"), courses = []){
    this.name = name,
    this.courses = courses
}
Web = new LearningPaths("Escuela de desarrollo web", []);
Engineer = new LearningPaths("Escuela de desarrollo ingenieria", []);
Data = new LearningPaths("Escuela de Data Science", []);

//juan instanceof LearningPaths //true, porque juan es una instancia del prototipo


function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
  
    if (isArray(learningPaths)) {
      this.learningPaths = [];
      
      for (learningPathIndex in learningPaths) {
        if (learningPaths[learningPathIndex] instanceof LearningPaths) {
          this.learningPaths.push(learningPaths[learningPathIndex]);
        }
      }
    }
  }
  
  const juan = new Student({
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
      Web,
      Engineer,
      Data,
    ],
  });






//Verifica si es arry u objeto
function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}