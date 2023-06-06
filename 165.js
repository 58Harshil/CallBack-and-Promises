function cretaePromes(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function f(){
            console.log("Time Done");
            resolve("Done")
        },4000)
    })
}

console.log("Start");
let x = cretaePromes()
console.log("Got a new promese");
x.then(function f(){
    console.log("Promise Done");
})
console.log("End");

for(let i = 0; i<1000000;i++){}
