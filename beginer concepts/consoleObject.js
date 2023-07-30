//console onject methods

console.log(console);

//error
console.error("this is an error")
//time
console.time("a")
for(let i=0;i<=5;i++){
    console.log(i);
}
//timeEnd
console.timeEnd("a")

console.time("b")
i=0
while (i<=5) {
    console.log(i);
    i+=1
}
console.timeEnd("b")
//warning
console.warn("this is a warning")
//table
let a={p:1,q:2,r:3,s:4}
console.table(a)

//assert

console.assert(5<53)

//info
console.info("This is an important info")
//clear
console.clear()
//alert
//confirm
let p=confirm("are u noob?")
console.log(p);
if (p){
    document.write("yo")
}
else{
    document.write("tu toh pro h")
}
//prompt
