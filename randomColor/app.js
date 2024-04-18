import chalk from 'chalk';
const text = "Hello World";
const array = ['green','blue','red','yellow','white'];
const randomColor = () => {
    return array[Math.floor(Math.random() * array.length)];
}
console.log(chalk[randomColor()](text));
