" use strict";
const ps = require("prompt-sync");
const prompt = ps();
let rows = prompt("enter the no of rows");
let cols = prompt("enter the number of columns");
const matrix = [];
for (let i = 0; i < rows; i++) {
  matrix[i] = [];
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = prompt("enter the value");
  }
}
let ans = "";
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    ans = ans + matrix[i][j];
  }
}
console.log(ans);
