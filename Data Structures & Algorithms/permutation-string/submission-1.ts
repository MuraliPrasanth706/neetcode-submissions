class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
          const need = new Map<string, number>();
    const have = new Map<string, number>();

    for (let i = 0; i < s1.length; i++) {
        const ch = s1[i];
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    let start = 0;
    let end = 0;

    while (end < s2.length) {
        const endC = s2[end];

        if (!need.has(endC)) {
            end++;
            start = end;
            have.clear();
            continue;
        }

        have.set(endC, (have.get(endC) || 0) + 1);

        while ((have.get(endC) || 0) > (need.get(endC) || 0)) {
            const startChar = s2[start];
            have.set(startChar, (have.get(startChar) || 0) - 1);
            start++;
        }

        const windowSize = end - start + 1;

        if (windowSize === s1.length) {
            return true;
        }

        end++;
    }

    return false;
        
    }
}
