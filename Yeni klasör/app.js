
const button = document.getElementById("button");
const input = document.getElementById("input");

button.onclick = () => {
    const li = document.createElement("li");
   
    li.innerText = input.value;
    document.body.appendChild(li);
    input.value = '';
    li.style.marginTop="10px"
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.style.width = "50px";
    deleteButton.style.height = "50px";
    deleteButton.style.color = "red";
    deleteButton.style.fontSize = "22px";
    deleteButton.onclick = () => {
        li.style.display = "none";
    };

    const confirmButton = document.createElement("button");
    confirmButton.onclick = () => {
        li.style.color = "green";
        li.style.textDecoration="line-through";
    };
    confirmButton.innerText = "V";
    confirmButton.style.width = "50px";
    confirmButton.style.height = "50px";
    confirmButton.style.marginLeft = "20px";
    confirmButton.style.marginRight = "20px";
    confirmButton.style.fontSize = "22px";
    confirmButton.style.color = "green";

    li.appendChild(confirmButton);
    li.appendChild(deleteButton);
}


input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
       button.onclick()
    }
});



    
    
