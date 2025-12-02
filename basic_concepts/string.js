//const name = "kks"
//const  age = 18  //kks18itsme...

//console.log(name+age+"itsme...");

//back text...   `  `
const name = "kks"
const repoCount = 50

console.log(`Hello ${name} you have ${repoCount} repos`);

const myname = "kks"
const age = 18
console.log(`hello my name is ${myname} and iam ${age} years old`);


//string properties and methods//

const gameName = new String("Keerti")
console.log(gameName [0]);//K
console.log(gameName.__proto__);//{}
console.log(gameName.length);//6
console.log(gameName.toUpperCase());//KEERTI
console.log(gameName.charAt(3));//r
console.log(gameName.indexOf("r"));//3
console.log(gameName.indexOf("e"));//1
console.log(gameName.toLowerCase());//keerti

//SUBSTRING AND SLICE 

const newString=gameName.substring(0,3);
console.log(newString);//Kee

const anotherString=gameName.slice(-3,4);
console.log(anotherString);//r

//const sString=gameName.substring(-3,4);
//console.log(sString);//Keer.....so here substring will not consider negative values..bcz it doesnt support negative values..if we give negative values it will consider as 0..


console.log(gameName.slice(0,2));   //Ke
console.log(gameName.slice(2));    //erti

console.log(gameName.includes("Ke"));//true
console.log(gameName.includes("kks"));//false



//TRIM

const newStringOne = "   Keerti    "
console.log(newStringOne);//   Keerti
console.log(newStringOne.trim());//Keerti
// for more information abt ..TRIM ...go to...trim javascript mdn...


//REPLACE LINK

const url = "https://keerti.com/login"
console.log(url.replace("login","signup"));//https://keerti.com/signup
console.log(url.includes('keerti'));//true
console.log(url.includes('kks'));//false

//SPLIT

console.log(gameName.split(  ));








