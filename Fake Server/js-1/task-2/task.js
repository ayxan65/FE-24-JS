let a = +prompt("eded daxil edin:");
if (a<=0){
    console.log("müsbet eded daxil edin.");
}
switch (a){
    case 1:
        console.log("ne sade ne de mürekkeb ededdir");
}
for(let i =2;i<a;i++){
    if (a%i===0){
       console.log("sade eded deyil");
       break;
       
    }
    else if (a%i!=0){
        console.log("sade ededdir");
        break;
    }

}