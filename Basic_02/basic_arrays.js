//ARRAYS

const myArr = [0,1,2,3,4,5];//array literal syntax
console.log(myArr[3]);//3
console.log(myArr[6]);//undefined



const myHeroes = new Array("superman","batman","spiderman");//array constructor syntax
console.log(myHeroes[1]);//batman

const myArray2=new Array(1,2,3,4,5);
console.log(myArray2[2]);//3


//METHODS

myArr.push(7);//adds 7 at the end
console.log(myArr);//[0,1,2,3,4,5,7]

myArr.pop();//removes last element
console.log(myArr);//[0,1,2,3,4,5]

myArr.shift();//removes first element
console.log(myArr);//[1,2,3,4,5]    

myArr.unshift(0);//adds 0 at the beginning
console.log(myArr);//[0,1,2,3,4,5]  

myArr.unshift(9);//adds 9 at the beginning
console.log(myArr);//[9,0,1,2,3,4,5]  

console.log(myArr.length);//7

console.log(myArr.includes(3));//true
console.log(myArr.includes(8));//false

console.log(myArr.indexOf(4));//5
console.log(myArr.indexOf(10));//-1//-1 means not found

const newArr = myArr.join()
console.log(myArr);//[9,0,1,2,3,4,5]
console.log(typeof newArr);//string
console.log(newArr);//9,0,1,2,3,4,5


//SLICE AND SPLICE

const myn1 = myArr.slice(1,3);//slices from index 1 to 3 (3 not included)
console.log(myn1);//[0,1]
console.log(myArr);//[9,0,1,2,3,4,5] original array remains unchanged

const myn2 = myArr.splice(1,3);//removes 3 elements from index 1
console.log(myn2);//[0,1,2]
console.log(myArr);//[9,3,4,5] original array is modified

