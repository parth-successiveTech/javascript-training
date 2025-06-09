const obj = {
    a: 1,
    b: { c: 2, d: [3, 4] }
  };
  function deepCopy(obj)
  {
    if(obj===null|| typeof obj!=='object')
    {
        return obj;
    }
        if(Array.isArray(obj))
        {
            const copyArray=[];
            for(let idx in obj)
            {
                
                copyArray[idx]=deepCopy(obj[idx]);
            }
            
            return copyArray;
        }
      const objCopy={};

        for(const  key in obj)
        {
            objCopy[key]=deepCopy(obj[key]);

        }
        return objCopy;

    }

  let obj2=deepCopy(obj);
  obj2.b.d[0] = 100;
  console.log(obj);
  console.log(obj2);