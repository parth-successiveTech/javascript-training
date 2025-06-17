function createPromise(id){

    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log(`New Promise created with id ${id}`);
            resolve(`Task  ${id} is done`);
        },1000); 
    })
}

let arr=[];

for(let i=0;i<5;i++){
    let  curr = Math.floor(Math.random()*10) +1
    const  now = createPromise(curr);
    arr.push({curr,now});
}

arr.sort((a,b)=>a.curr-b.curr);

let queue=[];

async function transfer(){
    let i=0;
    while(arr.length && i<2){
        queue.push(arr.shift().now);
        i+=1;
    }
    await calling(queue);
    
    queue.length=0;
    
}

let max = 2;
async function calling(currTasks){
    if(queue.length <= max){  
        const result = await Promise.allSettled(currTasks); 
        console.log(result); 
    }
    else{
        console.log("Queue is full");
    }
       
}

while(arr.length){
    await transfer();
}