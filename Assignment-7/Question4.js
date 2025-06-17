const dummyTask = (id, delay) => {
    return () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    });
}

class RateLimiter {


    constructor(maxConcurrent) {
        this.maxConcurrent = maxConcurrent;
        this.currentCount = 0;
        this.queue = [];
    }

    scheduleTask(taskFn) {

        return new Promise((resolve, reject) => {

            const execute = async () => {
                this.currentCount++; 
                try {
                    const result = await taskFn();
                    console.log("dummy Task ")
                    resolve(result)
                } catch (error) {
                    reject(error)
                } finally {
                    this.currentCount--; 
                    console.log(`Current count: ${this.currentCount}`)
                    // does que have any task
                    if (this.queue.length > 0) {
                        console.log(`Executing next task from queue, current count: ${this.currentCount}`);
                        const nextTask = this.que.shift();
                        nextTask();
                    }
                }

            }

            if (this.currentCount < this.maxConcurrent) {
                execute();
            } else {
                console.log(`Current count: ${this.currentCount}, adding task to queue`);
                this.queue.push(execute)
            }



        })

    }


}

const limiter = new RateLimiter(3);

for (let index = 0; index < 10; index++) {
    limiter.scheduleTask(dummyTask(index, 1000))
}
