const url="http://localhost:3000/Users/";
const url2="http://localhost:3000/UsersCars/"
const div=document.getElementById("infos");
const writedata=async()=>{
    const {data}=await axios(url);
    data.forEach(({id,username,name})=>{
        div.innerHTML+= `<div class="info">
        <h2>id: ${id}</h2>
        <h3> username: ${username}</h3>
        <h3>name: ${name}</h3>
        <a href="./addcar.html"> <button id="addcar">Add Car</button></a>
        <a href="./index.html"> <button id="skip">Geri</button></a>
        </div>`
        
    })

}


writedata();

