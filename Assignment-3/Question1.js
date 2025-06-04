"use strict"
const ps=require("prompt-sync");
const prompt=ps();
let num1=prompt("enter number1");
let num2=prompt("enter number2");

let operation=prompt("enter the operation name");
switch(operation)
{
case "add":
console.log(num1+num2);
             break;
case "subtract":
console.log(num1-num2);
             break;
case "multiply":
console.log(num1*num2);
             break;
 case "divide":
console.log(num1/num2);
             break;
             case "modulus":
console.log(num1%num2)
             break;
  default:console.log("you have entered some other operation");

}