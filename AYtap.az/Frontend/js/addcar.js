const url = "http://localhost:3000/cars/"
const brandinput=document.getElementById("brand");
const modelinput=document.getElementById("model");
const imageinput=document.getElementById("image");
const engineinput=document.getElementById("engine");
const kilometersinput=document.getElementById("kilometers");
const priceinput=document.getElementById("price");
const currencyinput=document.getElementById("currency");
const button=document.getElementById("add");
const geributton=document.getElementById("geri");
button.addEventListener("click",(e)=>{
    NewUser ={
        brand:brandinput.value,
        model:modelinput.value,
        image:imageinput.value,
        engine:engineinput.value,
        kilometers:kilometersinput.value,
        price:priceinput.value,
        currency:currencyinput.value
    }
    e.preventDefault();
    if(brand && model&& image&& engine&& kilometers && price && currency){
        axios.post(url,NewUser).then(res=>{
            console.log(res);
            alert("elave edildi")
        })
    }
})

geributton.onclick=()=>{
    window.location.href="index.html"
}