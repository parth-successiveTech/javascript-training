" use strict";
const ps = require("prompt-sync");
const prompt = ps();
let sentence = prompt("enter the input");
let arr = [];
let ans = "";
for (let i = 0; i < sentence.length; i++) {
  arr.push(sentence[i]);
  if (sentence[i] == " ") {
    while (arr.length > 0) {
      ans = ans + arr.pop();
    }
  }
  ans = ans + " ";
}
ans = ans + " ";
while (arr.length > 0) {
  ans = ans + arr.pop();
}
console.log(ans);
