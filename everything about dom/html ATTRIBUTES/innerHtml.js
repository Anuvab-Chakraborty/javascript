let z=document.getElementsByTagName("span")[0]
console.log(z);  //prints as an Element

console.dir(z) //prints as an object

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

console.log(first.innerHTML)//works only on element nodes

first.innerHTML="<i>HI I AM ITALIAN</i>"
console.log(first.innerHTML); 


console.log(first.outerHTML); //OUTER HTML GETS THE ELEMENT IN THIS 
// CASE THE FIRST ELEMENT ITSELF.
first.outerHTML="<div>HELLO WORLD</div>"

// The following methods are used to get comments or text nodes data

document.body.firstChild.data="abc"
console.log(document.body.firstChild.data)
document.body.firstChild.nodeValue="xyz"
console.log(document.body.firstChild.nodeValue)

// To get all the text content from the web page:
console.log(document.body.textContent)


// If a tag has a hidden property like the second tag:


second.hidden=false