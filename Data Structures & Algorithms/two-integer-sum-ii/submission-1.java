class Solution {
    public int[] twoSum(int[] numbers, int target) {
         HashSet<Integer> set = new HashSet<>();

        for (int num : numbers) {
            set.add(num);
        }
        for (int i = 0; i < numbers.length; i++) {
            int num = target - numbers[i];

            if (set.contains(num)) {
                int j = i + 1;
                while (j < numbers.length) {
                    if (numbers[j] == num) {
                        return new int[] { i + 1, j + 1 };
                    }
                    j++;
                }
            }
        }
        return new int[]{};
    }
}
    
