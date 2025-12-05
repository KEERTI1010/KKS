const score = 400
//console.log(score);//400

const balance=new Number(200)
//console.log(balance);//[Number: 200]

//console.log(balance.toString());//200
//console.log(balance.toString().lenght);//3

//console.log(balance.toFixed(2));//200.00
//console.log(balance.toFixed(4));//200.0000

const otherNumber = 23.897465
//console.log(otherNumber.toPrecision(3));//23.9
//console.log(otherNumber.toPrecision(5));//23.897
//console.log(otherNumber.toPrecision(2));//24
//console.log(otherNumber.toPrecision(1));//20

const hundreds = 1000000
//console.log(hundreds.toLocaleString());//1,000,000
//console.log(hundreds.toLocaleString("en-IN"));//10,00,000
//console.log(hundreds.toLocaleString("hi-IN"));//10,00,000
//console.log(hundreds.toLocaleString("de-DE"));//1.000.000


//=====MATHS=====//

//console.log(Math);//Math object
//console.log(Math.PI);//3.141592653589793
//console.log(Math.abs(-4));//4
//console.log(Math.round(4.6));//5
//console.log(Math.round(4.3));//4    
//console.log(Math.ceil(4.3));//5
//console.log(Math.floor(4.7));//4
//console.log(Math.min(2,5,1,8,6));//1
//console.log(Math.max(2,5,1,8,6));//8
//console.log(Math.sqrt(64));//8
console.log(Math.random());//0.2033401444384763 random number between 0 and 1
console.log(Math.random()*10);//2.033401444384763 random number between 0 and 10
console.log(Math.floor(Math.random()*10));//2 random number between 0 and 9
console.log(Math.floor(Math.random()*10)+1);//3 random number between 1 and 10

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);//13 random number between 10 and 20