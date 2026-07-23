class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let result = 0;
         let hours = 0 ;
          let L = 1; 
        let R = Math.max(...piles)
        while(L<=R){
            let k = Math.floor((R+L)/2);
            let totalHours = 0;
            for(let i=0;i<piles.length;i++){
              hours=  Math.ceil(piles[i]/k);
              totalHours += hours;
            }
             if(totalHours>h){
                L=k+1;
              }
              else{
                result = k
                R= k-1
              }
        }return result
    }
}
