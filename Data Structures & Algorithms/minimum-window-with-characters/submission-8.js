class Solution {
    mapsMatch(map1, map2) {
        for (const [key, value] of map1) {
            if (!map2.has(key) || map2.get(key) < value) {
                return false;
            }
        }

        return true;
    }

    minWindow(s, t) {
        if (t.length > s.length) {
            return "";
        }

        const targetMap = new Map();
        const windowMap = new Map();

        for (let i = 0; i < t.length; i++) {
            targetMap.set(
                t[i],
                (targetMap.get(t[i]) || 0) + 1
            );
        }

        let left = 0;
        let right = 0;
        let resultString = "";

        while (right < s.length) {
            windowMap.set(
                s[right],
                (windowMap.get(s[right]) || 0) + 1
            );
            right++;

            if (windowMap.size >= targetMap.size) {

                while (this.mapsMatch(targetMap, windowMap)) {

                    if (resultString === ""||(right - left) < resultString.length) {
                        resultString = s.slice(left, right);
                    }

                    if (windowMap.get(s[left]) === 1) {
                        windowMap.delete(s[left]);
                    } else {
                        windowMap.set(
                            s[left],
                            windowMap.get(s[left]) - 1
                        );
                    }

                    left++;
                }
            }
        }

        return resultString;
    }
}