const doSomething = () => new Promise((resolve, reject) =>{
    (true)
        ? setTimeout(()=> resolve('Do something async'), 2000)
        : reject(new Error('Test Error'))
})

const helloasync = async () => {
   const hello = await doSomething();
   console.log(hello);
}
console.log("Before")
helloasync();
console.log("After")


//Cachar ERRORES
const otrafunction = async () => {
   try {
       const hello = await doSomething();
       console.log('asuc2',hello);
   }
   catch (error){ //Actualmente no es necesario poner (error)
       console.log(error);
   }
}
console.log("Before 1")
otrafunction();
console.log("After 2")