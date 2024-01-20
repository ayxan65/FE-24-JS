let myfunction=(number,yes,no,)=>{
    if(number>10){
        
        yes()
    }
    else{
        no()
    }
    
    }
    myfunction(20,function(){
        console.log(`tebrikler ${uni} ye daxil olmusunuz`);
    },function(){
        console.log("üzgün");
    })