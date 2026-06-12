class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let set = new Set(nums)
        for(let i=0;i<nums.length;i++){
         let sum = target - nums[i];
         let j=i+1; 
         while(set.has(sum) && j < nums.length){
            if(sum === nums[j]){
                return[i,j]
            }
            j++;
         }

        }
    }
}
