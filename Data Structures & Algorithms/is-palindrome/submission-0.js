class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str=s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"");
        let i=0;
        let j= str.length-1;

        while(i < j){
            if(str[i] === str[j]){
                i++;
                j--;
            }else{
                return false
            }
        }
        return true;
    }
}
