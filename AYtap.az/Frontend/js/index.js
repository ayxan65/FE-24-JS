const url ="http://localhost:3000/cars/";
const url2 = "http://localhost:3000/Users/";
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const cards=document.getElementById("cards");


const GetData =async()=>{
    const {data} =await axios(url);
    data.forEach(({brand,image,model,engine,price,kilometers,currency})=>{  cards.innerHTML+=`<div class="card">
<a href="./car.html"></a>
<img src="${image}" alt="">
<div class="specs">
<h2>${price}${currency}</h3>
<p>${brand}</p>
<p>${model}</p>
<p>${engine}</p>
<p>${kilometers}</p>
</div> 
</div>
</div>`})


}



const chechUser = async () => {
    const { data } = await axios(url2);
    
    button1.addEventListener("click", () => {
        window.location.href = "./profile.html";
        // const ad = prompt("İstifadəçi adınızı daxil edin");
        // const pass = prompt("Şifrənizi daxil edin");
        
        // let isAuthenticated = false;
        // data.forEach(({ username, password }) => {
        //     if (ad === username && pass === password) {
        //         isAuthenticated = true;
        //     }
        // });

        // if (isAuthenticated) {
        //     window.location.href = "./profile.html";
        // } else {
        //     alert("Belə istifadəçi yoxdur");
        // }
    });
}

chechUser();



button2.onclick=()=>{
    
}
cards.style.display="flex";
cards.style.flexWrap="wrap"
cards.style.width="1200px"
cards.style.margin="30px auto"
GetData();





  







