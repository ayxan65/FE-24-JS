function finder(){
    let a=+prompt("a nı daxil edin : ")
    let b=+prompt("b ni daxil edin : ")
    let c=+prompt("c ni daxil edin : ")
   
    if(a>b && a>c){
        alert("a en böyükdür")
    }
    if(b>a && b>c){
        alert("b en böyükdür")
    }
    if(c>a && c>b){
        alert("c en böyükdür")
    }
}
finder()