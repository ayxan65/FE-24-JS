// TASK-1 (parametr kimi istifadeçi adı)

// const ad= (username)=>
// {
//     console.log(username+" is active now");

// }
// ad("ayxan")

//************************************************** */

// TASK-2 (üç ededin en böyüyü)

// const bigger =(num1,num2,num3) =>
// {
//      if(num1>num2 && num1>num3)
//      {
//         console.log(`en böyük eded: ${num1}`);
//      }
//      else if(num2>num1 && num2>num3)
//      {
//         console.log(`en böyük eded: ${num2}`);
//      }
//      else if(num3>num2 && num3>num1)
//       {
//         console.log(`en böyük eded: ${num3}`);

//       }
//      else if(num3===num2 && num3===num1 && num2===num1)
//      {

//         console.log("ededler beraberdir");
//      } 
// }
// bigger(241,223,282)

//************************************************************** */

// TASK-3 (USD rubl)

// const convert=(usd,rubl)=>
// {
//     let cem =(usd*75)+rubl
//     return cem
// }
// console.log(convert(20,1500));


//**************************************************************** */

// TASK-4

// const min=(num1,num2)=>
// {
//        if(num1>num2){
//         console.log("2 ci eded kiçikdir: "+num2)
//        }
//        else if(num2>num1)
//        {
//         console.log(`1 ci eded kiçikdir: ${num1}`);
//        }
//        else{
//         console.log("beraberdirler");
//        }
      
// }
// min(471,655)


//********************************************************************* */


// TASK-5


// const calc=(num1,num2,oper)=>
// {
//    switch(oper)
//    {
//     case "+":
//         return num1+num2
//     case '*':
//         return num1*num2
//     case '-':
//         return num1-num2
//     case "/":
//         return num1/num2            
//    }


    
// }
// document.write(calc(45,5,"/"))


//************************************************************ */


// TASK-6 (isLucky)

// const islucky=(x1,x2,x3,x4,x5,x6)=>

// {
//   if(x1+x2+x3===x4+x5+x6)
//   {
//     console.log(`${x1+x2+x3} = ${x4+x5+x6}`);
//     console.log("Lucky");
//   }
//   else{
//     console.log(`${x1+x2+x3} != ${x4+x5+x6}`);
//     console.log("Not Lucky");
//   }
  
// }
// islucky(2,3,4,3,7,3)


// 2-Cİ ÜSUL : 


// const islucky=(code)=>
// {
//     code=String(code)
//     if(code.length!=6){console.log("6 reqem daxil edin!!!");}
    
    
//         if(Number(code[0])+Number(code[1])+Number(code[2])==Number(code[3])+Number(code[4])+Number(code[5]))
//         {
//            return "tebrikler qazandınız"
//         }
//         else if((Number(code[0])+Number(code[1])+Number(code[2])!=Number(code[3])+Number(code[4])+Number(code[5]))){
//            return "şansınızı bir daha sınayın :("
//         }
//         else{
//             return "eded daxil edin !!!"
//         }
    
// }
// console.log(islucky(222114));




//*************************************************************** */

// TASK-7 (isEVEN)

// const isEven=(num)=>
// {
//   if(num%2===0)
//   {
//     return true
//   }
//   else{
//     return false
//   }
// }
// console.log(isEven(654));


/********************************************************* */


// TASK-8 (NumCounter)

// const NumCounter =(text)=>
// {


//      return text.length
// }
// console.log(NumCounter("salam"));


//************************************************************** */

// TASK-9 (factorial)

// const fact=(num)=>
// {

//     let cem=1
//    for(let i=2; i<=num;i++)
//    {
//     cem=cem*i
//    }
//    return cem

// }
// console.log(fact(5));



//******************************************************************** */


// TASK-10 

