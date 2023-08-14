//CLASSNAME,CLASSliST : ADD/REMOVE/TOGGLE:

first.className="blue text-black"
console.log(first.classList);
first.classList.remove("blue")
console.log(first.classList);
first.classList.add("yellow")
console.log(first.classList);
first.classList.toggle("yellow")  //used to apply and unapply a class
console.log(first.classList.contains("red"))