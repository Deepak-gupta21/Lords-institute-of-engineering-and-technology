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

// const sum = (a, b) => {
//   let sum = a + b;
//   return sum;
// };

// let result = sum(5, 6);

// console.log(result);

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
document.cookie =
  "username=Deepak; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Read/Get a Cookie
console.log(document.cookie); // Output: username=Deepak

// Update a Cookie
document.cookie = "username=John; path=/"; // Overwrites the previous value

// Delete a Cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// console object methods

console.error("Something went wrong!"); // Displays an error in red

console.info("Server started successfully on port 3000.");

console.warn("This API is deprecated. Consider using v2.");

const person = {
  name: "Deepak",
  age: 25,
  address: { city: "Delhi", country: "India" },
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

console.log(window); // Displays the window object
console.log(window.innerWidth); // Width of the viewport
console.log(innerHeight); // Same as window.innerHeight

// DOM
// getElementById()
// querySelector(), querySelectorAll()
// createElement(), appendChild()
// classList.add(), remove(), toggle()

// BOM
// console.log(navigator.userAgent);    // Browser details
console.log(navigator.language); // User's language

console.log(screen.width); // Screen width
console.log(screen.height); // Screen height

console.log(location.href); // Current URL
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
{
  /* <script src="index.js" defer></script> */
}
// side by side downloading is done for js and rendering is done for rest html

// 4 async
{
  /* <script src="index.js" ascync></script> */
}
// side by side downloading of js is done but not used until and unless html is fully rendered

// DOM ---> Actual Dom.....

// virtual Dom.....

// advance js

// call bvack

// promises

// acysc awit --- > multi threades

// set time

// set interval

// attributes method

// bom events

// DOM => text node , elemenent node and comment node !

// DOM search and manipulation :

// BOM methods to search DOM

// DOM (text node , elemenmt node and comments)

// getElementById()
// querySelector(), querySelectorAll()
// createElement(), appendChild()
// classList.add(), remove(), toggle()

// auto corection

const parent = document.getElementById("parent");

console.log(parent);

// Accessing child nodes
console.log("All Child Nodes:", parent.childNodes); // Includes text nodes (whitespace)

// First Child (may return a text node due to whitespace)
console.log("First Child Node:", parent.firstChild);

// Last Child (may return a text node)
console.log("Last Child Node:", parent.lastChild);

// Accessing the first <p> element (ignoring whitespace)
console.log("First <p> Element:", parent.childNodes[1]);

// Accessing the last <p> element
console.log("Last <p> Element:", parent.childNodes[parent.lastChild]);

// element.chidNode[0] === parent.firstChild

// Bom methods

// 1 document.getElementById

// const newParent = document.getElementById("parent");

// console.log(newParent);

// 2 document.getElementByClassName

const newParentClass = document.getElementsByClassName("parent")[0];

console.log(newParentClass);

// 3 document.querySelector

const query = document.querySelector(".parent");

console.log(query);

// 4 document.querySelectorAll
const queryFirst = document.querySelectorAll(".parent")[1];

console.log(queryFirst);

// 5 document.getElementByTagName

const head = document.getElementsByTagName("H1");

console.log("Heading", head);

// matches , closest and contains

// const button = document.querySelector(".btn");

//   console.log(button.matches(".primary"));   // ✅ true
//   console.log(button.matches(".secondary")); // ❌ false

const button = document.querySelector(".btn");

console.log(button.closest(".card")); // ✅ Finds the <div class="card">
console.log(button.closest(".wrapper")); // ❌ Returns null (no match found)

const parentName = document.querySelector(".parent");
const childName = document.querySelector(".child");

console.log(parentName.contains(childName)); // ✅ true (child is inside parent)
console.log(childName.contains(parentName)); // ❌ false (parent is not inside child)

// tables

// table.rows	All <tr> elements in the table	HTMLCollection of rows
// table.tHead	The <thead> section	<thead> element or null

// innerHtml and outerHtml

const container = document.getElementById("container");

// Get the inner HTML (content inside the <div>)
// console.log(container.innerHTML);

// Output: <p>Hello, <strong>World!</strong></p>

// Update the inner content
container.innerHTML = "<h2>Welcome to JavaScript!</h2>";

console.log(container.innerHTML);

//  outerHtml

const box = document.getElementById("box");

// Get the outer HTML (the entire <div> element)
console.log(box.outerHTML);
// Output: <div id="box"><p>This is a box!</p></div>

// Replace the entire element
box.outerHTML = "<section><h3>Box Replaced!</h3></section>";

console.log(box.outerHTML);

// text node

// attribute methods

// how to inset a element in document flow

// className and classList

// Events

// Hidden and none

// .check{
//   display: hidden;
//   }

/* .check{
      display: none;
  } */

const link = document.getElementById("myLink");

// Get the href attribute
console.log(link.getAttribute("href")); // Output: https://example.com

// Get the target attribute
console.log(link.getAttribute("target")); // Output: _blank

link.setAttribute("href", "https://openai.com");

// Add a new attribute
link.setAttribute("title", "Go to OpenAI");

// Verify changes
console.log(link.getAttribute("href")); // Output: https://openai.com
console.log(link.getAttribute("title")); // Output: Go to OpenAI

console.log(link.hasAttribute("href")); // true
console.log(link.hasAttribute("download")); // false

// link.removeAttribute("target");
console.log(link.hasAttribute("target")); // t

// to append a div in html through js

let div = document.createElement("div");

div.innerHTML = "<h1>Hello</h1>";

document.body.append(div);

div.style.backgroundColor = "blue";

// prepend() , before() , after() , replaceWith()

// const newElement = document.createElement("p");
// newElement.textContent = "Inserted Before H1!";

// Insert before the target element
// div.before(newElement);

// const newElement = document.createElement("p");
// newElement.textContent = "Inserted After H1!";

// Insert before the target element
// div.after(newElement);

const oldElement = document.getElementById("oldElement");
const newElement = document.createElement("h1");
newElement.textContent = "Replaced Content of div with H1!";

// Replace the old element
oldElement.replaceWith(newElement);

// Adjacent Html , Text

// insertAdjacentHTML()

// beforebegin	Inserts before the element itself	Outside, before the element
// afterbegin	Inserts as the first child	Inside, at the start of the element
// beforeend	Inserts as the last child	Inside, at the end of the element
// afterend	Inserts after the element itself	Outside, after the element

const contain = document.getElementById("contain");

contain.insertAdjacentHTML("beforebegin", "<p>Inserted BEFORE the div!</p>");

contain.insertAdjacentHTML("afterbegin", "<h2>Inserted at the START!</h2>");

contain.insertAdjacentHTML("beforeend", "<h3>Inserted at the END!</h3>");

contain.insertAdjacentHTML("afterend", "<p>Inserted after the div!</p>");
// to remove a element
oldElement.remove();

// classList Methods in JavaScript
// element.classList.add('className');       // Add a class
// element.classList.remove('className');    // Remove a class
// element.classList.toggle('className');    // Toggle (add/remove) a class
// element.classList.contains('className');  // Check if the class exists (returns true/false)

const box1 = document.getElementById("boxes");

// Adding classes
box1.classList.add("highlight", "border");

// Removing the 'highlight' class
box1.classList.remove("highlight");

box1.classList.toggle("highlight");
// Purpose: Adds the class if it's not present, removes it if it is present (toggles).
// Syntax: element.classList.toggle('className')

if (box1.classList.contains("highlight")) {
  console.log("The highlight class is present!");
} else {
  console.log("No highlight class found.");
}

// The Event Object in JavaScript provides information about an event that occurs
//  (like a click, keypress, form submission, etc.).

const boxin = document.getElementById("boxin");

boxin.addEventListener("click", function (event) {
  const x = event.clientX;
  const y = event.clientY;
  box.textContent = `X: ${x}, Y: ${y}`; // Display the coordinates inside the box
  console.log("X-->", x, "Y-->", y);
});

// Events Bowser / Html

window.addEventListener("resize", function () {
  console.log("Window has been resized.");
});

// resize , onload

// onload: Triggers when the page is fully loaded.
// resize: Triggers when the browser window is resized.

// mouse event

function handleClick() {
  alert("Button Clicked!");
}

function changeColor(element) {
  element.style.backgroundColor = "yellow";
}

function resetColor(element) {
  element.style.backgroundColor = "lightblue";
}

// keyboad event

function logKey(event) {
  console.log("Key pressed:", event.key);
}

// keydown: Fires when a key is pressed down.
// keyup: Fires when a key is released.
// keypress: Fires when a key is pressed (deprecated, prefer keydown).

// form events

// onSubmit

function validateForm(e) {
  e.preventDefault(); // Prevents the default form submission
  const name = document.getElementById("name").value; // Gets the value of the input with id="name"

  console.log("name-->", name); // Logs the entered name to the console

  if (name === "") {
    // Checks if the name field is empty
    alert("Name cannot be empty!"); // Shows an alert if empty
    return false; // Stops the form from submitting
  }
  return true; // Allows form submission if validation passes
}

function highlight(element) {
  element.style.backgroundColor = "lightyellow";
}

function resetHighlight(element) {
  element.style.backgroundColor = "";
}

// onsubmit: Triggered when the form is submitted.
// onfocus / onblur: Fires when an input gains or loses focus.

// onClick , onfocus

// EventListners

// addEventListners

// removeEventListners

// Event object

// Document events

document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM is fully loaded.");
});

