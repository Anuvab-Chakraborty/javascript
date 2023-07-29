//dom nodes
//text nodes
//elements nodes
//comment nodes
// in a html page the <html> tag is at root . The <head> and <body> tags are
// it's child nodes.
//text node cannot be modified so it's a leaf of the dom-tree.
//document.documentElement brings everything inside the <html> tag.
play=confirm("do yo wanna play stone paper scisor?")
while(play){
    let inp=prompt("enter stone/paper/scissor")
    inp=inp.toLowerCase()
    console.log(inp);
    let arr=["stone","paper","scissor"]
    let q=Math.round(Math.random()*3)
    if (q===3){q-=1}
    let m=arr[q]
    console.log(arr[q]);
    if (inp===m){alert("Draw")}
    else if((inp==="stone" && m==="paper") || (inp==="scissor" && m==="stone") || (inp==="paper" && m==="scissor")){
        alert("you lose")
    }
    else if((inp==="stone" && m==="scissor") || (inp==="paper" && m==="stone") || (inp==="scissor" && m==="paper")){
        alert("you win")
    }
    else{
        alert("enter a valid response")
    }
    play=confirm("do you want to play again?")
}