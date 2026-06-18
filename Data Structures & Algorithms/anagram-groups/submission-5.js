class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let i=0;i< strs.length;i++){
            let result = strs[i].split("").sort().join("");
            if(!map.has(result)){
                map.set(result,[]);
            }
                map.get(result).push(strs[i])
            
            
        }
        return [...map.values()]
    }
}
