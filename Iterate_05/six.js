// filter

const num = [1,2,3,4,5,6,7,8,9,10]

const mynum = num.filter((number)=> number > 4 )
console.log(mynum)  //[ 5, 6, 7, 8, 9, 10 ]

// for same if we use scope {}..we have return it...other wise gives []

const yrnum = num.filter((number) => {
    return number > 4
})
console.log (yrnum); //[ 5, 6, 7, 8, 9, 10 ]



 // scope ki aur return ki mahatv

 const newnum = [1,2,3,4,5,6,7,8,9,10]
 const nums = newnum.map((num) => { return num + 10 })
 //console.log (nums)

         //[
        //11, 12, 13, 14, 15,
       //16, 17, 18, 19, 20
      //]
// so here if we not give or write that return than it gives

//undefined
//undefined
//undefine 
//undefined


//const nenum=nums .map((num) => num * 10) .map ((num) => num +1) . filter ((num) => num =40)
//console.log(nenum)
     //[
     //111, 121, 131, 141,
     //151, 161, 171, 181,
     //191, 201
     //]

     //Reduse


     const myTotal = newnum.reduce ((acc,curr)=> acc + curr , 0);
     console.log (myTotal);//55

     