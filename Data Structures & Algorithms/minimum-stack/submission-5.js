class MinStack {
    constructor() {
        this.stack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length ===0 ){
            this.stack.push({val : val , min : val});
        }else{
            let currentMin = this.stack[this.stack.length -1].min;
            let newMin = Math.min(currentMin , val);

            this.stack.push({val :  val , min : newMin});
        }
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length -1].val
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}
