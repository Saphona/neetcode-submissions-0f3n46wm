class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
   let count = {};
   let freq=[];
   for(let b of nums){
    freq.push([])
   }
    freq.push([])
   for(let a=0; a<nums.length ; a++){
    let n=nums[a];
    count[n]=(count[n]|| 0)+1;
   }
   for(let x in count){
    freq[count[x]].push(parseInt(x))
    
   }
   let res=[];
   for(let p=freq.length-1;p>0;p--){
    for(let yx of freq[p] ){
        res.push(yx);
        if(res.length==k){
            return res
        }
        

    }

    

   }
   return res;

   
   
    }
}
// mistakes here return "res" in if(res.length==k) conndition
// p=freq.length-1 (putting minus one)
