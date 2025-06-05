"use strict"
const ps=require("prompt-sync");
const prompt=ps();
let num1=prompt("enter number");
for(let i=1;i<num1;i++)
{
    console.log(fibonacciNo(i));
}
function fibonacciNo(no)
{
    if(no==0||no==1)
       { return no;}
    let n1=fibonacciNo(no-1);
    let n2=fibonacciNo(no-2);
    return n1+n2;
}