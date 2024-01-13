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
   console.log("düzgün texmin tebrikler");
   
   console.log("siz "+texmin+" defeye ededi tapdız ");

 if(texmin===1){
    console.log("1000 manat qazandınız");
   }
   else if(texmin==2 || texmin==3 || texmin==4 || texmin==5 ){
        console.log("750 manat qazandınız");
   }
 
   else if(texmin==6 || texmin==7 || texmin==8 || texmin==9){
    console.log("250 manat qazandınız");

   }
   else if(texmin>10){
    console.log("bir de texmin eleme");
   }


