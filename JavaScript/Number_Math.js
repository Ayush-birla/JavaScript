const num=900
console.log(num);

const num1=new Number(100000000);
console.log(num1.toLocaleString('en-IN'));

const num2=90.2345
console.log(num2.toPrecision(4));

console.log(Math);
console.log(Math.abs(-8));
console.log(Math.round(5.23));
console.log(Math.random());
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(-8,1,5,8,7,9));
console.log(Math.max(1,5,8,7,9));

console.log(Math.random()*10)+1; // it generate numbers between 1-10 with decimal
console.log(Math.floor(Math.random()*10))+1; // it generate numbers between 1-10

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min); //it generate the values between the range 10 - 20

