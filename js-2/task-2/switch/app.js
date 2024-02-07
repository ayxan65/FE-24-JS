let ad=prompt("adınızı daxil edin:")
let gender=prompt("cinsinizi daxil edin:")
switch(gender){
    case "k":
        console.log(`xoş gelmisiniz ${ad} bey`);
    case "q":
        console.log(`xoş gelmisiniz ${ad} xanım`);
    default:
        console.log("error");
}