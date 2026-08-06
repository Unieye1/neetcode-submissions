class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map();
        let maxFreq = 0;
        let maxLength = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            count.set(char, (count.get(char) || 0) + 1);
            
            // Track the maximum frequency of any single character in the window
            maxFreq = Math.max(maxFreq, count.get(char));

            // Window length is (right - left + 1).
            // If total replacements needed (windowLen - maxFreq) exceed k, shrink the window.
            while ((right - left + 1) - maxFreq > k) {
                const leftChar = s[left];
                count.set(leftChar, count.get(leftChar) - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