document.addEventListener("click", function () {
  console.log("Document clicked!");
});

// Es6 features

// ES6 introduced significant improvements to JavaScript,
// making code more readable, concise, and powerful. Here are the key features with examples:

// Arro func

// Traditional function
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const greetArrow = (name) => `Hello, ${name}!`;

console.log(greetArrow("Deepak"));

// paramets in func

// function greet(name) {
//   return `Hello, ${name}!`;
// }

const member = greet("harini");

console.log(member);

// destrucring assignment

// const numbers = [1, 2, 3, "hi",true];
// const [g, h, i, j , k] = numbers;

// console.log(g, h, i, j , k); // 1, 2, 3 , true

const personDta = { sir: "Deepak Gupta", age: 25 };
const { sir, age } = personDta;

console.log(sir, age); // Deepak, 25

// default parameter

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("Raj"); // Hello, Raj!
greet("Abdul");

// callback

// promises

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person1 = new Person("Deepak", 25);
person1.greet(); // Hello, my name is Deepak.

// spread and rest

// rest : is used in func parameter to gather remaining arguments to an array or object

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
  // 10
}

console.log(sum(1, 2, 3, 4)); // 10

// spred : is used in function calls , we concatinate new array ;

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]

// Import export module
// export const expp = "Deepak";
// export function greeting() {
//   return "Hello!";
// }

