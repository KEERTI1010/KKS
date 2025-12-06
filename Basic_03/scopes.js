//let a = 10
const b = 34
var c = 65

console.log(a);//10
console.log(b);//34
console.log(c);//65

// so here there is no problem...actual problem niche hai

let a = 300//at last
if (true){
    let a = 67
    const b = 43
    var c = 23
    d = 78
    console.log("INNER",a);
}

console.log (a);// ERROR --> a is not defd
console.log(b);//ERROR --> b is not defined
console.log(c);//23 ---> big problem...value of var scope {} bahar aya...
console.log(d);//78 ---> same as var ...that why we didnt use var

//after adding that let a = 300 outside the scope..gives

console.log (a);//300


