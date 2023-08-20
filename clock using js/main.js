//DATE MODULE TUTORIAL:

function date_get() {
    
let constructor= new Date()
let hours=constructor.getHours()
if (hours<10){hours=`0${hours}`}
let minutes=constructor.getMinutes()
if (minutes<10){minutes=`0${minutes}`}
let seconds=constructor.getSeconds()
if (seconds<10){
    seconds=`0${seconds}`
}
let day=constructor.getDay() //Sunday start-> 0
let date_now=constructor.getDate()
if (date_now<10){date_now=`0${date_now}`}
let month=constructor.getMonth()
if(month<10){month=`0${month+1}`}
let year=constructor.getFullYear()
week_arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
week_day=week_arr[day]
let d_m_y=document.body.getElementsByClassName("date_month_year")[0]
d_m_y.innerHTML=`${date_now} / ${month} /${year}`
//console.log(d_m_y);
let h_m_s=document.body.getElementsByClassName("hour_minute_sec")[0]
h_m_s.innerHTML=`${hours} : ${minutes} : ${seconds}`
let w_d=document.body.getElementsByClassName("week_day")[0]
w_d.innerHTML=`${week_day}`
}
//date_get()
setInterval(date_get,1000)