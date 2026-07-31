class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minValue = prices[0];
        let maxProfit = 0;
        let profit = 0;
        for(let i=1;i<prices.length;i++){
            if(prices[i]< minValue){
                minValue = prices[i];
            }
            else{
                profit = prices[i]-minValue;
            }
            if(profit>maxProfit){
                maxProfit = profit;
            }
        }return maxProfit
    }
}
