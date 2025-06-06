"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let sentence = prompt("enter the input");
const hm = new Map();
let oldFrequency = 0;
for (var key of sentence) {
  if (hm.has(key)) {
    oldFrequency = hm.get(key);
    hm.set(key, oldFrequency + 1);
  } else {
    hm.set(key, 1);
  }
}
let ans = "";
for (let [key, value] of hm) {
  ans = ans + key + value;
}
console.log(ans);
