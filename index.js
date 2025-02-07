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

let arr = [1, 2, 3];

console.log(typeof arr);

let str = "faiz";

console.log(typeof str);

let num = 1;

console.log(typeof num);

const obj = {
  name: "saida",
  rollno: 1,
};

console.log(typeof obj);

// reply wheter js is single thread or multi thread?

// js is sinle threded lang , we can make is multi thread using async , wait , callbacks , promises...etc

// expressions

console.log(2 + 2);
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

console.log(a === b);

let exp = 2 + 2 + "2";

console.log(exp);

console.log("irfan" + " " + "ahemad");

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

function myfunc() {
  console.log("hii i am a fucntion");
}

// declaruion of a function

myfunc();

// 2
const functionReturn = () => {
  return "a" + "b";
};

const sum = (a, b) => {
  let sum = a + b;
  return sum;
};

let result = sum(5, 6);

console.log(result);

// arrays and it methods

// interpolation string

let myName = "Faiz";

let line = `The Trainer name is ${myName}`;

console.log(line);

// literals (templete)

console.log(myName);

let setence = `my name is "Deepak"`;

console.log(setence);

// escape sequencing

let logo = "my logo is 'pastrey";

let para =
  "lorem for loop , for in loop , \t \t for of loop , while loop , do while loop ";

console.log(para);

// \n,\t,\r

console.log(logo);

// html - css

// String methods

let newName = "Deepak";

console.log(newName.length);

console.log(newName.toLowerCase());

console.log(newName.toUpperCase());

let longPara = "fox jumps over bridge";

console.log(longPara.slice(0, 9));

console.log(newName + " " + longPara);

let newConcat = newName.concat(longPara);

console.log(newConcat);

let fullName = "Suraj Singh";

console.log(fullName.replace("Suraj", "Shivani"));

// trim method

let n1 = "Deepak";
let n2 = "  Deepak";
console.log(n2.trim());
console.log("first--->", n1.length, "  second---->", n2.length);

// string

let str1 = "Hello";

str1[0] = "J";

console.log(str1);

// String are immutable

let text = "JavaScript";
console.log(text[0]);
console.log(text[text.length - 1]); // ✅ Last character?

console.log(text[1]);

console.log(text.charAt(2));

// Count the number of vowels in a string.

let vol = "Deepak"; // Input string
let len = vol.length; // Length of the string
let count = 0;

for (let i = 0; i < len; i++) {
  // Loop through each character
  let char = vol[i].toLowerCase(); // Convert to lowercase for easy comparison

  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    count++;
  }
}
console.log(count);

// palindrom

let palin = "Malayalam";
let newString = "";

let update = palin.toUpperCase();

for (let i = update.length - 1; i >= 0; i--) {
  newString = newString + update[i];
}

console.log(newString == update);
// console.log("new===>"newString,"initial",update);

// space complexity

// time complexity
// let palin = "Malayalam".toUpperCase();
// let isPalindrome = true;

// for (let i = 0; i < palin.length / 2; i++) {
//   if (palin[i] !== palin[palin.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }

// console.log(isPalindrome); // ✅ true

// Arrays and it method

let array = ["Text", 1, true];

array[2] = false;

console.log(array);

console.log(typeof array);

// methods

let numberArray = [1, 2, 3, 4, 5, 6];

console.log(typeof numberArray.toString());

// join

console.log(numberArray.join("-"));

// pop , push , shift , unshift , delete , concat , sort , slice , splice , reverse

numberArray.pop();

numberArray.push(6);

console.log(numberArray.shift());

console.log(numberArray);

console.log(numberArray.unshift(1));
// ---> adds element in front and return it

console.log(numberArray);

delete array[0];

console.log(array);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

let newA = [...a1, ...a2];

console.log(newA);

console.log(a1.concat(a2, a3));

// sort

let sA = [2, 6, 9, 2, 4];

// console.log(sA.sort());

// let sorted = sA.sort((a, b) => {
//   return a - b;
// });

// console.log(sorted);

//  slice 


console.log(sA.slice(1,4));

console.log(sA.slice(2))


// splice

let fruits = ["Apple", "Banana", "Cherry", "Date"];

// // Remove 2 elements starting from index 1
// let removed = fruits.splice(1, 2); 

// console.log(fruits);  // ✅ ["Apple", "Date"]
// console.log(removed); // ✅ ["Banana", "Cherry"]

console.log(fruits.reverse());



let flat = [1,[2,3],4,5,[6,7,8,[9,10]]];

console.log(flat.flat());


