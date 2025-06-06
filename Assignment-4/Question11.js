"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let size = prompt("enter the no of elements");
let arr = [];
for (let i = 0; i < size; i++) {
  arr[i] = prompt("enter the value");
}
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
for (let val of arr) console.log(val);
