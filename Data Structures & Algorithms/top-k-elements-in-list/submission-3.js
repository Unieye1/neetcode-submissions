class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = [];
        let count = {};
        for(let num of nums){
            count[num] = (count[num]||0)+1;
        }
        let arr = Object.entries(count);
        const bucket = Array(nums.length+1).fill().map(()=>[]);
        for(let [num,freq] of arr){
            bucket[freq].push(num)
        }
        for(let i = bucket.length-1;i>=0;i--){
            for(let num of bucket[i]){
                result.push(num);
                if(result.length===k){
                    return result
                }
            }
        }
    }
}
