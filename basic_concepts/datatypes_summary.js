//Data types

// 1...Primitive - call by value

//7 types

   //1.Number - integer and floating point -
    const score=100

   //2.String - sequence of characters -
    const scorevalue=100.8

   //3.Boolean - true or false - 
   const isLoggedIn = false

   //4.Undefined - not assigned - 
    userEmail;

   //5.Null - empty -
   const outsideTemp = null

   //6.Symbol - unique identifier - 
   const id = Symbol("123")
   const anotherID=Symbol("123")
   console.log(ID === anotherID); //false 

   //7.BigInt - larger than 2^53 -1 -
   const myNumber = BigInt(1234567890123456789012345678901234567890)

// 2...Non-primitive - call by reference
    // 1.Object - collection of key value pairs
  let myObj={
    name:"Karthik",
    age:21,
    isLoggedIn:true
  };

    // 2.Array - ordered collection of items
   let myArr=["Karthik",21,true,null]; 


    // 3.Function - block of code to perform a specific task
    function myFunc(){ console.log("Hello World"); }
    

   console.log(typeof bigNumber); //undefined
   console.log(typeof outsideTemp); //object
   console.log(typeof scoreValue); //number



///////////////////

// Memory

  //2 types ......1.
    //1.Stack memory - primitive data types - fixed size - faster access
    //2.Heap memory - non-primitive data types - dynamic size - slower access

    //Example
    
    //1
    let myname="Karthik"; //stored in stack memory
    let anothername=myname;
    anothername="Keerti";
    console.log(myname); //Karthik
    console.log(anothername); //Keerti

    //2
    let user1={
      name:"Karthik",
      age:21
    }  //stored in heap memory
    let user2=user1;
    user2.name="Keerti";
    console.log(user1.name); //Keerti
    console.log(user2.name); //Keerti