const map = new Map();
map.set("name", "Deepak");
console.log(map.get("name")); // Deepak

const set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}

// ja ---> multi thred

// Callbacks

// A callback is a function passed as an argument to another function,
// which is then invoked (called back) inside that function to complete
// some kind of routine or action.

// Callbacks are often used to handle asynchronous operations like API calls,
// file reading, event handling, etc.

function greeting(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Passing sayGoodbye as a callback
greeting("Deepak", sayGoodbye);

//  Why Use Callbacks?

// Callbacks are used to:
// Execute code after a task completes (especially for asynchronous tasks).
// Avoid blocking the main thread (JavaScript is single-threaded).
// Handle events like button clicks.

// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");

// Callback Hell (Nested Callbacks Issue): (pyramid of dom)
// When callbacks are nested inside other callbacks,
//  it creates hard-to-read code, known as callback hell.

// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);
//   }, 1000);
// }, 1000);

// Solution to Callback Hell:
// Promises - ES6
// Async/Await - Es8 ES8 - 2017

// While Promises make asynchronous code more manageable than callbacks,
//

// promises comes in picture in ES 2015 th yr -ES6

// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
// It helps manage async code without falling into "callback hell."

// 1
const promise = new Promise((resolve, reject) => {
  let success = false; // Change to false to test rejection

  if (success) {
    resolve("✅ Promise Resolved Successfully!");
  } else {
    reject("❌ Promise Rejected!");
  }
});

// const check = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("yes ture is returened");
//   }
//   if (false) {
//     reject("no is returned");
//   }
// });

promise
  .then((message) => {
    console.log(message); // Handles the success case
  })
  .catch((error) => {
    console.log(error); // Handles the error case
  });

// 2

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const data = { name: "Deepak", age: 25 };
      resolve(data);
    }, 2000); // Simulates a 2-second delay
  });
}

