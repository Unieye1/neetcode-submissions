class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0;i<nums.length;i++){
            let diff = target - nums[i];
            let index = nums.indexOf(diff);
            if(index !== -1 && index !==i){
                return [index,i]
            }
        }
    }
}
