//SETTIMEOUT FORMAT: SetTimeout(function,delay,arguments)


function abc(a,b){
console.log(a+b," Hello setTimeout is running ");
    console.log(a+b," Hello setInterval is running ");
    p=document.getElementById("first")
    p.innerHTML="ARREY BC PADHLE"
}

let a=setTimeout(abc,2000,5,11)

b=prompt("do you want to stop timeout?(Y/N)")

if (b=="N"){
    clearTimeout(a)
}
console.log(a)//Prints timer number

//SETINTERVAL FORMAT:

let c=setInterval(abc,20000,9,11)

b=prompt("do you want to stop timeout?(Y/N)")

if (b=="N"){
     clearInterval(c)
}
console.log(c)
