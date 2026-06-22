class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        let max =0;
        for(let num of nums){
            set.add(num)
        }

        for(let i=0;i< nums.length;i++){
             let num = nums[i];
             let result = 0;
            if(!set.has(num - 1)){
                while(set.has(num)){
                    result++;
                    num++;
                }
            }
            max = Math.max(result,max);
        }
        return max;

    }
}
