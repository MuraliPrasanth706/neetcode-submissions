class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
          Deque<Integer> deque = new ArrayDeque<>();
        int[] result = new int[nums.length - k + 1];
        int n = nums.length;
        int resultIndex = 0;
        int end =0;
        for (int start = 0; start <= nums.length-k ; start++) {
            int max = Integer.MIN_VALUE;

            while (end < nums.length && deque.size() < k) {
                deque.add(nums[end]);
                end++;
            }

            max = getMax(deque, max);
            result[resultIndex++] = max;

            deque.pollFirst();
        }

        return result;
    }

    private static int getMax(Deque<Integer> deque, int max) {

        for (int num : deque) {
            max = Math.max(max, num);
        }
        return max;

    }
    }

