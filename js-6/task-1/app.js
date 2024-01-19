let myfunction=(number)=>{

   for(let i=2;i<=number;i++){
    if(number%i!==0){
     return `${number} is prime`
    }
   

  else{
    return `${number} is not prime`
  }
}
}
console.log(myfunction(86));