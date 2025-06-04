"use strict"

let p="";
let ps="";
for(let i=1;i<=9;i++)
{
    for(let j=5;j>=1;j--)
    {
        for(var k=1;k<j;k++)
        {
            ps=ps+" ";
        
        }
        for(let n=k;n<=j;j++)
        {
            p=p+"*";
        }
        ps=ps+p;
        console.log(ps);
        ps="";
        p="";   
    }
}