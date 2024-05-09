button=document.getElementById("button")
input=document.getElementById("input")
 const fact=(num)=>{
        sum=1
        for(let i=1;i<=num;i++){
             sum*=i
        }
     return sum;
    }
button.onclick=()=>{
 
        input.value=fact(input.value)
    
        
       
        
     
      
    }
