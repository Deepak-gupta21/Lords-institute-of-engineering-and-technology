// Ecmascript 
// standard on which js is built

// variable

// let , const and var 

let name = "Deepak";
let Name = "Deepak";

// js is case sensitive language 

// let , const and var 

// let and const are block scoped

// var is globaly prsent 

// hoisting for let and const are diferent with var 

// js (primitive and non - primitive)

// primitive datatypes - null , number , boolean , string , bigint , symbol and undefine 7 pdt

// non primitive is - object

let arr = [1,2,3];

console.log(typeof(arr)); 


let str = "faiz";

console.log(typeof(str));

let num = 1;

console.log(typeof(num));

const obj = {
name : "saida",
rollno: 1,
}

console.log(typeof(obj));

// reply wheter js is single thread or multi thread?

// js is sinle threded lang , we can make is multi thread using async , wait , callbacks , promises...etc

// expressions

console.log(2+2);
// +
// -
// *
// **
// /
// %
// ++
// --


// == === 

// == ---> value 

// === ---> value + datatype

// == to check the vaklue 

// === is check the valur + the datatype
// syntaxs

let a = 2;
let b = "2";

console.log(a===b);

let exp = (2+2)+"2";

console.log(exp);

console.log("irfan"+" "+"ahemad");

// ==
// ===
// !=
// < , > <= >=
// ?



// ||
// &&
// !

// if conditions 

// if 
// if else 
// if else if 

// lopps

// for loop , for in loop , for of loop , while loop , do while loop 


//  functions in js 

// 1

function myfunc(){
console.log("hii i am a fucntion");
}

// declaruion of a function 


myfunc();


// 2
const functionReturn = () =>{
    return ("a"+"b");
}

const sum = (a,b) => {
    let  sum =a+b;
    return sum;
}

let result = sum(5,6);

console.log(result);


// String methods 

// arrays and it methods 

// interpolation string

// literals (templete)

// sequencing 

// html - css 

