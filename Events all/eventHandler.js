//Eventhandler is used to handle different types of user activity in the website
//EventListener is used to add multiple eventhandlers to an event.
//syntax-> element.addEventListener(event,HANDLER function)
//removeEventListener-> element.removeEventListener(handler function)


first=document.getElementById("first")

let a=(event)=>{
    console.log(event);
    first.innerHTML="A wala function hai ye"
}

let b=(event)=>{
    console.log(event);
    first.innerHTML="B wala hu mai"
}

first.addEventListener('mouseover',a)
first.addEventListener('click',b)
let c=prompt("See B?(1->NO/2->Yes)")
if (c=="1"){
    first.removeEventListener(b)
}