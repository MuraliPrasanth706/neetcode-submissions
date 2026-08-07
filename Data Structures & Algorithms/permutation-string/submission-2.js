class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    mapsMatch(map1, map2){
        if (map1.size !== map2.size) return false;

        for(let [key,value] of map1){
            if(map2.get(key) !== value){
                return false
            }
        }
        return true
    }
    checkInclusion(s1, s2) {
        const targetMap = new Map();
        const windowMap = new Map();


        for (let i = 0; i < s1.length; i++) {
            targetMap.set(
                s1[i],
                (targetMap.get(s1[i]) || 0) + 1
            );
            windowMap.set(s2[i], (windowMap.get(s2[i]) || 0) + 1);
        }


        for(let i=s1.length;i < s2.length;i++){

            if (this.mapsMatch(targetMap, windowMap)) {
                return true;
            } 
            
                windowMap.set(s2[i] , (windowMap.get(s2[i])||0)+1);


                const matched = this.mapsMatch(targetMap , windowMap);
               

               let left = i - s1.length;
               let leftChar = s2[left];
                let leftCount = windowMap.get(leftChar);

                if(leftCount ===1){
                windowMap.delete(leftChar)
                }else{
                    windowMap.set(leftChar ,leftCount-1)
                }
            }

return this.mapsMatch(targetMap, windowMap);
        }
        
    }

