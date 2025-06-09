"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let size = prompt("enter the no of elements for  array ");
let arr = [];
for (let i = 0; i < size; i++) {
  arr[i] = prompt("enter the value");
}


let inverseArr = [];

for (let val in arr) 
    {
        inverseArr[arr[val]]=val;
}
for(let ans of inverseArr)
{
    console.log(ans);
}

