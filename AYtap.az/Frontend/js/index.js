const url ="http://localhost:3000/cars/";
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const cards=document.getElementById("cards")

const GetData =async()=>{
    const {data} =await axios(url);
    data.forEach(({brand,image,model,engine,price,kilometers,currency})=>{  cards.innerHTML+=`<div class="card">
<a href="#"></a>
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

button1.onclick=()=>{
    let ad = prompt("istifadeçi adınınzı daxil edin:");
    let password = prompt("parolunuzu daxil edin:");
}
cards.style.display="flex";
cards.style.flexWrap="wrap"
cards.style.width="1200px"
cards.style.margin="30px auto"
GetData();





  







