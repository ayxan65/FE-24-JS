let gender=prompt("cinsinizi daxil edin:")
let age=+prompt("yaşınızı daxil edin:")
let ad=prompt("adınızı daxil edin:")
if(age>=18 && gender=="k"){
    console.log(`xoş gelmisiniz ${ad} bey`);

}
else if (age>=18 && gender=="q"){
    console.log(`xoş gelmisiniz ${ad} xanım`);
}
else if(age<18){
    console.log("girişiniz qadağandır");
    
}
else{
    console.log(`melumatları düzgün daxil edin`);
}