function h(x, fn){
    //console.log(x*x);
    fn()
}
h(10, function (){
    //console.log("Done with callBack");
})


function exec(n){
 //console.log("Square value is ",n);
}


console.log("Start");
setTimeout( function f(){
    console.log("Time done 1");
},100)
setTimeout( function f(){
    console.log("Time done 2");
},0)
//for (let i = 0;i<10000000;i++){}
console.log("End");
