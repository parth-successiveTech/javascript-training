for(let i=2;i<=50;i++)
{
    findPrime(i);
}
function findPrime( no)
{
    flag=true;
    for(let i=2;i<=Math.sqrt(no);i++)
    {
        if(no%i==0)
        {
            flag=false;
        }

    }
    if(flag==true)
     console.log(`${no} is a prime number `);
}