class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let maxLength = 0;
        const set = new Set();
        let L = 0;

        for (let R = 0; R < s.length; R++) {
            
            while (set.has(s[R])) {
                set.delete(s[L]);
                L++;
            }

           
            set.add(s[R]);
            maxLength = Math.max(maxLength, R - L + 1);
        }

        return maxLength;
    }
}
