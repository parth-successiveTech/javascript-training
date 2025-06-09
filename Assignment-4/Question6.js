"use strict"
const ps=require("prompt-sync");
const prompt=ps();
let  size=prompt( "enter the input");
let arr=[];
for(let i=0;i<size;i++)
{
arr[i]=parseInt(prompt( "enter the input"));
}
let ans=0;
for(let i=0;i<arr.length;i++)
{
ans=ans+arr[i];
}
console.log(ans);