console.log("Fetching data...");

fetchData()
  .then((result) => {
    console.log("Data received:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Chaining Promises

// nested callback ---> promises chains

function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 Completed"), 1000);
  });
}

function stepTwo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 2 Completed"), 1000);
  });
}

function stepThree() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 3 Completed"), 1000);
  });
}

stepOne()
  .then((message) => {
    console.log(message);
    return stepTwo(); // Chain the next promise
  })
  .then((message) => {
    console.log(message);
    return stepThree();
  })
  .then((message) => {
    console.log(message);
    return stepThree();
  })
  .catch((error) => console.log("Error:", error));

// Promises were introduced in ES6 (2015) to handle async code cleanly.
// States of a Promise:
// Pending (initial state)
// Fulfilled (operation successful)
// Rejected (operation failed)
// Use .then() for success and .catch() for errors.
// Would you like to include Promise exercises in your assignment?

// async/await
// (introduced in ES8 - 2017) takes it to the next level by making async code look and
//  behave like synchronous code, which is easier to read, write, and debug.

// 1
async function runSteps() {
  try {
    const result1 = await stepOne();
    console.log(result1);

    const result2 = await stepTwo();
    console.log(result2);

    const result3 = await stepThree();
    console.log(result3);
  } catch (error) {
    console.log("Error:", error);
  }
}

runSteps();

// 2

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched successfully!"), 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));

// =======>

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();

// While Promises are powerful, async/await simplifies:
// Handling multiple asynchronous operations.
// Error management with try...catch.
// Code readability, making it beginner-friendly.

// Api calling
// call and bind
// getter and setter
// Higher order fucntions
// constructer func
// first class func
// new keyword
// iife

// tradictinal way

// function fun(){
//   console.log("IIffe wala function");
//   }
// fun();

(function () {
  console.log("IIffe wala function");
})();

// desturcturing

let [x, y] = ["hi", "bye"];

console.log(x, y);

// [1,2,3,4,...rest] = [1,2,3,4,5,6,7,8,9,10]

// rest==>[5,6,7,8,9,10]

// __prototype__
// How to create custom polyfils
// pure functions
// curring of functions
// colsures in js
// event loop consept of js

// hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations
// are moved to the top of their scope (global or function scope) before the code executes.
// This means you can use variables or functions before declaring them in the code.

// let and const are hoisted but not initialized,
// with var undefine is printed

greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}

// The entire function is hoisted, so you can call it before the declaration.

// sayHi(); // ❌ TypeError: sayHi is not a function

// var sayHi = function() {
//   console.log("Hi!");
// };

// console.log(scit);

const scit = "hiiiiiiii";

// Here, only the variable sayHi is hoisted (as undefined), not the function assignment.

// mutli thred with setinterval and setTimeout()

// JavaScript is single-threaded, but we can simulate multi-threading using asynchronous
//  functions like setTimeout()
// and setInterval(). This is managed
// by the Event Loop and Callback Queue, allowing non-blocking execution.

