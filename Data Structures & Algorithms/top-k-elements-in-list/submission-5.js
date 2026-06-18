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
        const result = [...map.entries()].sort((a,b)=>b[1] - a[1]);
        let data =[];

        for(let[key , count] of result){
            console.log(count)
            data.push(key)
            if(k === data.length){
                return data;
            }
           ;
        }
    }
}
