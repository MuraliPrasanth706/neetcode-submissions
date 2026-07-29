class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       let left = 0;
    let maxFreq = 0;
    let maxLen = 0;
    const freq = new Map()

    for (let right = 0; right < s.length; right++) {
        freq.set(s[right], (freq.get(s[right]) || 0) + 1);

        maxFreq = Math.max(maxFreq, freq.get(s[right]))

        let windowSize = right - left + 1;

        if (windowSize - maxFreq > k) {
            let leftChar = s[left]
            freq.set(leftChar, freq.get(leftChar) - 1)
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1)

    }
    return maxLen;
    }
}
