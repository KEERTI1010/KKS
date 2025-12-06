//Functions//

function sayMyname(){
    console.log("M");
    console.log("E");
    console.log("V");
    console.log("I");
    console.log("N");
}
//sayMyname();

//function addTwoNumbers(number1, number2){
////console.log(number1 + number2);
//}
addTwoNumbers();//NaN....i.e not a number called arguments
addTwoNumbers(5);//NaN....i.e not a number called arguments
addTwoNumbers(5, 7);//15
addTwoNumbers(10, "98")//1098
addTwoNumbers("Hello", "World")//HelloWorld
addTwoNumbers(10,"a")//10a
addTwoNumbers(10,null)//10null

// so here 2 concepts are there
//  1. Arguments - the actual values we pass while calling a function (5,7)
//  2. parameters - the names listed in the function definition..(number1, number2)

//const result = addTwoNumbers(3,4);//7
//console.log(result);//undefined...because the function is not returning anything

//so that for same..

 function addTwoNumbers(number1, number2){
    return number1 + number2;
}

const result = addTwoNumbers(7, 9);
//console.log(result);//16
  
function loginUserMsg(username){
    if (username===undefined){console.log("Please enter a username")//
        //return
    }
    return `${username}just logged in`
}
//console.log(loginUserMsg("kks")) //kks just logged in
console.log(loginUserMsg(""))//just logged in
console.log(loginUserMsg())//undefined just logged in

//so there if we add that if ...condition if its true it executes...so there after adding if 
//please enter a username
//undefined just logged in

//if we put return there (//return)it gives
//Please enter a username 
//undefined


//So in  js (),(""),undefined ---> called as or assume as FALSE



//function cartPrice (num1){
//    return num1
//}
//console.log(cartPrice(200,300,400)//200

//only prints 200 ...bcz num1 only is there so we use rest operator ---> (...)

// cartPrice (...num1){
//    return num1
//}
//console.log(cartPrice(200,300,400))//[200,300,400]

function cartPrice (val1,val2,...num1){
    return num1
}
console.log(cartPrice(200,300,400,500,600))//[ 400,500,600 ]....---> val ka kam


const user={
    name:"Lalitha",
    rollnum:90
}

function handleObject(anyObject){
console.log(`Username is ${anyObject.name} and rollnum is ${anyObject.rollnum}`)
}
//handleObject(user)//Username is Lalitha and rollnum is 90

handleObject({
    name:"sam",
    rollnum:99
})   // Username is sam and rollnum is 99




const mynewArray=[300,600,900,800]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynewArray));//600
console.log(returnSecondValue([200,400,700,844]))//400


