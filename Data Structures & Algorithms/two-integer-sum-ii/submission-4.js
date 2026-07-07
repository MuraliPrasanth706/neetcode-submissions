class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start =0;
        let end = numbers.length-1;
        while(start < end){
            let value = numbers[start] + numbers[end];

            if(value > target){
                end--;
            }else if(value < target){
                start++;
            }else{
                return [start+1, end+1]
            }
        }
    }
}
