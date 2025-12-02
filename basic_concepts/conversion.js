//let score = 33

//console.log(typeof score); //number
//console.log(typeof(score));//number

//let score = '33'

//console.log(typeof score); //string
//console.log(typeof(score));//string

//let valueInNumber = Number(score);
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //33

//let score = '33abcc'
//let valueInNumber = Number(score);
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //NaN

//let score = null
//let valueInNumber = Number(score);
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //0

//let score = undefined
//let valueInNumber = Number(score);
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //NaN

//let score = true;
//let valueInNumber = Number(score);
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //1

//let score = false;
//let valueInNumber = Number(score);
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //0

//let score = "KARTHIK"
//let valueInNumber = Number(score);
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //NaN



//soo
//"33" => 33
//"33abcc" => NaN
//null => 0 
//true => 1 
//false=0
//undefined => NaN


let isLoggedIn =""
let booleanIsLoggened = Boolean(isLoggedIn);
//console.log(booleanIsLoggened); 

//"" => false
//" " => true
//"keerti" => true

let someNumber = 43
let stringNumber = String(someNumber);
//console.log(stringNumber);
//console.log(typeof stringNumber);
//43 => "43"



//*************************Operations************************//

let value = 3;  
let negValue = -value;
//console.log(negValue); //-3

console.log(2+2); //4
console.log("2"+"2"); //"2"+"2" => "22"
console.log("2"+2); //"2"+2 => "22"
console.log(2+"2"); //2+"2" => "22" 
console.log("1"+2+2 ); //"1"+2+2 => "122"
console.log(2+2+"1" ); //2+2+"1" => "41"

let str1 = "Hello"
let str2 = "World"
let str3=str1+str2
console.log(str3); //HelloWorld


console.log(true)//true
console.log(false)//false
console.log(!true)//false
console.log(!false)//true
console.log(!!true)//true
console.log(!!false)//false



console.log(+true); //1
console.log(+"");//0


let gamescore = "100"
gamescore++;//=  ++gamescoren
console.log(gamescore);
