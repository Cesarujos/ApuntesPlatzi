function date(callback){
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date)
    }, 3000)
}
function printDate(date){
    console.log(date);
}

date(printDate)