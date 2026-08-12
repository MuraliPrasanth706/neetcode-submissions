class Solution {

    public boolean mapsMatch(
        HashMap<Character, Integer> map1,
        HashMap<Character, Integer> map2
    ) {
        for (Map.Entry<Character, Integer> entry : map1.entrySet()) {
            char key = entry.getKey();
            int value = entry.getValue();

            if (!map2.containsKey(key) || map2.get(key) < value) {
                return false;
            }
        }

        return true;
    }

    public String minWindow(String s, String t) {
        if (s.length() < t.length()) {
            return "";
        }

        HashMap<Character, Integer> targetMap = new HashMap<>();
        HashMap<Character, Integer> windowMap = new HashMap<>();


        for (int i = 0; i < t.length(); i++) {
            char c = t.charAt(i);
            targetMap.put(c, targetMap.getOrDefault(c, 0) + 1);
        }

        int left = 0;
        int right = 0;
        String resultString = "";

        while (right < s.length()) {

           
            char c = s.charAt(right);
            windowMap.put(c, windowMap.getOrDefault(c, 0) + 1);

            right++;

            if (windowMap.size() >= targetMap.size()) {

                while (mapsMatch(targetMap, windowMap)) {

                    if (resultString.equals("") ||
                        (right - left) < resultString.length()) {

                        resultString = s.substring(left, right);
                    }

                    char leftChar = s.charAt(left);
                    int leftValue = windowMap.get(leftChar);

                    if (leftValue > 1) {
                        windowMap.put(leftChar, leftValue - 1);
                    } else {
                        windowMap.remove(leftChar);
                    }

                    left++;
                }
            }
        }

        return resultString;
    }
}