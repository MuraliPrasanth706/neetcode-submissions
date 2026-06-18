class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let i=0;i<nums.length;i++){
            map.set(nums[i], (map.get(nums[i]) || 0) +1)
        }
        let buckets = Array(nums.length+1).fill().map(()=>[]);
        for(let [key , count] of map){
            buckets[count].push(key)

        }
        let result = [];

        for(let i = buckets.length-1; i >=0 ;i--){
            for(const num of buckets[i]){
            result.push(num);

            if(k === result.length){
                return result;
            }
            }
        }
        return result;
    }
}
