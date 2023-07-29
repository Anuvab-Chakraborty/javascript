const changebodybg=()=>{
    document.body.firstElementChild.style.background="red"
}


let b=document.body;
let a=document.head;
console.log("first child of b is: ",b.firstChild);
console.log("first child of b is: ",b.firstElementChild);
console.log(b.previousElementSibling);
console.log(a.nextElementSibling);
console.log(b.lastElementChild);
changebodybg();