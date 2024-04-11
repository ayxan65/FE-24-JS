const url2 = "http://localhost:3000/Users/";
const SubmitButton = document.querySelector("#SubmitBtn");
const NameInput = document.querySelector("#name");
const UserInput = document.querySelector("#username");
const PassInput = document.querySelector("#pass");

SubmitButton.addEventListener("click", (e) => {
    e.preventDefault()
    const name = NameInput.value;
    const username = UserInput.value;
    const password = PassInput.value;

    const newUser = {
        name,
        username,
        password
    };
 const getdata=async()=>{
    const {data}=await axios(url2);
    data.forEach(({username})=>{
        if(UserInput.value == username){
            
                
                alert("bele bir istifadeçi var");
            
            
            
        }
    })
 }
 if(name && username && password){
     
     axios.post(url2, newUser)
     .then((res) => {
         console.log(res);
         alert("İstifadəçi əlavə olundu");
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Xəta baş verdi. İstifadəçi əlavə olunmadı.");
        });
    }
    else{
        alert("xanaları tam doldurun")
    }
    getdata();

});
