class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
    let start=0;
    let end = numbers.length-1;

    while(start < end){
        let k = numbers[start] + numbers[end];

        if(k > target){
            end--
        }else if(k < target) { 
            start++
        }else{
            return [start+1 , end+1]
        }
    }
    }
}
