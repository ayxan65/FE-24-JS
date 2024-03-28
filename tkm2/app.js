
// const tas=document.getElementById("tas");
// const kagit=document.getElementById("kagit");
// const makas=document.getElementById("makas");
// const elements=["kağıt","makas","taş"]
// let RandomElement=elements[Math.floor(Math.random()*elements.length)];

// tas.onclick=()=>{
 
// }
// kagit.onclick=()=>{
    
// }
// makas.onclick=()=>{
    
//     if(RandomElement=="makas"){
//         console.log("barabere");
//     }
// }
// button.onclick=()=>{
//    let RandomElement=elements[Math.floor(Math.random()*elements.length)];
//    if(value==RandomElement){
//     console.log("berabere");
//    }
//    else if  (RandomElement=="taş" && Texmin=="kağıt" ||
//    Texmin == "taş" && RandomElement == "makas" ||
//    RandomElement == "kağıt" && Texmin=="makas"        

// ) {
// console.log("qazandınız");
// }
// else{
// console.log("komp qazandı");
// }
// }




const tas = document.getElementById("tas");
const kagit = document.getElementById("kagit");
const makas = document.getElementById("makas");
const elements = ["kağıt", "makas", "taş"];

let RandomElement = elements[Math.floor(Math.random() * elements.length)];

tas.onclick = () => {
    if (RandomElement === "taş") {
        console.log("Berabere");
    } else if (RandomElement === "kağıt") {
        console.log("Kağıt kazandı!");
    } else {
        console.log("Taş kazandı!");
    }
};

kagit.onclick = () => {
    if (RandomElement === "kağıt") {
        console.log("Berabere");
    } else if (RandomElement === "makas") {
        console.log("Makas kazandı!");
    } else {
        console.log("Kağıt kazandı!");
    }
};

makas.onclick = () => {
    if (RandomElement === "makas") {
        console.log("Berabere");
    } else if (RandomElement === "taş") {
        console.log("Taş kazandı!");
    } else {
        console.log("Makas kazandı!");
    }
};
