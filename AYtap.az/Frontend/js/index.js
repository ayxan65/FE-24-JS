const url ="http://localhost:3000/";
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const cards=document.getElementById("cards")

const GetData =async()=>{
    const {data} =await axios(url);
    console.log(data);
data.forEach(({brand,model,engine,price,kilometers})=>{  cards.innerHTML+=`<div class="card">
<a href="#"></a>
<img src="./images/mercedes.webp" alt="">
<div class="specs">
<h2>${price}</h3>
<p>${brand}</p>
<p>${model}</p>
<p>${engine}</p>
<p>${kilometers}</p>
</div>
</div>
</div>`})

   
}
GetData();





  







