class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    let count={};
    let indexisthecount=[];
// in for objects returns string and of for values
    for (let a of nums){
        indexisthecount.push([]);
    }
    indexisthecount.push([]);
    for(let b of nums){
        count[b]=(count[b] ||0) +1;
    }
    for(let c in count){
        indexisthecount[count[c]].push(parseInt(c)) ;
        // where x is count of y
    }
    let res=[];
    for(let i= indexisthecount.length -1  ; i>=0 ; i--){
        for( let a of indexisthecount[i]){
            res.push(a)
        }
        if (res.length === k) {
                    return res;
                }
    }
// what i learnt from this sum
// of is for values only data type and returns orginal value
// in is for object value type ; returns string (parseInt())

// indexisthecount[i] will return empty array [] 
// empty array is truthy , so use for a in loop on indexisthecount[i] 
// to get values out 
















































$0
    }
}
