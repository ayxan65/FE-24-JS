
// TASK-1
// function cons(_marka,_model,_engine){
//        this.marka=_marka
//        this.model=_model
//        this.engine=_engine

// }
// console.log(new cons("mercedes","w210",2.2))

//**************************************************** */


// TASK-2

// const User1={
//     id:1,
//     name:"john Doe",
//     username:"bret",
//     email:"sincere@gmail.com",
//     adress:{
//         street:" kulas ngiht",
//         city:"baku",
//         geo:{
//             lat:"137.56.007",
//             lng:"81.34.53"
//         }
//     }

// }

// const User2=User1
// console.log(User1);
// console.log(User2);
// User2.name="ayxan mammadli"
// User1.username="Coder"
// console.log(User1);
// console.log(User2);

// User1 ve User2-nin referans kodları eyni olduğuna göre User1 de olunan her bir
// deyişiklik User2 obyektine tesir edir (ve ya tersine)


//********************************************************** */

// TASK-3

// const User1={
//     id:1,
//     name:"john Doe",
//     username:"bret",
//     email:"sincere@gmail.com",
//     adress:{
//         street:" kulas ngiht",
//         city:"baku",
//         geo:{
//             lat:"137.56.007",
//             lng:"81.34.53"
//         }
//     }

// }
// const User2={...User1};
// console.log(User2);
// const User2={
//     car:"BMW"
// }
// const User3=Object.assign({},User2,User1)
// console.log(User3);

// obyektleri birleşdşrmek üçün istifade olunur amma tam başa düşmedim :(


/******************************************************* */


// TASK-4

// function sum(a,b,c, ... rest){
//     console.log(rest);
    

// }
// sum(3,6,8,6,4,6,7,8,9,5,3,5)


// const User1={
//     id:1,
//     name:"john Doe",
//     username:"bret",
//     email:"sincere@gmail.com",
//     adress:{
//         street:" kulas ngiht",
//         city:"baku",
//         geo:{
//             lat:"137.56.007",
//             lng:"81.34.53"
//         }
//     }

// }
// const User2={...User1};
// console.log(User2);

// spread operatoru user1 obyektinin deyerlerini user2 ye kopyalayır lakin referanslar 
// ferqli olur

//******************************************************* */

// TASK-5

// function property(_object,name){
//     this.continent=_object
//     return name


// }

// console.log(new property("asia"));  => ALINMADI














