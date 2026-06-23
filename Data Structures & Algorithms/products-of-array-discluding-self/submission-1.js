class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans =[]

        for(let i=0;i< nums.length;i++){
            let prod =1;
            for(let j=0;j < nums.length;j++){
                if(i !== j){
                    prod = prod *nums[j]
                } 
            }
            ans.push(prod)
        }        
        return ans;
    }
}
