

let red=document.getElementById("red")
let green=document.getElementById("green")
let purple=document.getElementById("purple")
let blue=document.getElementById("blue")


function redclick(){
        
document.body.style.background="red"
   

}
function greenclick(){
    document.body.style.background="green"
}
function purpleclick(){
    document.body.style.background="purple"

}
function blueclick(){
    document.body.style.background="blue"

}
blue.onclick=blueclick
purple.onclick=purpleclick
green.onclick=greenclick
red.onclick=redclick





const button=document.querySelectorAll(".buttons")
button.forEach(item=>{

    const color=item.className.split("")[1]
    item.onclick=()=>{
        
    }
})





