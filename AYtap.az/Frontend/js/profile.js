
const url = "http://localhost:3000/Users/";
const url2 = "http://localhost:3000/UsersCars/";
const div = document.getElementById("infos");
const button = document.getElementById("daxilol");
const adinput = document.getElementById("username");
const passinput = document.getElementById("password");
const box=document.querySelector(".box");
const h1 =document.getElementById("h1");
const h2 =document.getElementById("h2");
const cardata = document.querySelector(".cardata");


const writedata = async () => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    
    button.addEventListener("click", (e) => { 
      e.preventDefault();
      const ad = adinput.value;
      const pass = passinput.value;
      
      try {
        const user = data.find((user) => user.username === ad && user.password === pass);
        
        if (user) {
          h1.style.display="block";
          h2.style.display="none";
          div.style.display = "block";
          box.style.display="none";
          cardata.style.display="block";
          div.innerHTML = `<div class="info">
          <h2>id: ${user.id}</h2>
              <h3> username: ${user.username}</h3>
              <h3>name: ${user.name}</h3>
              <a href="./addcar.html"> <button id="addcar">Add Car</button></a>
              <a href="./index.html"> <button id="skip">Geri</button></a>
              </div>`;
              
        } else {
          alert("istifadeçi yoxdur."); 
        }
      } catch (error) {
        console.error("going wrong",error);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

writedata();


// const writedata = async () => {
//   try {
//     const response = await axios.get(url);
//     const data = response.data;
    
//     button.addEventListener("click", (e) => {
//       e.preventDefault();
//       const ad = adinput.value;
//       const pass = passinput.value;
      
      
//       const user = data.find((user) => user.username === ad && user.password === pass);
      
//       if (user) {
//         h1.style.display="block";
//         h2.style.display="none";
//         div.style.display = "block";
//         box.style.display="none";
//         cardata.style.display="block";
//         H.style.display="block";
//         div.innerHTML = `<div class="info">
//         <h2>id: ${user.id}</h2>
//             <h3> username: ${user.username}</h3>
//             <h3>name: ${user.name}</h3>
//             <a href="./addcar.html"> <button id="addcar">Add Car</button></a>
//             <a href="./index.html"> <button id="skip">Geri</button></a>
//             </div>`;
            
//       } else {
//         alert("istifadeçi yoxdur."); 
//       }
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// writedata();


const getdata =async()=>{
 const {data}= await axios(url2);
 
 data.forEach(({brand,model,engine})=>{
  cardata.innerHTML += `   <div class="car">
  <h2>${brand}</h2>
  <h3>${model}</h3>
  <h3>${engine}</h3>


  
  <hr>
</div>`

 })
}
getdata();

