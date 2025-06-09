"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let size = prompt("enter the input");
let arr = [];
const hm = new Map();
let ans = new Set();
let oldFrequency = 0;
for (let i = 0; i < size; i++) {
  arr[i] = parseInt(prompt("enter the input"));
}
for (var key of arr) {
  if (hm.has(key)) {
    oldFrequency = hm.get(key);
    hm.set(key, oldFrequency + 1);
  } else {
    hm.set(key, 1);
  }
  for (let [key, value] of hm) {
    if (value > 1) {
      ans.add(arr.indexOf(key));
    }
  }
  console.log(Array.from(ans).pop());
}
