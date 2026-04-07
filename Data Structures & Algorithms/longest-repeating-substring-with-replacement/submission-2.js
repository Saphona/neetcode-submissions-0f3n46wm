class Solution {
    /**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 characterReplacement = (s, k) => {
    const count = {};
    let res = 0;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        //r is traversed and used as a index for string s 
        let wx=s[r];
        //for example A is taken in wx , in the code below for the object count +1 is done

        count[wx] = 1 + (count[wx] || 0);
        //







        // Check if the current window is invalid
        // Window length - count of most frequent char > k
        while ((r - l + 1) - Math.max(...Object.values(count)) > k) {
            let lx =s[l] ;
            count[lx] --;
            // Slide the window forward from the left
            l += 1;
        }

        // Update the maximum length found so far
        res = Math.max(res, r - l + 1);
    }

    return res;
};
}
