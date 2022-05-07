//Creación de un objeto literal
const cesar = {
    name: "Cesitar",
    age: 22,
    medidas: [90, 60, 90],
    otraMedida (detalle){ 
        //tambien puede ser: descripcion: function(){}
        this.medidas.push(detalle);
        console.log(`Se añadió la medida: ${detalle}`);
    }
};
cesar.medidas.push("Lo otro no se dice");
cesar.name = "Juanito";
cesar.age += 2;
cesar.otraMedida('200 de nariz');
console.log(cesar);

//Creacion de prototipo
function Student(name, age, courses){
    this.nombre = name;
    this.edad = age;
    this.cursos = courses;
    
    //Crear metodo en prototipo ejemplo 1
    this.nuevocurso = function (nuevoCurso){
        this.cursos.push(nuevoCurso);
    }
}

//Otro ejemplo de creacion de metodo en prototipo (por fuera del prototipo)
Student.prototype.nuevoCurso2 = function (nuevoCurso){
    this.cursos.push(nuevoCurso);
}

//Creación de instancia
const jose = new Student('Pepito', 22, ['CSS', 'HTML']);

jose.nuevocurso('Python');
jose.nuevoCurso2('JavaScript');