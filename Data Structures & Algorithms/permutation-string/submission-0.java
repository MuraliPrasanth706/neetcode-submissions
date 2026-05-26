class Solution {
    public boolean checkInclusion(String s1, String s2) {
        HashMap <Character ,Integer> need = new HashMap<>();
        HashMap <Character,Integer> have = new HashMap<>();

        for(char c : s1.toCharArray()){
            need.put(c , need.getOrDefault(c,0)+1);
        }

        int start=0;
        int end =0;
        
        while(end < s2.length()){
            char endChar = s2.charAt(end);

            if(!need.containsKey(endChar)){
                end++;
                start=end;
                have.clear();
                continue;
            }

            have.put(endChar , have.getOrDefault(endChar,0)+1);

            while(have.get(endChar) > need.get(endChar)){
                char startChar = s2.charAt(start);
                have.put(startChar , have.get(startChar)-1);
                start++;
            }

            int windowSize = end - start +1;

            if(windowSize == s1.length()){
                return true;
            }
            end++;
        }
        return false;
    }
}
