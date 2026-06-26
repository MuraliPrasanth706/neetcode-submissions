class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result ="";
        for(let str of strs){
            result +=str.length + "#" + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i=0;

        while(i < str.length){
            let j=i;

            while(str[j] !="#"){
                j++;
            }

            let length = parseInt(str.substring(i,j));

            let wordStart = j +1;
            let wordEnd = wordStart + length;
            let word = str.substring(wordStart, wordEnd);
            
            result.push(word);
            
            i = wordEnd;
        }

        return result;
    }
}
