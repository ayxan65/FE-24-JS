const container = document.querySelector(".container");
const id = new URL(document.location).searchParams.get("id");
const url = "http://localhost:3000/cars/";
const test = axios(url).then((res)=>{
    res.data.forEach(element => {
        if(element.id == id){
            container.innerHTML +=
            `  <div class="car">
             <img src="${element.image}" alt="">
            <h2>${element.brand}</h2>
            <h3>${element.model}</h3>
            <h3>${element.price} ${element.currency}</h3>
            <h3>${element.engine}</h3>
            <h3>${element.kilometers}</h3>
            <h3>added by : ${element.author}</h3>
          </div>`
        }
    })
})