// import { expp, greeting } from './index.js';

// console.log(expp);  // Deepak
// console.log(greeting()); // Hello!

console.clear();
const p1 = Promise.resolve("Task 1 completed");
const p2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 completed"), 2000));
const p3 = new Promise((reject) => setTimeout(() => reject("Task 3 failed"), 1000));

Promise.all([p1, p2, p3])
  .then(results => console.log("All resolved:", results))
  .catch(error => console.error("One failed:", error));
  