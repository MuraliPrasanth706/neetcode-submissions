class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map = new Map();

        for(let i=0;i<nums.length;i++){
            map.set(nums[i], (map.get(nums[i])||0) +1);
        }

       const bucket = Array(nums.length+1).fill(null).map(()=>[]);

        for(const [key ,count] of map){
            bucket[count].push(key)
        }
        let result =[];

        for(let i = bucket.length-1 ; i >=0 ; i--){
            for(const num of bucket[i] ){
            result.push(num);
            if(k === result.length){
                return result
            }
            }
        }
        return result
    }
}
