class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left =0;
        let maxLen =0;
        const seen = new Set();

        for(let right =0;right < s.length;right++){
            while(seen.has(s[right])){
                seen.delete(s[left]);
                left++
            }

            seen.add(s[right]);

            let maxData = right - left + 1;
            maxLen = Math.max(maxLen ,  maxData)
        }
        return maxLen
    }
}
