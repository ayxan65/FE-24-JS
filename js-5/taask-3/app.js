function rubl(){
    let dollar=+prompt("dollar balansını daxil edin")
    let rubl=+prompt("rubl balansını daxil edin: ")
    let cem=rubl+(100*dollar)
    alert(cem)
}
rubl()