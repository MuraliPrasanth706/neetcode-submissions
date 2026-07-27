class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left =0;
        let right =1;
        let maxProfit =0;
        while(right < prices.length){
            if(prices[right] > prices[left]){
                let data = prices[right] - prices[left]
                maxProfit = Math.max(data, maxProfit);
            }else{
                left = right;
            }
            right++;
        }
        return maxProfit
    }
}
