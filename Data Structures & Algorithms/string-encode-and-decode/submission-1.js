class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      let res = "";
        for (let s of strs) {
            res += s.length + "#" + s;
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            // Find the delimiter '#' to parse the length
            while (str[j] !== '#') {
                j++;
            }
            
            let length = parseInt(str.substring(i, j));
            i = j + 1; // Move past the '#'
            
            // Extract the string based on the parsed length
            res.push(str.substring(i, i + length));
            i += length; // Move to the start of the next encoded string
        }

        return res;
    }
}
