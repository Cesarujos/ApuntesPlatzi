let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/'

function fectchData(url_api, callback){
    // instanciamos la conexion
    let xhttp = new XMLHttpRequest();
    // abrir una conexion con el metodo, la ruta y si es asincrono
    xhttp.open('GET', url_api, true);
    // validacion del llamado
    xhttp.onreadystatechange = (event) => {
      // el state 4 es el ultimo de la peticion
      if(xhttp.readyState === 4){
        // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
        if(xhttp.status === 200){
          // el primer valor es el err, y el siguiente el resultado
          // ejecutamos el callback con el resultado
          callback(JSON.parse(xhttp.responseText), null);
        } else {
          // si no es 200
          let error = new Error('Error: ' + url_api);
          // matamos el proceso con un error
          return callback(null, error);
        }
      }
    }
    // por ultimo enviamos la peticion
    xhttp.send();
  }

fectchData(API, function(data1, error1){
    if(error1) return console.error(error1);
    fectchData(API + data1.results[0].id, function(data2, error2){
        if(error2) return console.error(error2);
        fectchData(data2.origin.url, function(data3, error3){
            if(error3) return console.error(error3);
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        });
    });
});