//  setTimeout()
// console.log("Task 1 - Start");

// setTimeout(() => {
//   console.log("Task 2 - After 2 seconds (Async)");
// }, 2000);

// console.log("Task 3 - End");

//  setInterval()
// let counting = 0;
// const intervalId = setInterval(() => {
//   counting++;
//   console.log(`Repeating Task: ${counting}`);

//   if (counting === 5) {
//     clearInterval(intervalId);
//     console.log("Interval Stopped");
//   }
// }, 1000);

// call backs

// api calling

// fetch();

// GET Request (Fetching Data)
// post ---> storing in db
// put --> update in db
// delete ---> delete the vakue from db

fetch("https://jsonplaceholder.typicode.com/users") // Sample API
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => console.log("User Data:", data)) // Display the data
  .catch((error) => console.error("Error:", error)); // Handle errors

// a/a func

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("User Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUsers();

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     console.log("User Data:", JSON.parse(xhr.responseText));
//   } else {
//     console.error("Error:", xhr.status);
//   }
// };
// xhr.send();

// promise apis:
// 6 main apis
// 1 promise.all

// console.clear();
// const p1 = Promise.resolve("Task 1 completed");
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 completed"), 2000));
// const p3 = new Promise((reject) => setTimeout(() => reject("Task 3 failed"), 1000));

// Promise.all([p1, p2, p3])
//   .then(results => console.log("All resolved:", results))
//   .catch(error => console.error("One failed:", error));

// Output (after 1s): "One failed: Task 3 failed"

// 2 promise.allSettled

const p4 = Promise.resolve("Task A completed");
const p5 = new Promise((resolve) =>
  setTimeout(() => resolve("Task B completed"), 1500)
);
const p6 = new Promise((_, reject) =>
  setTimeout(() => reject("Task C failed"), 1000)
);

Promise.allSettled([p4, p5, p6]).then((results) => console.log(results));

// Output:
// [
//   { status: "fulfilled", value: "Task A completed" },
//   { status: "fulfilled", value: "Task B completed" },
//   { status: "rejected", reason: "Task C failed" }
// ]

// Output (after 500ms): "Rejected: Failed task"

// 3 promise.race

const p7 = new Promise((resolve) =>
  setTimeout(() => resolve("Fastest task"), 2000)
);
const p8 = new Promise((_, reject) =>
  setTimeout(() => reject("Failed task"), 5000)
);
const p21 = new Promise((reject) =>
  setTimeout(() => reject("reject kiya maine"), 1000)
);

Promise.race([p7, p8, p21])
  .then((result) => console.log("Winner:", result))
  .catch((error) => console.error("Rejected:", error));

// 4 promise.any
const p9 = new Promise((_, reject) => setTimeout(() => reject("Error 1"), 500));
const p10 = new Promise((_, reject) =>
  setTimeout(() => reject("Error 2"), 800)
);
const p11 = new Promise((resolve) =>
  setTimeout(() => resolve("Success!"), 1000)
);
const p12 = new Promise((_, reject) =>
  setTimeout(() => reject("Error 3"), 500)
);
const p13 = new Promise((_, reject) =>
  setTimeout(() => reject("Error 4"), 800)
);

Promise.any([p9, p10, p11, p12, p13])
  .then((result) => console.log("First success:", result))
  .catch((error) => console.error("All failed:", error));

// Output (after 1s): "First success: Success!"

console.clear();
// 5 promise.resolve
const resolvedPromise = Promise.resolve("Instant Success");
resolvedPromise.then(console.log);

// Output: "Instant Failure"

// 6 promise.reject
const rejectedPromise = Promise.reject("Instant Failure");
rejectedPromise.catch(console.error);

// Output: "Instant Failure"

// Output: "Instant Failure"

// Promise.all()	Fails if any reject
// Promise.allSettled()	Waits for all (resolves even with failures)
// Promise.race()	Returns first settled (resolved/rejected)
// Promise.any()	Returns first resolved (ignores rejections)
// Promise.resolve()	Creates an already resolved promise
// Promise.reject()	Creates an already rejected promise

// pure functions
// A pure function in JavaScript is a function that:
// ✅ Always produces the same output for the same input.
// ✅ Has no side effects (doesn’t modify external variables, DOM, API calls, etc.).
// pure function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (Always same result)

// impure function
let totals = 10;

function addToTotal(value) {
  totals += value; // ❌ Modifies an external variable (impure)
  return totals;
}

console.log(addToTotal(5)); // 15
console.log(addToTotal(5)); // 20 (Different result for same input!)

function doubleArray(numbers) {
  return numbers.map((num) => num * 2);
}

console.log(doubleArray([1, 2, 3])); // [2, 4, 6]
console.log(doubleArray([1, 2, 3])); // [2, 4, 6] (Always same result)

function capitalizeNames(names) {
  return names.map((name) => name.toUpperCase());
}

console.log(capitalizeNames(["alice", "bob"])); // ["ALICE", "BOB"]
console.log(capitalizeNames(["alice", "bob"])); // ["ALICE", "BOB"]

function getEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4])); // [2, 4]
console.log(getEvenNumbers([1, 2, 3, 4])); // [2, 4]