// const isNegative=(num)=>
// {
//     if(num>0)
//     {
//         return "müsbetdir"
//     }
//     else if(num<0)
//     {
//         return "menfidir"
//     }
//     else if(num===0)
//     {
//         return "sıfırdır"
//     }
//     else{
//         return "eded daxil edin !!!"
//     }
// }
// console.log(isNegative(-347));


//************************************************************ */


// TASK-11 (mükemmel eded)

// const perfect=(num)=>
// {

//     let newNum=0


//     for(let i=1;i<num;i++)
//     {
//         if(num%i===0)
//         {
//             newNum+=i
//         }
     
//     }

//     if(newNum===num)
//     {
//         return "mükemmmel ededdir"
//     }
//     else{
//         return "mükemmel eded deyil"
//     }
     

// }
// console.log(perfect(8128));  


//**************************************************** */


 // TASK-12 (ayların günleri)

//  const month=(ay)=>
//  {
//     switch(ay)
//     {
//         case "yanvar":
//             return 31
//         case "fevral":
//             return 28 
//         case "mart":
//             return 31
//         case "aprel":
//             return 30
//         case "may":
//             return 31
//         case "iyun":
//             return 30
//         case "iyul":
//             return  31
//         case "avqust":
//             return 31
//         case "sentyabr":
//             return 30
//         case "oktyabr":
//             return 31
//         case "noyabr":
//             return 30
//         case "dekabr":
//             return 31
//         default:
//               return "bele ay yoxdur !!!" 
        
//     }
//  }
//  console.log(month("fevral"));









//**************************************************** */


// TASK-13 (EBOB)

// const EBOB=(num1,num2)=>
// {

//    let small
//    if(num1>num2){
//     small=num2
//    }
//    else if(num1<num2)
//    {
//     small=num1
//    }

//    else if(num1===num2){
//     return `EBOB = ${num1}`
//    }
//    else{
//     return "eded daxil edin !!!"
//    }
//    for(let i=small;i>0;i--)
//    {
//       if(num1%i===0 && num2%i===0)
//       {
//         return `EBOB = ${i}`
//       }
//    }


// }

// console.log(EBOB(24,16));


//****************************************************** */


// TASK-14 (Polindrom)


// const Polindrom=(text)=>
// {
//     let Newtext=''
//     for(let i=text.length-1;i>=0;i--)
//     {
//         Newtext+=text[i]
//     }
//     if(Newtext==text)
//     {
//         return "polindromdur"
//     }
//     else{
//         return "polindrom deyil"
//     }
     
// }
// console.log(Polindrom("abcddcba"));

//********************************************************** */



// TASK-15 (Armstrong)

// const Armstrong=(num)=>
// {
//     cem=0
//     num=String(num)
//      for(let i=0;i<=num.length-1;i++)
//      {
//         cem+=(num[i]**3)

//     }
//     num=Number(num)
//     if(cem===num){
//         return `${num} armstrong ededidir.`

//     }
//     else if(cem!==num){ return `${num} armstrong ededi deyil.`}
//     else{return "eded daxil edin !!!" }
// }
    


// console.log(Armstrong(370));



//************************************************************* */


// TASK-16 (metndeki herfin tapılması)

// const letterfind=(text,letter)=>
// {

//     say=0
//      for(let i=0;i<text.length;i++)
//      {
//         if(letter==text[i])
//         {
//             say+=1
//         }
//      }
//      return say
// }
// console.log(letterfind("ayxan","a"));


//**************************************************** */


// TASK-17 (isİntiger)

// const isİntiger=(any)=>
// {

// stany=Number(any)
// if(any===stany){
//     return true
// }
// else{
//     return false
// }

// }
// console.log(isİntiger(123));


//************************************************************** */


// TASK-18 (3 reqem cemi)

// const digit=(num)=>
// {
//     cem=0
//     num=String(num)
//     for(let i=0;i<=num.length;i++)
//     {
        
//         cem=cem+i
        
//     }
//    return cem
// }
// console.log(digit(123));

