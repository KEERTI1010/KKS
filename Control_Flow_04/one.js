//if statement

const score=500
if (score > 400){
    console.log("yeah...")
    const Price = "5000000"
    console.log (`Price: ${Price}`);
}



//short hand notation

const balance = 1000
if (balance > 500) console.log ("test"),console.log("test2");


const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard){
    console.log ("Allow to buy course");
}


const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In")
}   
// so here || use to test the multiple condition
//if one of the condition is true it becomes true




