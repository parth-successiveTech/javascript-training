async function getApi()
{
    const url1="https://catfact.ninja/fact";
    const url2="https://dog.ceo/api/breeds/image/random";
    const url3="https://official-joke-api.appspot.com/random_joke";
    let data1=fetch(url1).then(res=>res.json());
    let data2=fetch(url2).then(res=>res.json());
    let data3=fetch(url3).then(res=>res.json());

    let finalPromise=await Promise.all([data1,data2,data3]);
    display(finalPromise[0],finalPromise[1],finalPromise[2]);
    
    
}
 function display(data1,data2,data3)
    {
       console.log(data1);
       console.log(data2);
       console.log(data3); 
    }
    getApi();