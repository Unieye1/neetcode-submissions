class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];

        for (let i = 0; i < temperatures.length; i++) {
            let found = false;

            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[i] < temperatures[j]) {
                    result.push(j - i);
                    found = true;
                    break;
                }

            }
              if (found === false) {
            result.push(0);
        }
        }
      
        return result;

    }
}
