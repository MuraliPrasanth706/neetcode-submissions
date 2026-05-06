class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let max=0;

        for(let i=0;i< nums.length;i++){
            if(!set.has(nums[i]-1)){
                let length=0;
                while(set.has(nums[i]+length)){
                    length +=1;
                }
                max = Math.max(length,max)
            }
        }
        return max
    }
}
