let a=document.getElementsByTagName("div")[0]
console.log(a);
//a.innerHTML='<h1>Hello World</h1>' + a.innerHTML

//CREATE ELEMENT AND THEN ADD IT AT THE END:
//DOM: <body>outer<div container><div first>DDDDDDDD</div>

let d=document.createElement("div")
d.innerHTML='<h1>Hello World</h1>'
//a.appendChild(d)
a.append(d)

// CREATE ELEMENT AND ADD IT AT THE BEGINNING:
//DOM: <body>outer<div container>DDDDDDD<div first></div>

a.prepend(d)

//TO GET THE ELEMENT BEFORE THE SELECTED ELEMENT:
//DOM: <body>outer<DDDDD><div container><div first></div>

a.before(d)

//TO GET THE ELEMENT AFTER THE SELECTED ELEMENT:
//DOM: <body>outer<div container><div first></div first container><DDDDD>

a.after(d)

//TO REPLACE: will replace the selected element

a.replaceWith(d)



