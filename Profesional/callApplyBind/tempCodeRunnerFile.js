//Call
function saludar(listo, muyfeo){
    console.log(`Mi nombre es ${this.name} y mi apellido ${this.surname} y ${listo}, tú tienes ${muyfeo}`)
}
const cesar = {
    name: 'CÉSAR',
    surname: 'URIARTE'
}
saludar.call(cesar, "1", "Cara de culo"); //Call -comas
saludar.apply(cesar, ["2", "Cara de culo"]); //Aplly - Arreglo Argumentos

const cesarhabla = saludar.bind(cesar);
cesarhabla("3", "Cara de culo");
console.log(cesarhabla)