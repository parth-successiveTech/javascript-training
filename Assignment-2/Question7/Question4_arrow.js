const squareNumber=( callback)=>{
    let number=callback()
    let square_number=Math.pow(number,2);
    console.log(square_number); 
}
squareNumber(prompt);