function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([1, 2, 3])); // 6

// ✅ Same input → Same output (Deterministic).
// ✅ No side effects (Doesn’t modify external state).
// ✅ Doesn’t mutate input data (Returns a new value instead).

// curring of functions : Currying is a functional programming technique where
//  a function is transformed into a sequence of nested functions, each taking a single argument.

function add(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = add(5); // Partially applied function
console.log(addFive(3)); // 8
console.log(addFive(10)); //

// curring with arrow fuc
const multiply = (a) => (b) => (c) => a * b * c;

console.log(multiply(2)(3)(1)); // 6
console.log(multiply(4)(5)(1)); // 20

// Why Use Currying?
// ✔ Code Reusability – Create specialized functions.
// ✔ Readability – Clear separation of logic.
// ✔ Functional Programming – Avoids side effects & enhances modularity.

// A higher-order function is a function that:
// ✅ Takes one or more functions as arguments
// ✅ Returns a function as its result

// 1
// function greet(name, callback) {
//   return callback(name);
// }

function sayHello(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Deepak", sayHello)); // Output: "Hello, Deepak!"

// 2
const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]

// 3
const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]

// 3
// const number3 = [1, 2, 3, 4];
// const sums = numbers3.reduce((acc, num) => acc + num, 0);

// console.log(sums); // 10

// custon higher order function
function applyOperation(operation, a, b) {
  return operation(a, b);
}

