//FINDS THE REQUIRED ATTRIBUTE OF THAT ELEMENT

let p=document.getElementById("abc")

let z= p.getAttribute("class")
console.log(z);

//CHECKS IF THE ELEMENT HAS THAT ATTRIBUTE AND RETURNS TRUE OR FALSE

console.log(p.hasAttribute("class"));
console.log(p.hasAttribute("style"));

//TO ADD ATTRIBUTES TO THE ELEMENT

p.setAttribute("hidden","true")
p.setAttribute("class","anuvab")

//TO REMOVE ATTRIBUTES TO THE ELEMENT
p.removeAttribute("hidden")


// TO CHECK WHAT ATTRIBUTES ARE ASSOCIATED WITH THE ELEMENT:

console.log(p.attributes)

console.log(p.dataset);
console.log(p.dataset.game);
console.log(p.dataset.player);