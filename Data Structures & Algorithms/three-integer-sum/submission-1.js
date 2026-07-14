class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
       nums.sort((a,b)=>a -b);
        const set = new Set();

        for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === 0){
                set.add(JSON.stringify([nums[i] , nums[left] , nums[right]]))
                left++;
                right--;
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }

            }
        }

        let result=[]

        for(const num of set){
            result.push(JSON.parse(num))
        }

        return result

    }
}
