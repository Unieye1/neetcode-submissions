class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const pairs ={
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }
        for(let c of s){
            if (c==='('||c==='['||c==='{'){
                stack.push(c);
            }
            else{
                if(stack.length===0) return false;
                if(stack[stack.length-1]!== pairs[c])return false;
                stack.pop();
            }
            
        }
        return stack.length===0
    }
}
