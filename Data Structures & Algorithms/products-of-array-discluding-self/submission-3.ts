class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let resultArray =[]
        let leftProduct =1;
        for(let num of nums){
          resultArray.push(leftProduct)
          leftProduct = leftProduct * num
        }

        let rightProduct =1;

        for(let i=nums.length-1; i>=0;i--){
               resultArray[i] =   rightProduct * resultArray[i];
               rightProduct = rightProduct * nums[i]
        }
        return resultArray;
    }
}
