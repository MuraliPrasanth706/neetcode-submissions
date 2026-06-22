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

        for(let num of set){
             let data = num;
             let result = 0;
            if(!set.has(data - 1)){
                while(set.has(data)){
                    result++;
                    data++;
                }
            }
            max = Math.max(result,max);
        }
        return max;

    }
}
