const button=document.getElementById("button");
const input=document.getElementById("input");
const guess=document.getElementById("guess");
const Result=document.getElementById("netice");
const computer=document.getElementById("computer");
const elements=["taş","kağıt","makas"];
let RandomElement=[];


button.onclick=()=>{
    
    RandomElement= elements[Math.floor(Math.random()*elements.length)];
    guess.innerText=`Sizin texmininiz => `+input.value;
    computer.innerText=`Kompüterin texmini => `+RandomElement
    let Texmin=input.value.toLowerCase();
    if(Texmin == "kağıt" || Texmin == "makas" || Texmin == "taş"){
        
            
    

    

  

  if(RandomElement == Texmin ){
        Result.innerText="Berabere"
        Result.style.color="black"
   }
   else if(RandomElement=="taş" && Texmin=="kağıt" ||
          Texmin == "taş" && RandomElement == "makas" ||
          RandomElement == "kağıt" && Texmin=="makas"        

   ) {
     Result.innerText= "Siz qazandınız :)";
     Result.style.color="green";
   }
   else{
    Result.innerText="kompüter qazandı :("
    Result.style.color="red"
   }
}
else{
    Result.innerText="Düzgün element daxil edin !"
    guess.innerText=''
    computer.innerText='' 
     Result.classList.toggle("colors");
    // Result.style.color="black"
}
input.value=''
}






input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
       
        button.onclick();
    }
});