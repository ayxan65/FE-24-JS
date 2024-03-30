const url = "http://localhost:3000/users";
const Users = document.querySelector(".users");

/**** await axios ile ******/


// const WriteData= async()=>{
//     const {data}=await axios(url);

//     data.forEach(({name,surname,description,img})=> {
        
//         Users.innerHTML +=`<div class="user">
//         <h3>
//         ${name}
//         </h3>

//         <h4>
//         ${surname}
//         </h4>
//         <p>
//             ${description}
//         </p>
        
//         <img src="${img}" alt="">

//     </div>`
        
//     });
// }
// WriteData();



/******** axios then ile ********/

const WriteData = () => {
    axios.get(url) 
        .then(response => {
            const data = response.data;
            data.forEach(({ name, surname, description, img }) => {
                Users.innerHTML += `
                    <div class="user">
                        <h3>${name}</h3>
                        <h4>${surname}</h4>
                        <p>${description}</p>
                        <img src="${img}" alt="">
                    </div>`;
              
            });
        })
        .catch(error => {
            console.error("Error", error);
        });
};
WriteData();




/******* Fetch ile ********/


// const writeDataWithFetch = () => {
//     const data = fetch(url);
    
//     data.then(response => response.json())
//         .then(data => {       
//             data.forEach(({ name, surname, description, img }) => {
//                 Users.innerHTML += `
//                     <div class="user">
//                         <h3>${name}</h3>
//                         <h4>${surname}</h4>
//                         <p>${description}</p>
//                         <img src="${img}" alt="">
//                     </div>`;
//             });
//         });
//  }
 
//  writeDataWithFetch();
 

