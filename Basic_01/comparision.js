console.log(2>9); //false
console.log(2<9); //true
console.log(2>=9); //false
console.log(2!=9); //true
console.log(2==9); //false



console.log(2=='2'); //true
console.log(2==='2'); //false   
console.log(2!='2'); //false
console.log(2!=='2'); //true

console.log(null>0); //false
console.log(null<0); //false
console.log(null>=0); //true
console.log(null<=0); //true
console.log(null==0); //false
console.log(null!=0); //true    

console.log(undefined>0); //false
console.log(undefined<0); //false
console.log(undefined>=0); //false
console.log(undefined<=0);  //false
console.log(undefined==0); //false
console.log(undefined!=0); //true   

//strict check
console.log("2"==2); //true
//but
console.log("2"===2); //false