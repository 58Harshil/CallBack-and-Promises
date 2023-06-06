function cretaePromes(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function f(){
            console.log("Time Done");
            resolve(10)
        },4000)
    })
}

async function consume(){
    console.log("Inside Function");
    const resopnse = await cretaePromes();
    console.log("Response is  " ,resopnse);
}
console.log("Start");
consume()
console.log("End");
