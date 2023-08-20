//Synchrounous programmimg:

// let a=prompt("what is your name?")
// console.log(a);
// let b=prompt("What is your age?")
// console.log(b);
// let c=(`Your name is : ${a} and you are ${b} years old`)
// alert(c)

//Asynchrounous programming:

// alert("programme chalu huwa hai")
// setTimeout(function () {
//     console.log("Ye le abhi actual m khatam huwa");
//     alert("Ye le abhi actual m khatam huwa")
// },10000)
// alert("abhi bhi chal hi rha hai")

//Callbacks:

// IT IS BASICALLY THE SAME AS CREATING A FUNCTION
// AND PASSING THAT AS AN ARGUMENT TO ANOTHER FUNCTION
// AND CALLING THE FUNCTION INSIDE THE FUNCTION THAT IT WAS PASSED TO.

function a(src1,callback) {
    let script=document.createElement("script")
    script.src=src1
    document.body.appendChild(script)
    //script.onload=hello(src)
    script.onload=function () {
        callback(src1,null)
    }
    script.onerror=function () {
        console.log("src has error" ,src1);
        callback(src1,new Error("src has an errorrrrr"))
    }
}

src="https://cdn.tailwindcss.com"
//src="https://cdn.tkfmmailwindcss.com"


function hello(src,error) {
    if (error){
        console.log(error);
        return;
    }
    alert("hello check console");
    console.log("ho gya load ye wala script ",src);
}



function chelo(src,error) {
    if (error){
        console.log(error);
        return;
    }
    alert("hello check console");
    console.log("ho gya load ye wala script ",src);
    console.log("ab chelo kebab kha lo");
}

//a(src,chelo)
//a(src,hello)
src1="https://unpkg.com/react@18/umd/react.development.js"
src2="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
//If there is a lot of callback functions nested inside a single callback function
//it increases the code horizontally thus creating callback hell.

a(src,function ola(){
    a(src1,function ola2(){
        a(src2,function ola3 (){
            console.log("hi");
        })
    })
})












