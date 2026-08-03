class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = 0;
        let width= 0;
        let area = 0 ;
        for (let i = 0; i < heights.length; i++) {

              left = i;
              right = i ;
            while (left > 0 && heights[left - 1] >= heights[i]) {
                left--;
            }
            while (right < heights.length - 1 && heights[right + 1] >= heights[i]) {
                right++;
            }
            width = (right - left) + 1;
            area = heights[i] * width;
            maxArea = Math.max(area, maxArea)
        }
        return maxArea;
    }
}
