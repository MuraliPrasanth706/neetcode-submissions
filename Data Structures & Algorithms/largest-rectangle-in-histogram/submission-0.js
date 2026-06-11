class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    findPreviousSmallElement = (arr , n)=>{
        let stack = [];
        let newArray=[];


        for(let i= 0;i < n;i++){
            while (stack.length > 0 && arr[stack[stack.length-1]] >= arr[i]){
               stack.pop()
            }

            if(stack.length === 0){
                newArray.push(-1)
            }else{
                newArray.push(stack[stack.length-1]);
            }
                stack.push(i);

            
        }
        return newArray
    }

    findNextSmallElement = (arr  , n)=>{
        let stack =[];
        let newArray =[];
        for(let i=n-1;i >=0;i--){
            while(stack.length > 0 && arr[stack[stack.length-1]] >= arr[i]){
                stack.pop()
            }

            if(stack.length === 0){
                newArray[i] =n;
            }else{
                newArray[i] =stack[stack.length-1]
            }
            stack.push(i);
        }
        return newArray;
    }
    largestRectangleArea(heights) {
        
        const pse = this.findPreviousSmallElement(heights,heights.length)
        const nse = this.findNextSmallElement(heights,heights.length)
        let max=0;
        for(let i =0;i < heights.length;i++){
            max = Math.max(max , heights[i] * (nse[i] - pse[i]-1));
        }

        return max;

    }
}
