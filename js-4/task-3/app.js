let n=Math.floor(Math.random()*100)
let m=+prompt("eded texmin edin : ")
let texmin=1
while(m!==n){
    if(m!==n)
    {
        texmin++
    }
  
    if(m>n){
       alert("asagi dus");
    
   }
   
   else{ alert("yuxarı qalx");}
   m=+prompt("eded texmin edin : ")
   }
   if(texmin>8){
        console.log("zeif texmin");
   }
   else if(texmin===1){
    console.log("möhteşem");
   }
   else if(texmin<5 && texmin!==1){
    console.log("ela texmin");

   }
   console.log("siz "+texmin+" defeye ededi tapdız ");
console.log("düzgün texmin tebrikler");
