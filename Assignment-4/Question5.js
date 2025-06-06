"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let str = prompt("enter the input");
let words=str.split(" ");
let ans="";
for(let i=0;i<words.length;i++)
{
    
      let word=words[i];
      let finalWord=word.charAt(0).toUpperCase()+word.slice(1);
      ans=ans+finalWord;
    }

console.log(ans);