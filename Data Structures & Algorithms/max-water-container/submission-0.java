class Solution {
    public int maxArea(int[] heights) {

        int start = 0;
        int end = heights.length - 1;
        int max =0;

        while(start < end){
            int nums = (end - start) * Math.min(heights[start],  heights[end]);

            if(nums > max){
                max= nums;
            }

            if(heights[start] < heights[end]){
                start++;
            }else{
                end--;
            }
        }
        return max;
    }
}
