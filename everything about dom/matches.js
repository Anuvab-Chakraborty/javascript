//MATCHES | CLOSEST | CONTAINS

//Matches: IF THE ELEMENT IS INFLUENCED
//BY THE PARTICULAR CSS SELECTOR.

//let box=document.body.getElementsByClassName("box")
//console.log(box[0]);

let id1=document.getElementById("id1")
let span1=document.getElementById("span1")
console.log(span1.matches("#span1"));//true
console.log(id1.matches("#span1"));//false
console.log(span1.matches(".box"));//false
console.log(id1.matches(".box"));//true

//closest : closest CSS ancestor

console.log(id1.closest(".box"));//id1
console.log(span1.closest(".box"));//id1
console.log(span1.closest("#span1"));//span
console.log(span1.closest("#id1"));//id1
console.log(id1.closest("#span1"));//null
console.log(id1.closest("#div1"));//div1


//CONTAINS: IT IS USED TO CHECK IF THAT ELEMENT CONTAINS
// THE element provided in argument.

console.log(id1.contains(span1));
console.log(id1.contains(id1));