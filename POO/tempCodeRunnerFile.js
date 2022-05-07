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

const juan = {
    name: 'Juanito',
    age: 18,
    course: ['Curso1'],
newCourse(nuevoCurso) {
    this.course.push(nuevoCurso);
}
}

const junito = [...juan];
console.log(junito);
