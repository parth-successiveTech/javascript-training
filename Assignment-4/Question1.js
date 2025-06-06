" use strict";
const ps = require("prompt-sync");
const prompt = ps();
let sentence = prompt("enter the input");
const set = new Set();
for (const char of sentence) {
  set.add(char);
}
let ans = "";
for (const val of set) {
  ans += val;
}
console.log(ans);
