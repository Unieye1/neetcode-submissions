class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n);

        // First pass: Calculate prefix products
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            res[i] = prefix;
            prefix *= nums[i];
        }

        // Second pass: Calculate postfix products and multiply
        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }

        return res;
    }
}
