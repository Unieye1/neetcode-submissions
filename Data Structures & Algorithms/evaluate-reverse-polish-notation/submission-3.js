class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack =[];
        for(let token of tokens ){
            if(!isNaN(token)){
                stack.push(Number(token))
            }
            else {
                let b = stack.pop();
                let a = stack.pop();
                if (token === '+'){
                    stack.push(a + b)
                }
                if (token === '-'){
                    stack.push(a - b)
                }
                if (token === '*'){
                   stack.push(a * b)
                }
                if (token === '/'){
                    stack.push(Math.trunc(a / b))
                }
                
            }
            
        }
        return stack [0]
    }
}
