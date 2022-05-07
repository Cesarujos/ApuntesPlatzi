//Volver un parámetro obligatorio

function requeridParameter(param) {
    throw new Error(param + " es un parametro obligatorio");
}
function createStudent({
    name = requeridParameter("name"), 
    email = requeridParameter("email"), 
    age, 
    instagram, 
    facebook, 
    twitter, 
    cursos = [] //Permite mandar por defecto que es un array vacío
} = {} //Permite mandar por defecto que es un array 
){
    return {
        name,
        email,
        age,
        socialMedia: {
            instagram,
            twitter, 
            facebook,
            twitter,
        },
        cursos
    }
}
juan = createStudent({name: "César", email: "uriartechavest@gamil.com"});