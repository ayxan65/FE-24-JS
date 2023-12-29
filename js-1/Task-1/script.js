
    let a = +prompt("a nı daxil edin");
    let b = +prompt("b nı daxil edin");
    let c = +prompt("c nı daxil edin");
  
    if (a + b <= c || b + c <= a || a + c <= b) {
      console.log("Bele 3 bucaq mumkun deyil.");
     
    }
  else{
    let d = a + b + c;
    console.log(d);
  }

  