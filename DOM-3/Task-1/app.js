const buttons = document.getElementsByClassName("button");
const h=document.getElementById("h1")
colors=['red','blue','purple','green']
const bombaimha=Math.ceil(Math.random()*colors.length-1)
const bombareng=colors[bombaimha];
Array.from(buttons).forEach(btn => {
    btn.addEventListener("click", (e) => {
         const computedStyle = e.target.dataset.color
        
        if(computedStyle==bombareng){
            clearTimeout(bombapartladı)
           
         h.style.display="block"
        }
        else{
            alert("ölüme yaxınlaşdınız!!!")
        }
    });
});

const bombapartladı=setTimeout(()=>{
    alert(`BOOOMMMMBB`)
},5000)



