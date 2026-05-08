class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let set = new Set(numbers)
        for(let i=0;i < numbers.length;i++){
            let num = target - numbers[i];

            if(set.has(num)){
                let j=i+1;
            while(j < numbers.length){
                if(numbers[j] ===  num){
                    return [i+1,j+1]
                }
                j++;
              }
            }
        }
    }
}
