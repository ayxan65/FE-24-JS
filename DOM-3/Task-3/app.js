button=document.getElementById("btn");
div=document.getElementsByClassName("div")[0];
let mode="light mode"
button.onclick=()=>{
  if(mode=="light mode"){
    button.innerText="dark mode"
    mode="dark"
    document.body.style.background="#212121"
    div.style.color="#fff"
    
}
else{
    button.innerText="light mode";
    mode="light mode"
    document.body.style.background="white"
    div.style.color="black"
  }

}