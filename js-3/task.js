// TASK-1 (texmin oyunu)

// const n=Math.floor((Math.random()*100)+1)
// let eded=+prompt("eded daxil edin: ")
// let cehd=1
// while(eded!==n){

//     if(eded>n){
//         eded=+prompt("aşagi düş")
    
//        }
//        else if(eded<n){
//         eded=+prompt("yuxarı qalx!")
//        }
  
//    cehd++;


// }

// if(cehd<5){
//     console.log(`super texmin! ${cehd} defeye tapdınız`);
// }
// else if(cehd>5 && cehd<10){
//     console.log(`yaxşı texmin: ${cehd} defeye tapdınız `);
// }
// else if(cehd>15){
//     console.log(`pis texmin: ${cehd} defeye tapdınız`);
// }


//************************************************* */


// TASK-2 (1 den verilen edede qeder ededlerin cemi)

// const n=+prompt("eded daxil edin: ")
// let m=0
// for(let i=1;i<=n;i++){
//     m=m+i
// }
// console.log(m);

//************************************************* */

// TASK-3 (ulduz şekli -> ALINMADI)


//************************************************* */

// TASK-4 (Faktorial)

// const n=+prompt(`eded daxil edin: `)
// let i =1
// let j=1
// for(i;i<=n;i++){
//     j*=i
// }
// console.log(j);

//************************************************* */

// TASK-5 (istiqamet)
// let istiqamet=prompt("istiqameti daxil eidn: ")
// if(istiqamet==="up"){
//     console.log("yuxarı get");
// }
// else if(istiqamet==="right"){
//     console.log("sağa get");
// }
// else if(istiqamet==="left"){
//     console.log("sola get");
// }
// else if(istiqamet==="down")
// {
//     console.log("aşağı get");

// }
// else{
//     console.log("bele istiqamet yoxdur");
// } 

//************************************************* */

// TASK-6 (BMİ)
// let n=+prompt("boyunuzu daxil edin (metr ile): ")
// let m=+prompt("cekinizi daxil edin: ")
// let BMİ=m/n**2
// let derece=""
// if(BMİ<18.5)
// {
//     derece="arıqsınız"
// }
// else if(BMİ>=18.5 && BMİ<25){
//     derece="normal çekidesiniz"
// }
// else if(BMİ>25 && BMİ<30){
//     derece="köksünüz"
// }
// else if(BMİ>=30) {
//   derece="obezsiniz"
// }
// console.log(`sizin BMİ-niz: ${BMİ}. Siz ${derece}`);


/********************************************************* */

// TASK-7 (İkireqemli ededi 3 reqemli olana qeder artır)
// let n =+prompt("2 reqemli eded daxil edin: ")
// if (n>=100){
//     console.log("eded 2 reqemli deyil!");
// }
// else{
//     while(n<100){
//         n++
//         console.log(n);    
//     }
  
// }


/************************************************************* */


// TASK-8 (I know how to use cycles :)

// let n=+prompt("n i daxil edin: ")
// let i=1
// while(i<=n){
//     i++
//     console.log("I know how to use cycles");
// }


/************************************************************** */


// TASK-9 (Sonu 0 ile biten ededleri consola yazdır)

// let n=99
// while(n<999)
// {
//     n++
//     if(n%10==0){
//         console.log(n);
//     }
// }



/**************************************************************** */


// TASK-10 (bütün 2 reqemli  tek ededleri consola yazdır)

// let n=9
// let cem=0
// while(n<99){
//     n++
//     if(n%2==1){
//         cem+=n
//     }
// }
// console.log(cem);


/******************************************************************* */


// TASK-11 (daxil edilen ededin bölünenlerini tap)

// let n=+prompt("eded daxil edin: ")
// let i=99
// cem=0
// while(i<999)
// {
//     i++
//     if(i%n===0)
//     {
//         cem+=i
//     }
// }
// console.log(cem);


/****************************************************************** */


// TASK-12 (tek ededleri ekrana çıxarma)

// let n=+prompt("eded daxil edin: ")
// let i=n
// while(i>0)
// {
//     i--
//     if(i%2==1){
//         console.log(i);
//     }
// }


/******************************************************************* */


// TASK-13 (10 a qeder ededlerin hasili)


// let n=1
// for(let i=1;i<=10;i++)
// {
//     n=n*i
// }
// console.log(n);



/********************************************************************* */


// TASK-14 (Metni tersine çeviren program)

// let metn=prompt("metn daxil edin: ")
// let ters=""
// for(let i=metn.length-1;i>=0;i--){
//     ters+=metn[i]
// }
// console.log(ters);


/******************************************************* */

// TASK-15 ("." simvolunun yerleşme indeksi) 

// let a=prompt("setri daxil edin: ")
// for (let i=0;i<=a.length-1;i++){
//     if (a[i]==="."){
//            console.log(`"." simvolu ${i} ci indeksdedir (${i+1} ci yerde)`);
//     }
// }
