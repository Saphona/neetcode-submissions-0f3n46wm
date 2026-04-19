class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums) {
        let res=[];
        let bes=[];
        for(let a of nums  ){
            res.push(1);
        }
        for(let xyi of nums  ){
            bes.push(1);
        }
        for(let a=1; a<nums.length ;a++){
          res[a]= res[a-1]*nums[a-1]
        // this calculates Prefix  =  previous index * result array of previous index 
        } 
        for(let abu=nums.length -2 ; abu>=0 ;abu--){
          bes[abu]= bes[abu+1]*nums[abu+1]
        // this calculates Prefix  =  previous index * result array of previous index 
        } 
        let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(res[i] * bes[i]);
    }

    return ans;

    }




 }
