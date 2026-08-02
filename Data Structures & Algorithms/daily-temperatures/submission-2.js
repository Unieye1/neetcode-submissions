class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = [];
        for (let i = 0; i < temperatures.length; i++) {

            while (stack.length > 0) {
                if (temperatures[i] > temperatures[stack[stack.length - 1]]) {
                    result[stack[stack.length - 1]] = i - stack[stack.length - 1];
                    stack.pop();
                }
                else break;
            }
            stack.push(i);


        }
        while (stack.length != 0) {
            result[stack[stack.length - 1]] = 0;
            stack.pop();
        }
        return result;
    }
}
