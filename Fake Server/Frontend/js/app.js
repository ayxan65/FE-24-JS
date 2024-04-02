const url = "http://localhost:3000/users/";
const Users = document.querySelector(".users");
const button = document.querySelector("#button");

// /**** await axios ile ******/

function deleteUser(id){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
          axios.delete(url + id).then(res=>{
            if(res.statusText =="OK"){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  location.reload();
            }

          })
        }
       
      });

}
const WriteData = async () => {
    const {data} = await axios(url);
    
    data.forEach(({id, name, surname, description, img }) => {
        const userElement = document.createElement("div");
        userElement.classList.add("user");

        userElement.innerHTML += `
            <h3>${name}</h3>
            <h4>${surname}</h4>
            <p>${description}</p>
            <img src="${img}" alt="">
            <button class="delete-button" onclick="deleteUser('${id}')">Delete</button>
        `
        Users.appendChild(userElement);
        
        const deleteButton = userElement.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            
            
        });
    });
};

WriteData();


/******** axios then ile ********/

// const WriteData = () => {
//     axios.get(url) 
//         .then(response => {
//             const data = response.data;
//             data.forEach(({ name, surname, description, img }) => {
//                 Users.innerHTML += `
//                     <div class="user">
//                         <h3>${name}</h3>
//                         <h4>${surname}</h4>
//                         <p>${description}</p>
//                         <img src="${img}" alt="">
//                     </div>`;
              
//             });
//         })
//         .catch(error => {
//             console.error("Error", error);
//         });
// };
// WriteData();




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
 

