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

console.log(sA.slice(1, 4));

console.log(sA.slice(2));

// splice

let fruits = ["Apple", "Banana", "Cherry", "Date"];

// // Remove 2 elements starting from index 1
// let removed = fruits.splice(1, 2);

// console.log(fruits);  // ✅ ["Apple", "Date"]
// console.log(removed); // ✅ ["Banana", "Cherry"]

console.log(fruits.reverse());

let flat = [1, [2, 3], 4, 5, [6, 7, 8, [9, 10]]];

console.log(flat.flat());

// Lopping for arrays

// 1 array.forEach(element => {

// });

let strArray = "Nikhil";
let convertedArray = Array.from(strArray);

convertedArray.forEach((e, index, convertedArray) => {
  console.log(
    "in index--->",
    index,
    "value--->",
    e,
    "in array--->",
    convertedArray
  );
});

for (let i; i < convertedArray.length; i++) {
  console.log(
    "in index--->",
    i,
    "value--->",
    convertedArray[i],
    "in array--->",
    convertedArray
  );
}

// 2 Map()

convertedArray.map((e, index, convertedArray) => {
  console.log(
    "in index--->",
    index,
    "value--->",
    e,
    "in array--->",
    convertedArray
  );
});

// 3 filter()

let filteredArray = numberArray.filter((e) => {
  return e > 5;
});
console.log(filteredArray);

// 4 reduce()
let total = numberArray.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(total);

// 5 for of
for (let value of numberArray) {
  console.log("value of the element--->", value);
}

// 6 for in
for (let index in numberArray) {
  console.log("indexs are--->", index);
}

// 7 string to arrays

console.log(Array.from(strArray));

// Developer Tools

// netwroks

// sources

// application storages - local storage , session storage , cookies

// local storage / session storage / cookies

// session storage is valid untill the user closes the tab;

// data in side locoal stragr persists even the tab is closed or session is lost !

// Store data
localStorage.setItem("username", "Deepak");
localStorage.setItem("product", "mug");

// .setItem
// .getItem
// Retrieve data
const user = localStorage.getItem("username");
console.log(user); // Output: Deepak

// Remove specific item
// localStorage.removeItem('username');

// Clear all items
localStorage.clear();

// session storage
sessionStorage.setItem("username", "Deepak");
sessionStorage.setItem("product", "mug");

// .setItem
// .getItem
// Retrieve data
const userAuth = sessionStorage.getItem("username");
console.log(user); // Output: Deepak

// Remove specific item
sessionStorage.removeItem("username");

// Clear all items
sessionStorage.clear();

// cookies

// Cookies are small pieces of data stored on the client-side (in the browser) 
// and are sent back to the server with every HTTP request. They are commonly 
// used for session management, user preferences, and tracking user activities.


// Create/Set a Cookie
document.cookie = "username=Deepak; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Read/Get a Cookie
console.log(document.cookie);  // Output: username=Deepak

// Update a Cookie
document.cookie = "username=John; path=/";  // Overwrites the previous value

// Delete a Cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// console object methods 

console.error("Something went wrong!"); // Displays an error in red


console.info("Server started successfully on port 3000.");


console.warn("This API is deprecated. Consider using v2."); 


const person = {
  name: "Deepak",
  age: 25,
  address: { city: "Delhi", country: "India" }
};

console.dir(person); // Expands the object properties in a tree format

console.clear();

console.table(person);

console.time("Loop Time");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("Loop Time"); // Outputs: Loop Time: X ms

// js and user interaction is done with websites : BOM

// alert

// alert("hi class");

// promt 

// let input = prompt("enter whater ever you eant to enter");

// console.log(input);

// confirm

// confirm("are you understanmding?");

// window object --> DOM , BOM , core js

console.log(window);           // Displays the window object
console.log(window.innerWidth); // Width of the viewport
console.log(innerHeight);       // Same as window.innerHeight

// DOM
// getElementById()
// querySelector(), querySelectorAll()
// createElement(), appendChild()
// classList.add(), remove(), toggle()

// BOM
// console.log(navigator.userAgent);    // Browser details
console.log(navigator.language);     // User's language

console.log(screen.width);   // Screen width
console.log(screen.height);  // Screen height

console.log(location.href);   // Current URL
// location.reload();            // Reload the page
// location.href = "https://www.google.com";  // Redirect to Google


// console.log(history.length);  // Number of pages in session history
// history.back();               // Go back one page
// history.forward();            // Go forward one page


// window is the global object in browsers.
// DOM handles HTML/CSS manipulation using the document object.
// BOM deals with browser-specific features (tabs, history, screen).
// Core JavaScript is the base language used everywhere.

// placement of js in html:

// 1 inside head tag 


// 2 at the end of body 


// 3 defer 
{/* <script src="index.js" defer></script> */}
// side by side downloading is done for js and rendering is done for rest html

// 4 async
{/* <script src="index.js" ascync></script> */}
// side by side downloading of js is done but not used until and unless html is fully rendered

// DOM ---> Actual Dom..... 

// virtual Dom.....

// BOM methods to search DOM 

// advance js 

// call bvack 

// promises

// acysc awit --- > multi threades 

// set time 

// set interval 

// attributes method

// bom events 





