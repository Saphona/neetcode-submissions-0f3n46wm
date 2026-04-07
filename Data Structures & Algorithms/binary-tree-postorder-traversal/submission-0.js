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
    postorderTraversal(root) {
        let res=[];

        function dfs(val){
            if(!val) return;

            dfs(val.left);
            dfs(val.right);
            res.push(val.val)
        }
        dfs(root);
        return res;


    }
}
