console.log(document.body.firstChild)
let a=document.body.firstChild
console.log(a.parentNode);
console.log(document.documentElement.parentNode);//document
console.log(document.documentElement.parentElement);//null if the parent is not an element return null
console.log(a.parentElement);
console.log(a.firstChild.nextSibling);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.documentElement.childNodes);
// console.log(document.body.childNodes[0]);
// arr=Array.from(document.body.childNodes)
// console.log(arr);
//dom collections are live and read only 
//after selecting a line of html in the browser
//we can read it using $0 and $1 but we cannot
//change or manipulate the code there.

// let's say we selected the div tag in the html
// and used $0 to mention it in the console and then
// we can say that there is a hidden text element after that div tag

// $0.childNodes returns a NodeList
// It is a live NodeList any element if it get
// added to the main element the NodeList gets 
// updated automatically. Iterate it using for of

