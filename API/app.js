// const url = "https://dummyjson.com/products";
// const card = document.getElementsByClassName("card");
// const request = new XMLHttpRequest();
// let user = [];
// request.open("GET",url);
// request.onreadystatechange = ()=>{
//     if(request.readyState == 4){
//         const data = JSON.parse(request.response);
//         data.forEach(({names}) =>{
//             card.innerHTML += `<li>${names}</li>`;

//         })

        
//     }
// }
// request.send()




const url = "https://jsonplaceholder.typicode.com/users";
const cards = document.getElementById("cards")
const request = new XMLHttpRequest();
request.open("GET",url);
// let users = [];
request.onreadystatechange = ()=>{
    if(request.readyState ==4){
        const data=JSON.parse(request.response);
        data.forEach(({name,username,email,phone})=>{
            cards.innerHTML += ` <div class="card">
            <h2>${name}</h2>
            <h3>${username}</h3>
             <p>${email}</p>
             <p>${phone}</p>


        </div>`
       
        })
    }
}
request.send();








// const url = "https://jsonplaceholder.typicode.com/users";
// const cards = document.getElementsByClassName("card");
// const request = new XMLHttpRequest();
// let users = [];

// request.open("GET", url);
// request.onreadystatechange = () => {
//     if (request.readyState == 4 && request.status == 200) {
//         const data = JSON.parse(request.responseText);
//         for (let i = 0; i < data.length; i++) {
//             const { name } = data[i];
//             users.push(name);
//         }

//         for (let i = 0; i < cards.length; i++) {
//             const card = cards[i];
//             card.innerHTML = "<ul>"; // Start the unordered list
//             for (let j = 0; j < users.length; j++) {
//                 card.innerHTML += `<li>${users[j]}</li>`;
//             }
//             card.innerHTML += "</ul>"; // End the unordered list
//         }
//     }
// };
// request.send();
