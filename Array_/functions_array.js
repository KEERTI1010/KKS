const myFav=['apple', 'banana', 'cherry'];
const yourFav=['orange', 'grape', 'melon'];
const ourFav=myFav.concat(yourFav);
console.log(ourFav);
// Expected output: Array ["apple", "banana", "cherry", "orange", "grape", "melon"] 

const numbers = [10, 20, 30, 40,[5,9,8],30,[90,50, [30,8,4]]];
console.log(numbers.flat(Infinity));
// Expected output: Array [10, 20, 30, 40, 5, 9, 8, 30, 90, 50, 30, 8, 4]


console.log(Array.isArray("kks"));
// Expected output: false

console.log(Array.from("kks"));
// Expected output: Array ["k", "k", "s"]

console.log(Array.from({name:"KIRAN"}));
// Expected output: Array []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
// Expected output: Array [100, 200, 300]