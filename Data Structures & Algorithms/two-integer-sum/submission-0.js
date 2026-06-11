class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map={}
        for(let i=0;i<nums.length;i++){
            const diffrence = target - nums[i]
            if(diffrence in map){
                return [map[diffrence],i]
            }
             map[nums[i]]=i

        }
    }
}
