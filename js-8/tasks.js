// let arr=["Ayxan","Amin","Anar"];

// arr1=arr.push("Eli")
// console.log(arr);


// *******************************************

// TASK-2

// let arr=["Ayxan","Alex","Jessica"];
// arr[1]="classifaed"
// console.log(arr);


// *************************************************

// TASK-3

// let arr = ['New Hope','The Empire Strikes Back','Return of the JDİ'];

// for (let i = 0; i < arr.length; i++) {


//     console.log(`episode ${i + 4}: ${arr[i]}`);


// }


//************************************************** */


// TASK-4

// let a=prompt("5 eded daxil edin: ");
// let arr=a.split(",");
// console.log(arr);
// TheBiggestNumber=arr[0];
// for(elements in arr){
//     if(arr[elements]>TheBiggestNumber)
//     {
//         TheBiggestNumber=arr[elements]
//     }
// }
// console.log(`en böyük eded: ${TheBiggestNumber}`);


/*********************************************************** */


//TASK-5


// let a=prompt("ededler daxil edin")
// let arr = a.split(",")
// let arr1=arr.join(";")
// console.log(arr1);


let a = prompt("Enter numbers separated by commas: ");
let arr = a.split(",").map(Number); // Convert strings to numbers
console.log("Original array:", arr);

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Sorted array:", arr);
console.log(arr===arr);








