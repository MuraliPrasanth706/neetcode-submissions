class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        if(n === 0) return 0;
        let i=0;
        let j = height.length -1;
        let max_left =height[i]
        let max_right = height[j]

        let total_water =0;

        while(i < j){

            if(max_left < max_right){
                i++;

                max_left = Math.max(max_left , height[i])
                total_water += max_left - height[i]
            }else{
                j--;

                max_right = Math.max(max_right , height[j])
                total_water += max_right - height[j]
            }
        }
        return total_water
    }
    
}
