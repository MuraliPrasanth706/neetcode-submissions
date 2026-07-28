class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left=0;
        const set = new Set();
        let maxData=0;

        for(let right =0; right<s.length;right++){
            while(set.has(s[right])){
                set.delete(s[left]);
                left++
            }

            set.add(s[right]);

            let maxLen = right - left +1;
            maxData= Math.max(maxLen, maxData)
        }

        return maxData
    }
}
