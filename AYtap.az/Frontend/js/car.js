const url = "http://localhost:3000/cars/";
const container = document.querySelector(".container");

getData =async()=>{
    const {data} = await axios(url);
    data.forEach(({brand,model,image,engine,kilometers})=>{
        container.innerHTML =`<div class="header"><h2>${brand}</h2><h2>${model}</h2><h2>${engine}</h2><h2>2017</h2><h2>${kilometers}</h2></div>
        <div class="photo">
            <img src="${image}" alt="">
        </div>
        <div class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iste magni harum deleniti quo, accusantium facere dolore reprehenderit hic consectetur similique eaque ipsam aliquam fugit illo deserunt totam architecto placeat?
        </div>`
    })
}
getData();






