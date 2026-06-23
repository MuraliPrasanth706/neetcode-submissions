class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
productExceptSelf(nums) {
        let leftProd =1;
        let resultArray =[]

        for(let num of nums){  
            resultArray.push(leftProd);
            leftProd = leftProd * num;
        }

        let rightProd =1;

        for(let i = nums.length -1 ; i >= 0;i--){
            resultArray[i] = rightProd * resultArray[i];
            rightProd  = rightProd  * nums[i];
        }

        return resultArray
    }
}
