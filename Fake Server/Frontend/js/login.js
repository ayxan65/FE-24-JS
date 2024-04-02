const url = "http://localhost:3000/users/";
const addUser = document.getElementById("addUser")
const nameinput = document.getElementById("ad");
const surnameinput = document.getElementById("soyad");
const descriptionİnput = document.getElementById("description");
const imageİnput = document.getElementById("img"); 
const button = document.getElementById("button2")
button.addEventListener("click",(e)=>{
    e.preventDefault();
    const name=nameinput.value;
    const surname=surnameinput.value;
    const description=descriptionİnput.value;
    const image=imageİnput.value;
    const newUser={
      name,
      surname,
      description,
      image
    }
  if(name && surname && image && description){
    axios.post(url,newUser).then(()=>{
        alert("İstifadeçi elave olundu")
        
        
    }
    
    )

  }
  else{
    alert("xanaları tam doldurun !")
  }
})

