"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let str = prompt("enter the input");
if (str === str.toUpperCase() && str !== str.toLowerCase()) {
  console.log(str.toLowerCase());
} else {
  console.log(str.toUpperCase());
}
