import updateLocalStorage from './updateLocalStorage';

class Stack{
    constructor(){
        this.stack = [];
        updateLocalStorage(this.stack)
    }
    stack_push(item){
        this.stack.push(item);
        updateLocalStorage(this.stack)
    }
    stack_pop(){
        this.stack.pop();
        updateLocalStorage(this.stack)
    }
    stack(){
        return this.stack
    }
}

const mainStack = new Stack();

export default mainStack;