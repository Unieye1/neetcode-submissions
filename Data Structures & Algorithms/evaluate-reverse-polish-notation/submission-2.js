class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack =[];
    
        for(let token of tokens) {
            if (!isNaN(token)) {
              stack.push(Number(token))
            } else {
              let a = stack.pop();
             let b =  stack.pop();
              if (token === '+'){
                stack.push(a+b);
              }
              if (token === '-'){
                stack.push(b-a)
              }
              if (token === '*'){
               stack.push(a*b)
              }
              if (token === '/'){
                stack.push(Math.trunc(b/a))
              }
            }
        }
        return stack [0]
    }
    
}
