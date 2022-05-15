const welcom = () => new Promise((resolve, reject)=>{
    (true)
        ?resolve('Hey!!!')
        :reject('Ups!!!');
});

//ABAJO OTRA FORMA DE CONTROLAR EL ERROR, QUE NOS PERMITE DEBUGGEAR MEJOR LOS errores

welcom()
    .then(response => console.log(response))
    .catch(err => console.log(err));

const welcom2 = () => new Promise((resolve, reject) => {
    if (true){
        setTimeout(()=>{
            resolve('True');
        }, 2000)
    } else{
        const error = new Error('Whoooops!!!')
        reject(error);
    }
        
});
welcom2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

//CORRER VARIAS PROMESAS AL MISMO TIEMPO

Promise.all([welcom(),welcom2()])
    .then(response => console.log('Array of result', response))
    .catch(err => console.error(err))