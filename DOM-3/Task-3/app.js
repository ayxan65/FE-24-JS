button=document.getElementById("btn");
div=document.getElementsByClassName("div")[0];
input=document.getElementById("user")
h=document.getElementById("h")
let text=""
button.style.background="rgb(179, 179, 179)"
button.style.color="#000"
let mode="light mode"

let a=input.value
button.onclick=()=>{


  h.style.display="none"
  
  
  h.style.display="block"
  if(mode=="light mode"){
    button.innerText="light mode"
    mode="dark"
    document.body.style.background="#212121"
    div.style.color="#fff"
    if(  a.substring(0,1)!=  a.substring(0,1).toUpperCase()){
      a[0]=  a.substring(0,1).toUpperCase()
      h.innerText="hi "+a
    }
    button.style.background="#000"
    button.style.color="#fff"
    
    
    
    
  }
  
  else{
    button.innerText="dark mode";
    mode="light mode"
    document.body.style.background="white"
    div.style.color="black"
    button.style.background="rgb(179, 179, 179)"
    button.style.color="#000"
    localStorage.setItem("name",input.value)
    const ad=localStorage.getItem("name");
    h.innerText=ad
  }
  
  
}