function adding(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

console.log(applyOperation(adding, 5, 3)); // 8
console.log(applyOperation(subtract, 10, 4)); // 6

// Why Use Higher-Order Functions?
// ✔ Code Reusability – Avoid repetition.
// ✔ More Readable & Modular – Separate logic into functions.
// ✔ Functional Programming – Helps with immutability & declarative code.

// classes
// In JavaScript, classes are a blueprint for creating objects. They were introduced in ES6 (ECMAScript 2015) and provide a cleaner, more structured
// way to work with object-oriented programming.a cleaner, more structured way to work with object-oriented programming.

// extend

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// // Creating an object
// const person2 = new Person("Deepak", 25);
// person2.greet();

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Calls the parent class constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

// Creating an object of Student
const student1 = new Student("Amit", 18, "12th");
student1.greet(); // Inherited method
student1.study();

// Getters and Setters
class Car {
  constructor(brand) {
    this._brand = brand;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }
}

const car1 = new Car("Toyota");
console.log(car1.brand); // Getter
car1.brand = "Honda"; // Setter
console.log(car1.brand);

// Static Methods
// Static methods belong to the class itself and not to its objects.

class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

// const ins = new MathUtil.add(5,3);

console.log(MathUtil.add(5, 3)); // 8

// 5. Private Fields (# in ES2020)
// You can declare truly private class fields using #.

// class	Defines a class.
// constructor	Initializes class properties.
// extends	Inherits from another class.
// super	Calls the parent constructor.
// get & set	Control access to properties.
// static	Defines class-level methods.
// #privateField	Creates truly private fields.

// __prototype__

// In JavaScript, every function and object has a built-in property called prototype. It is used to implement prototypal
//  inheritance, allowing objects to inherit properties and methods from other objects.

// Each function in JavaScript (except arrow functions) has a prototype property that is used
//  to add methods and properties that other objects can inherit.

function Persons(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Persons.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

const persons1 = new Persons("Deepak", 25);
const persons2 = new Persons("Amit", 30);

persons1.greet(); // Hello, my name is Deepak.
persons2.greet(); // Hello, my name is Amit.

console.log(Persons.prototype); // { greet: [Function] }

// Prototype Inheritance
// JavaScript uses prototypal inheritance, meaning objects inherit
//  properties from other objects via the prototype chain.
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Inherit properties
  this.breed = breed;
}

// Inheriting methods from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks!`);
};

const dog1 = new Dog("Bruno", "Labrador");

dog1.makeSound(); // Bruno makes a sound.
dog1.bark(); // Bruno barks!

console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true

let simple = { name: "name name" };

console.log(simple);

let fruitss = {
  sour: false,
  sweet: true,
};

let grapes = {
  tasty: true,
  rotten: false,
};

// Setting prototype
grapes.__proto__ = fruitss;

console.log(grapes);

console.log(grapes.tasty); // true (own property)
console.log(grapes.sour); // false (inherited from fruitss)
console.log(grapes.sweet); // true (inherited from fruitss)

console.log(grapes.__proto__ === fruitss); // true

// How to create custom polyfils

// array methods , push, pop reduce , array.deepak()

// 1. Understanding Polyfills

// A polyfill mimics the behavior of a newer feature using older JavaScript.
// It helps maintain cross-browser compatibility.
// They are often added to prototype to extend built-in objects.

const arrr = [1, 2, 3];
const squared = arrr.map((num) => num * num);
console.log(squared); // [1, 4, 9]

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}
// map()
// Testing custom polyfill
const nums = [1, 2, 3];
const squaredNums = nums.myMap((num) => num * num);
console.log(squaredNums); // [1, 4, 9]

// example 2

// i want to create a custom array method , that return middle value of an array :

Array.prototype.faiz = function () {
  if (this.length === 0) return;
  null;

  const middleIndex = Math.floor(this.length / 2);

  if (this.length % 2 === 0) {
    return this.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return this[middleIndex];
  }
};

const check = ["a", "b", "c", "d"];

console.log(check.faiz()); //b

// Why Do We Need Polyfills?
// 1. Browser Compatibility
// Older browsers (like Internet Explorer) do not support many modern JavaScript features. Polyfills help bridge this gap by implementing missing functionality using older JavaScript.

// ✅ Example:

// Array.prototype.map(), Object.entries(), Promise, and fetch() are not supported in older browsers like IE11.
// A polyfill provides an alternative implementation so the code works on all browsers.
// 2. Ensuring Consistency Across Environments
// Different browsers may interpret JavaScript features slightly differently.
// Polyfills ensure consistent behavior across all browsers and JavaScript engines.

// ✅ Example:
// fetch() is not available in Internet Explorer.
// A polyfill like whatwg-fetch allows fetch() to work in all browsers.

if (!window.fetch) {
  window.fetch = function(url, options) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(options.method || "GET", url);
      
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(new Error("Network Error"));

      xhr.send();
    });
  };
}

