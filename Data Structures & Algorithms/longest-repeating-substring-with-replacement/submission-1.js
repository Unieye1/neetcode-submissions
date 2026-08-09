class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let L = 0;
        let R = 0;
        const count = {};
        let maxFreq = 0;
        let Maxlength = 0;
        while (R < s.length) {


            count[s[R]] = (count[s[R]] || 0) + 1;
            maxFreq = Math.max(maxFreq, count[s[R]]);
            let windowLength = (R - L) + 1;
            
            if (windowLength - maxFreq > k) {
                count[s[L]]--
                L++
            }
            windowLength = (R - L) + 1;
            Maxlength = Math.max(Maxlength, windowLength);
            R++;
        }
        return Maxlength;
    }
}
