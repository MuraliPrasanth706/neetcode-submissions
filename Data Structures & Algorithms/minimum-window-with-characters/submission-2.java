class Solution {
    public String minWindow(String s, String t) {
        HashMap <Character,Integer> need =new HashMap<>();
        HashMap<Character,Integer> have = new HashMap<>();
        for(char ch : t.toCharArray()){
            need.put(ch,need.getOrDefault(ch, 0)+1);
        }
        int start=0;
        int end =0;
        int minLen =Integer.MAX_VALUE;
        String result ="";
        int formed =0;


      while(end < s.length()){
        char c =s.charAt(end);
        have.put(c,have.getOrDefault(c, 0)+1);

        if(need.containsKey(c)&&have.get(c).equals(need.get(c))){
            formed++;
        }
        end++;

        while(formed == need.size()){
            if(end - start <minLen){
                minLen = end - start;
                result = s.substring(start,end);
            }
            char c1 =s.charAt(start);
            have.put(c1,have.get(c1)-1);
            if(need.containsKey(c1) && have.get(c1) < need.get(c1)){
                formed--;
            }
            if(have.get(c1) == 0){
                have.remove(c1);
            }
            start++;
        }
      }
      return result;
        
    }

    // private boolean contains( HashMap <Character,Integer> need, HashMap <Character,Integer> have){
    //     for(char ch : need.keySet()){
    //         if(have.getOrDefault(ch, 0) < need.get(ch)){
    //             return false;
    //         }
    //     }
    //         return true;

    
    // }
}
