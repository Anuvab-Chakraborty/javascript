console.log("ABC");
console.log("BCA");

setTimeout(function d() {
    console.log("sddfsdv");
},3000)
setTimeout(function d() {
    console.log("sddfsdv2");
},2998)

let a=new Promise(function (resolve,reject) {
    console.log("promise k andar hu m");
    resolve(99)
})

console.log(a);