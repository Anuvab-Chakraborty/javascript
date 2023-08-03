// let a=null
// let b=343;
// let c=true
// let d= BigInt(1244543)
// let e=Symbol("noice symbol!")
// let f="anuvab"
// let g
// console.log(typeof(c));

// let obj={
//     "anuvab":"no1",
//     "chakraborty":2000,
//     "userId":true,
//     "rank":undefined,
//     "dob":BigInt(20)
// }

// console.log(obj["anuvab"]);


// let a=10;
// console.log(a--);
// console.log(--a);
// console.log(a++);
//console.log(++a);
//10
//8
//8
//10

// let abc=99
// let bca="99"
// console.log(abc!=bca);
// console.log(abc==bca);
// console.log(abc!==bca);
// console.log(abc===bca);
// console.log(abc>=bca);
// console.log(abc<=bca);
// console.log(abc>bca);
// console.log(abc<bca);


// let i=19;
// let j=20
// console.log(i>5 || i!=j);
// console.log(i<5 && j>i);

// let a=prompt("what's your age?")

// a=Number.parseInt(a);
// if(a<0){
//     alert("Invalid age")
// }
// else if (a>0 && a<=10){
//     alert("play games or go outside")
// }

// else if (a>10 && a<=18){
//     alert("make friends")
// }

// else if(a>18 && a<=60){
//     alert("get a job")
// }

// else{
//     alert("old")
// }

// switch(true){
//     case a<0:
//         alert("invalid")
//         console.log(a);
//         break;

//     case a<=10:
//         alert("go out")
//         break;

//     case a<=18:
//         alert("make friends")
//         break;

//     case  a<=60:
//         alert("get a job")
//         break;
//     default :
//         alert("enjoy")
//         break;
// }


//TERNARY OPERATOR:

// const age = 25;
// const isAdult = age >= 18 ? "Adult" : "Not an adult";

// console.log(isAdult); // Output: "Adult"



// console.log("you must do your",(a>18)? "job" : "Homework"); Ternary operator

// let arr=[1,2,3,4,5,6]
// for (let a in arr){
//     console.log(a);
// }
//let arr=[1,2,3,4,5,6]
// let obj={
//     anuvab:10,
//     mayank:20,
//     rohit:30
//   }
// const p=Object.keys(obj)
// for(let i=0;i<p.length;i++){
//   console.log(obj[p[i]]);
// }
//in loops iterates over the indexes
//of loops iterates over the values of that indexes(doesn't work for objects tho)
// for (let a in arr){
//     console.log(arr[a]);
// }
  
//   for (let a in obj){
//     console.log(a,obj[a])
//   }

// for (let b of "anuvab"){
//     console.log(b);
// }
//do-while:
//run once cause the check happens after first run so min 1 run

// let i=2;
// n=1
// do{
//     console.log(i);
//     i++
// }while(i<n)


//Strings:

// let a="anuvab"
// console.log(a.length);
// template literals /formatted string of js: and also string interpolation

//let b="mayank"

//let c= `${b} is a "dalla's" member just like ${a}`
//console.log(c);

//escape sequence characters:

//let d='you\'re a good guy';
//console.log(d);

//let e='good\rguy \t anuvab'
//console.log(e);
// \n also works in the same way 

//string methods:

// let namee="anuvab"

// console.log(namee.length);
// console.log(namee.toUpperCase());
// console.log(namee.toLowerCase());
// console.log(namee.slice(2));
// console.log(namee.slice(2,4));
// console.log(namee.replace("an","bn"));
// let nameeA="mayank"
// console.log(namee.concat(" is friend ",nameeA, " ok"));
// let nameeB="       abc noob        ";
// console.log(nameeB.trim());