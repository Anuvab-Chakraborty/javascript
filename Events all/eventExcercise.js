//Generate different alerts when different buttons are clicked:

btn_one=document.body.getElementsByClassName("one")[0]
console.log(btn_one);
btn_five=document.body.getElementsByClassName("five")[0]
console.log(btn_five);
btn_four=document.body.getElementsByClassName("four")[0]
console.log(btn_four);
btn_three=document.body.getElementsByClassName("three")[0]
console.log(btn_three);
btn_two=document.body.getElementsByClassName("two")[0]
console.log(btn_two);

let one=(event)=>{
    alert("click huwa re mai one wala")
    //btn_one.innerHTML="CLICK HUWA"
    console.log(event.clientX,event.clientY);
}
let two=(event)=>{
    alert("click huwa re mai two wala")
    //btn_one.innerHTML="CLICK HUWA"
    console.log(event.clientX,event.clientY);
}
let three=(event)=>{
    alert("click huwa re mai three wala")
    //btn_one.innerHTML="CLICK HUWA"
    console.log(event.clientX,event.clientY);
}
let four=(event)=>{
    alert("click huwa re mai four wala")
    //btn_one.innerHTML="CLICK HUWA"
    console.log(event.clientX,event.clientY);
}
let five=(event)=>{
    alert("click huwa re mai five wala")
    //btn_one.innerHTML="CLICK HUWA"
    console.log(event.clientX,event.clientY);
}

btn_one.addEventListener('click',one)
btn_two.addEventListener('click',two)
btn_three.addEventListener('click',three)
btn_four.addEventListener('click',four)
btn_five.addEventListener('click',five)

let y= (event)=>{
    let newWind=window.open("https://www.google.com")
    newWind.focus()
}
let twi= (event)=>{
    let newWind=window.open("https://www.twitter.com")
    newWind.focus()
}
let fb= (event)=>{
    let newWind=window.open("https://www.fb.com")
    newWind.focus()
}

google.addEventListener('click',y)
twitter.addEventListener('click',twi)
facebook.addEventListener('click',fb)


//fetch data from a website every 5 seconds



let fetchdata = async (url)=>{
    fetched= await fetch(url)
    finalData = await fetched.json()
    console.log(finalData);
    return finalData
}

let intervalYo= async ()=>{
    let arr=[]
    for (let i=1;i<=200;i++){arr.push(i)}
    let q=Math.round(Math.random()*200)
    let choice=arr[q]
    console.log(choice);
    let url="https://jsonplaceholder.typicode.com/todos/"
    let finalUrl=`${url}${choice}`
    r=await fetchdata(finalUrl)
    modify=document.getElementsByClassName("box")[0]
    modify.innerHTML=`${r.title} <br> ${r.id}`
}
//intervalYo()
//setInterval(intervalYo,5000)
let modi=()=>{
let mod= document.body.querySelector("#bulb-on").classList.toggle("bulb-on")
console.log(mod);}
setInterval(modi,3000)




















