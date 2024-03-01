// TASK-1

// let a=[2,3,4,5,9,1,12,98];
// let b=[2,3,1,78,66,12,33,125];
// let c=a.concat(b)
// let d=[]
// console.log(c);
// for(i of c){
//     if(c.lastIndexOf(i)===c.indexOf(i)){
//         d.push(i)
//     }
// }

// console.log(d);


//*************************************************** */


// TASK-2

// let a = [2, 3, 4, 5, 9, 1, 12, 98];
// let b = [2, 3, 1, 78, 66, 12, 33, 125];
// let c = [];


// for (let i of a) {
//     if (!b.includes(i)) {
//         c.push(i);
//     }
// }

// console.log(c);


//**************************************************** */

// TASK-3

// const SortArray=()=>
// {
//     let a=prompt("massivi daxil edin: ")
//     arr=a.split(",");
//    let n=arr.length
//    for(i=0;i<n-1;i++){
//         if(arr[i]>=arr[i+1]){
//             let temp=arr[i];
//             arr[i]=arr[i+1];
//             arr[i+1]=temp
            
//         }
//    }
    
//     return arr
// }
// console.log(SortArray());   ===>  ALINMADI


//************************************************** */

// TASK-4

// const funk=(arr)=>

// {  let a=[]
//    for(i of arr) 
//    {
//     if(i<0){
//          a.push(i)
//     }
//     else{return "menfi eded yoxdur"}
//    }
//    return a
// }
// console.log(funk(arr=[1,2,3,4]));

//************************************************ */


// TASK-6

// const positivestodoublenegativestopostive=()=> // biraz uzun oldu
// {
//   let a=prompt("daxil edin:")
//   let arr=a.split(",").map(Number)
//    for(let i=0;i<arr.length;i++){
//     if(arr[i]>=0){
//         arr[i]=arr[i]*2
//     }
//     else { 
//         arr[i]=-(arr[i])
//     }
//   }
//   return arr


// }
// console.log(positivestodoublenegativestopostive());


// TASK-7

// let namesArray = [
//     "Alice",
//     "Bob",
//     "Catherine",
//     "David",
//     "Eva",
//     "Andrew",
//     "Frank",
//     "Anna",
//     "George",
//     "Alex",
//   ];
//   let Aarray=[];

// for(i of namesArray){
//     if(i[0]==="A"){
//       Aarray.push(i)
//     }
// }
// console.log(Aarray);




