class MinStack {

    constructor() {
        this.stack=[]
        this.minStack=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minStack.length === 0 || val <=    this.minStack[this.minStack.length-1]){
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const top = this.stack.pop();

        if(top === this.minStack[this.minStack.length-1]){
            this.minStack.pop()
        }

    }

    /**
     * @return {number}
     */
    top() {
        const top = this.stack[this.stack.length-1];
        return top; 

    }

    /**
     * @return {number}
     */
    getMin() {
        const min = this.minStack[this.minStack.length-1];
        return min; 
    }
}
