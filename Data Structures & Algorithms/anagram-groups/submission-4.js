class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ans = {};
        for(let s of strs){
            let sorted = s.split("").sort().join("");
            if(!ans[sorted]){
                ans[sorted] = []
            }
            ans[sorted].push(s)
        }
        return Object.values(ans)
    }
}
