let number1=document.querySelectorAll("#num1")
let number2=document.querySelectorAll("#num2")
let button=document.getElementById("btn")

button.onclick = () => {
    let sum = 0;

    number1.forEach((num) => {
        sum += parseFloat(num.value);
    });

    number2.forEach((num) => {
        sum += parseFloat(num.value);
    });

    console.log(sum);
};
