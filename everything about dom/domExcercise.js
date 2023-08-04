//create navbar style it give it's first element color

let n=document.getElementsByTagName("nav")
console.log(n[0]);
let p=n[0].firstElementChild;
p.style.color="red"

//create a table without tbody

//turn 1st and last child to green:

p.style.color="green"
n[0].lastElementChild.style.color="green"

//change background of all li elements to pink
let q=document.getElementsByTagName("li")
console.log(q);
// let r=Array.from(q)
// r.forEach((element)=>{
//     element.style.background="pink"
// })

for(let i of q){
    i.style.background="yellow"
}
