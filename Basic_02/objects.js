//OBJECTS//

//singleton object

//0blect literal


const mySymbol = Symbol("id");
const JsUser = {
  name: "John",
    age: 30,
    isAdmin: true,
    [mySymbol]: 12345
  };
    console.log(JsUser.name); // Expected output: John// accessing object properties
    console.log(JsUser["age"]); // Expected output: 30 // another way to access object properties
    console.log(JsUser[mySymbol]); // Expected output: 12345 // accessing symbol property


  -->//Freeeze method to make object immutable
  JsUser.email="kks.google.com"; // adding new property
  Object.freeze(JsUser);
  JsUser.email="kks.yahoo.com"; // trying to modify property
  console.log(JsUser);
  // Expected output: {name: "John", age: 30, isAdmin: true, Symbol(id): 12345, email: "kks.google.com"}
  //email property is not added as object is frozen

  JsUser.greeting=function() {
    console.log("Hello JS User!");
  }
  JsUser.greetinTwo=function() {
    console.log(`Hello JS User! Your name is ${this.name}`);
  }
  console.log(JsUser.greeting());// Expected output: Hello JS User!
  console.log(JsUser.greetinTwo());// Expected output: Hello JS User! Your name is John


