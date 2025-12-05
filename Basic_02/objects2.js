 // const tinderUser = new Object (); //{}  
 // const tinderUser = {} //{}
  //console.log(tinderUser)

  // so here both of them given {} only..but they are diff..so first one is created using constructor function and second one is object literal...that is 1st one is singleton object and 2nd one is object literal

  const tinderUser={}
  tinderUser.id="1234"
  tinderUser.name="kks"
  //console.log(tinderUser) // Expected output: {id: "1234", name: "kks"}

  const regularUser={
    email:"shetgoogle.com",
    fullname:{
      userFullname:{
        firstName:"kks",
        lastName:"Shettigar"
      }
    }
  }
  //console.log(regularUser.email) // Expected output: shetgoogle.com
  console.log(regularUser.fullname.userFullname) // Expected output: {firstName: "kks", lastName: "Shettigar"}
  console.log(regularUser.fullname.userFullname.firstName) // Expected output: kks


  const obj1={1:"a", 2:"b"}
  const obj2={3:"c", 4:"d"}
  //const obj3=Object.assign({}, obj1, obj2)
  // console.log(obj3) // Expected output: {1: "a", 2: "b", 3: "c", 4: "d"}

  //or//
  const obj3 = {...obj1, ...obj2}
  console.log(obj3) // Expected output: {1: "a", 2: "b", 3: "c", 4: "d"}


 console.log(Object.keys(tinderUser))// Expected output: Array ["id", "name"]
 console.log(Object.values(tinderUser))// Expected output:  ["1234", "kks"]
 console.log(Object.entries(tinderUser))// Expected output: [ ["id", "1234"],  ["name", "kks"]] 
 console.log(tinderUser.hasOwnProperty("name"))// Expected output: true