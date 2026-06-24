class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anag = {}
        for(let s of strs){
           const count = new Array(26).fill(0);

           for(let c of s){
           count  [c.charCodeAt(0)-'a'.charCodeAt(0)]+=1;
           }
           const key = count.join(',');
           if(!anag[key]){
            anag[key]=[]
           }
           anag[key].push(s)

        }
        return Object.values(anag);
    }
}
