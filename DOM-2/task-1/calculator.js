btn1=document.getElementById("btn1")
btn2=document.getElementById("btn2")
btn3=document.getElementById("btn3")
btn4=document.getElementById("btn4")
btn5=document.getElementById("btn5")
btn6=document.getElementById("btn6")
btn7=document.getElementById("btn7")
btn8=document.getElementById("btn8")
btn9=document.getElementById("btn9")
btn10=document.getElementById("btn10")
btn12=document.getElementById("btn12")
btn13=document.getElementById("btn13")
button=document.getElementsByClassName("button");
inp=document.getElementById("input")
let value=0
btn1.onclick=()=>{
    input.value+=1
}
btn2.onclick=()=>{
    input.value+=2
}
btn3.onclick=()=>{
    input.value+=3
}
btn4.onclick=()=>{
    input.value+=4
}
btn5.onclick=()=>{
    input.value+=5
}
btn6.onclick=()=>{
    input.value+=6
}
btn7.onclick=()=>{
    input.value+=7
}
btn8.onclick=()=>{
    input.value+=8
}
btn9.onclick=()=>{
    input.value+=9
}
btn10.onclick=()=>{
    input.value+=0
}
btn11.onclick=()=>{
    input.value+="+"
}
btn12.onclick=()=>{
    input.value+=`*`
}
btn13.onclick=()=>{
   input.value=eval(input.value)
   
}
btn14.onclick=()=>{
    input.value=''
}