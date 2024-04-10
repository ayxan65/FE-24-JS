// const url = "http://localhost:3000/cars/";
// const url2 = "http://localhost:3000/Users/";
// const SubmitButton = document.querySelector("#SubmitBtn");
// const NameInput = document.querySelector("#name");
// const UserInput = document.querySelector("#username");
// const PassInput = document.querySelector("#pass");

// SubmitButton.addEventListener("click", (e) => {
//     e.preventDefault()
//     const name = NameInput.value;
//     const username = UserInput.value;
//     const password = PassInput.value;

//     const newUser = {
//         name,
//         username,
//         password
//     };

//      axios.post(url2,newUser).then((res)=>{
//         console.log(res);
//         alert("istifadeçi elave olundu")
//      })
// });






const url2 = "http://localhost:3000/Users/";
const SubmitButton = document.querySelector("#SubmitBtn");
const NameInput = document.querySelector("#name");
const UserInput = document.querySelector("#username");
const PassInput = document.querySelector("#pass");

SubmitButton.addEventListener("click", (e) => {
    e.preventDefault()
    const name = NameInput.value;
    const username = UserInput.value;
    const password = PassInput.value;

    const newUser = {
        name,
        username,
        password
    };

    // Store user data in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Post user data to the server
    axios.post(url2, newUser)
        .then((res) => {
            console.log(res);
            alert("İstifadəçi əlavə olundu");
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Xəta baş verdi. İstifadəçi əlavə olunmadı.");
        });
});
