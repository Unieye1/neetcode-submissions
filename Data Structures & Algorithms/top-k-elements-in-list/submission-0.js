class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        for (let char of nums) {
            count[char] = (count[char] || 0) + 1;
        }
        let arr = Object.entries(count);
        for(const [num , freq]of arr){
            arr.sort((a,b) => a[1]-b[1])
        }
        const topK = arr.slice(-k);
        const result = topK.map(([num,freq])=>Number(num));
        return result
    }
    
}
