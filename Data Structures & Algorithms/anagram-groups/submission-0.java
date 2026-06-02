class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String , List<String>> result = new HashMap<>();
        for(String s : strs){
            char[] charArray = s.toCharArray();
            Arrays.sort(charArray);
            String sorted = new String(charArray);
            result.putIfAbsent(sorted , new ArrayList<>());
            result.get(sorted).add(s);
        }
        return new ArrayList<>(result.values());
    }
}
