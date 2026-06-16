class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
            let result = new Map()
            for(let i= 0 ; i <strs.length ;i++){
                let key = strs[i].split("").sort().join("");
                if(!result.has(key)){
                    result.set(key,[])
            }
            result.get(key).push(strs[i])
            
        }   
       return [...result.values()];

    }
}
