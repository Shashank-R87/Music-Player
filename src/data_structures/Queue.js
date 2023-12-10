class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(element){
        this.queue.push(element);
    }
    dequeue(){
        if(this.queue.length === 0) return "Underflow";
        return this.queue.shift();
    }
    returnQueue(){
        return this.queue;
    }
}

const mainQueue = new Queue();

export default mainQueue;