class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            // Find the middle index (prevents potential overflow in other languages)
            let mid = left + Math.floor((right - left) / 2);

            if (nums[mid] === target) {
                return mid; // Target found, return its index
            } else if (nums[mid] < target) {
                left = mid + 1; // Eliminate the left half
            } else {
                right = mid - 1; // Eliminate the right half
            }
        }

        return -1; // Target does not exist in the array
    
    }
}
