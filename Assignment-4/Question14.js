"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let size = prompt("enter the no of elements for  array ");
let arr = [];
for (let i = 0; i < size; i++) {
  arr[i] = prompt("enter the value");
}
let firstIndex = 0;
let lastIndex = arr.length - 1;
let temp = 0;
while (firstIndex < lastIndex) {
  temp = arr[firstIndex];
  arr[firstIndex] = arr[lastIndex];
  arr[lastIndex] = temp;
  firstIndex++;
  lastIndex--;
}
for (let val of arr) {
  console.log(val);
}
