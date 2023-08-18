//DATE MODULE TUTORIAL:

let a= new Date()
p=a.getHours()
q=a.getMinutes()
r=a.getSeconds()
s=a.getDay()
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = daysOfWeek[s];
t=a.getMonth()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonth = months[t];

u=a.getDate()
console.log(p,q,r,currentDay,currentMonth,u);