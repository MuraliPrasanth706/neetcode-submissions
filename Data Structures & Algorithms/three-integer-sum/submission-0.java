class Solution {
    public List<List<Integer>> threeSum(int[] nums) {

           Arrays.sort(nums);
        List<List<Integer>> listArr = new ArrayList<>();
        for(int i =0 ; i < nums.length -2;i++){
            if(i >0 && nums[i] == nums[i-1]){
                continue;
            }

            int mid =i+1;
            int end = nums.length-1;

            while(mid < end){
                int sum = nums[i] + nums[mid] + nums[end];

                if(sum == 0) {
                    listArr.add(Arrays.asList(nums[i] , nums[mid] , nums[end]));

                    while(mid < end && nums[mid] == nums[mid +1]){
                        mid++;
                    }
                    while(mid < end && nums[end] == nums[end - 1]){
                        end--;
                    }
                    mid++;
                    end--;
                }
                else if( sum < 0){
                    mid++;
                }
                else{
                    end--;
                }
            } 
        }

      
        return listArr;

        
    }
}