// Summary: When Do We Need Polyfills?
// Reason	Example Feature	Polyfill Example
// Old browser compatibility	fetch(), Promise, Array.map()	whatwg-fetch, core-js
// Consistency across browsers	Object.assign(), String.includes()	Custom polyfills
// Using modern features in older browsers	ES6, ES7, ES8+ features	Promise.allSettled() polyfill
// Avoiding extra dependencies	Reduce package size	Custom polyfills instead of libraries
// Future-proofing code	New JavaScript features	ESNext polyfills

// Final Thoughts
// If a browser does not support a modern feature, we can create a polyfill to add support.
// Polyfills ensure a smooth user experience for everyone, regardless of the browser they use.
// It’s best to use polyfills only when needed, as they can add extra performance overhead.
// Would you like a real-world project where students implement polyfills for common features? 😊

// colsures in js

// A closure is a function that remembers the variables from its outer scope, 
// even after the outer function has finished executing.

// In simple terms, closures allow a function to access
//  variables from its parent scope even after the parent function has executed.
function outerFunction() {
  let outerVariable = "I am from outer";

  function innerFunction() {
    console.log(outerVariable); // Inner function still has access to outerVariable
  }

  return innerFunction;
}

const myClosure = outerFunction(); // outerFunction executes and returns innerFunction
myClosure(); // "I am from outer"

// outerFunction() executes and returns innerFunction, but the returned function 
// still remembers outerVariable,
//  even though outerFunction has finished execution.



function counter() {
  let count = 0; // This variable is private

  return function () {
    count++;
    console.log("Counter:", count);
  };
}

const increment = counter(); 
increment(); // Counter: 1
increment(); // Counter: 2
increment(); // Counter: 3




// Why use closures here?

// count is private and cannot be modified from outside.
// Every time we call increment(), it remembers the count value.


// Closures help hide data from global scope, 
// similar to private variables in object-oriented programming.

// Closure Capturing Reference Instead of Value

// Fix Using Closures (IIFE Approach)
// We can capture the correct value by using an Immediately Invoked Function Expression (IIFE).


for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log("Counter:", j); // Prints 1, 2, 3
    }, 1000);
  })(i);
}



// Concept	Example	Usage

// Basic Closure	Function inside another function	Remember variables from outer scope
// Data Privacy	Counter, Bank Account	Hide private variables
// Fixing Loops	setTimeout() issue	Capture correct loop variable
// Function Factories	multiplyBy(2)	Generate reusable functions
// Event Listeners	Button click handlers	Keep custom messages


// Closures allow functions to remember variables from their outer scope.
// They help with data privacy, function factories, event handling, and loops.
// Closures are the foundation of JavaScript's functional programming style.  



// first class func: 

// First-Class Functions in JavaScript
// Definition:
// In JavaScript, functions are first-class citizens, meaning:

// They can be assigned to variables.
// They can be passed as arguments to other functions.
// They can be returned from other functions.
// They can be stored in data structures (arrays, objects).


// 1
const greet = function() { 
  console.log("Hello, World!"); 
};

greet(); // Output: Hello, World!

// 2

function executeCallback(callback) {
  console.log("Executing callback...");
  callback();
}

function sayHello() {
  console.log("Hello!");
}

executeCallback(sayHello); // Output: Executing callback... Hello!


// setTimeout(), map(), filter()  rely on passing functions as arguments.


// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// console.log(double(5)); // Output: 10


// Use Case	Example
// Event Handling	button.addEventListener('click', handleClick);
// Asynchronous Operations	setTimeout(() => console.log("Done!"), 1000);
// Array Methods	arr.map(num => num * 2);
// Currying	multiply(2)(3) // 6
// Middleware in Express.js	app.use((req, res, next) => { next(); });

// Why Use First-Class Functions?
// Code Reusability – Functions can be passed and reused easily.
// Better Abstraction – Reduces redundancy in code.
// Functional Programming – Enables concepts like map(), filter(), reduce().
// Asynchronous Programming – Used in callbacks and promises.




// event loop consept of js // what is event loop
// call and bind
// constructer func
// new keyword