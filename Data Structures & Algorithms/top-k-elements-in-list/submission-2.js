class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const result =[];

        for (let char of nums) {
            count[char] = (count[char] || 0) + 1;
        }
        let arr = Object.entries(count);
        const bucket = Array(nums.length+1).fill().map(()=>[]);
        for(const [num,freq] of arr){
            bucket[freq].push(Number (num))
        };
        for(let i=bucket.length-1;i>=0;i--){
            for(const num of bucket[i]){
                result.push(num);
                if(result.length===k){
                    return result
                }
            }
        }

        
    }
    
}
