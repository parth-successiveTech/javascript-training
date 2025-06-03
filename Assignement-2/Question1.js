
function randomNumber()
{
    let  number = Math.random();
    let finalNumber=Math.ceil((number*10));
    return finalNumber;
}

let answer1=randomNumber();
let answer2=randomNumber();
if(answer1===answer2)
{
    console.log(randomNumber());
}
else
{
    console.log(answer1);
}
