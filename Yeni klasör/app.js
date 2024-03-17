const button=document.getElementById("button");
const input=document.getElementById("input");
const button2=document.getElementById("button2");
const button3=document.getElementById("button3");


button.onclick=()=>{
 li=document.createElement("li")
 li.innerText=input.value;
 document.body.appendChild(li);
 input.value=' '
const deleteButton=document.createElement("button");
deleteButton.innerText="X";
deleteButton.style.width="50px"
deleteButton.style.height="50px"
deleteButton.style.color="red"
deleteButton.style.fontSize="22px"
deleteButton.onclick = () => {
  li.style.display="none";

};
const confirmButton = document.createElement("button");
confirmButton.innerText = "V";
confirmButton.style.width="50px";
confirmButton.style.height="50px";
confirmButton.style.marginLeft="20px";
confirmButton.style.marginRight="20px";
confirmButton.style.fontSize="22px";
confirmButton.style.color="green";
confirmButton.onclick = () => {
    li.style.color = "green";
};
li.appendChild(confirmButton);
li.appendChild(deleteButton);


 


}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
       button.onclick()
    }
});



    
    
