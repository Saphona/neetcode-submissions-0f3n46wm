class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let a1;
        let b1;
        for(let a=0;a< nums.length; a++ ){
            a1=nums[a];
            for(let b=a+1; b< nums.length; b++){
                b1=nums[b];
                if ((a1+b1)==target){
                    return [a,b];

                }
            }
        }
        
    }
}
