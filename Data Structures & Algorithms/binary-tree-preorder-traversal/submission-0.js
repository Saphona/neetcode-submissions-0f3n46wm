/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {


        let res=[];

        function dfs(val){
            if(val) {
            res.push(val.val)
            dfs(val.left);
            dfs(val.right);
            }
        }
        dfs(root);
        return res;


    }
    
}
