"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let size = prompt("enter the no of elements for  array 1");
let arr1 = [];
for (let i = 0; i < size; i++) {
  arr1[i] = prompt("enter the value");
}

let size2 = prompt("enter the no of elements in array 2");
let arr2 = [];
for (let i = 0; i < size2; i++) {
  arr2[i] = prompt("enter the value");
}

let set = new Set();
for (let val of arr1) {
  set.add(val);
}
for (let val of arr2) {
  if (set.has(val)) {
    console.log(val);
  }
}
