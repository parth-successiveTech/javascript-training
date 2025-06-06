"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let size = prompt("enter the input");
let arr = [];
const hs = new Set();
let ans = [];
let oldFrequency = 0;
for (let i = 0; i < size; i++) {
  arr[i] = parseInt(prompt("enter the input"));
}
for (var key of arr) {
  hs.add(key);
}
for (let k of hs) {
  console.log(k);
}
