class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(let s of strs){
            result += `${s.length}#${s}`
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result =[];
        let i = 0;
        while(i<str.length){ 
        let pos = str.indexOf('#',i);
        let len = Number(str.slice(i,pos));
        i = pos+1;
         result.push(str.slice(i,i+len));
        i+=len;
        }
        return result
    }
}
