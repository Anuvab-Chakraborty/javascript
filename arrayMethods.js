//the data type of arrays are always object
let info=["anuvab","mayank","abc_noob","anuvabtest"]
//info[6]="bac"
//console.log(info);
//console.log(info.length);

//let b="abcdjdfeojfo"
//let p=b.split("");
//console.log(p);
//let q=p.toString()
//let q=p.join(" and ")
//console.log(q);

//push and pop

// let r=info.pop()
// console.log(r, info); //removes last and returns it

// let p=info.push(r)
// console.log(info,p);  //returns array length and adds a number a the end

//shift & unshift:

// let s=info.shift()
// console.log(s,info)       //removes the first and returns it

// let t=info.unshift(s)
// console.log(t,info);  //returns array length and also appends at start


// delete operator

//num=[1,2,3,4,5,6,7,8,9]

//delete num[0]
//console.log(num); //deletes the item at that index but doesn't reduce the length
//of the array.

//concat method

//num1=[10,11,12,13,14,15,16,17,18,19]
//p=num1.concat(num) //concats and return the arrays into another array

//console.log(typeof(p));
//p.sort((a,b)=> b-a);
//console.log(p);
//p.reverse()
//console.log(p);

//splice method:

//num=[1,2,4,5,8,9,110,5540,112,67]
// let q=num.splice(1,0,11,22)
// console.log(q,num);

// let nums=num.slice(2,5)   // includes the first but doesn't include the last
// console.log(nums,num);
// num.forEach(element => {
//     console.log(element);
// });

// num.forEach((element,index,array)=>{
//     array[index]=element*2
// })

// console.log(num)

// let arr= Array.from(info)
// console.log(arr);

// for (i in num){
//     console.log(i);
// }

// for ( i of num){
//     console.log(i);
// }

// a=num.map((element,index,array)=>{
//     return element+index
// })
// let a=num.filter((value)=>{return value<5})
// console.log(a);
// num=[1,2,4,9,3]
// let a=num.reduce((a,b)=>{
//     return a+b;
// })
// console.log(a);
// var b=[]
// let a=prompt("enter number:")
// do{
//     a=prompt("enter again:")
//     b.push(Number.parseInt(a))
   
// }while(a!=0)

// console.log(b);

// q=num.filter((value)=>{
//     return value%10===0
// })
// console.log(q);

// q=num.map((element)=>{
//     return element**2
// })
// console.log(q);

// num=[1,2,3,4,5]
// q=num.reduce((value1,value2)=>{return value1*value2})
// console.log(q);

var gen_num=Math.round(Math.random()*101)
console.log(gen_num);
q=prompt("enter a number")
q=Number.parseInt(q)
while (q!=gen_num){
    q=prompt("try again:")
    q=Number.parseInt(q)
}
if (q===gen_num){
    alert("Number guessed")
}
