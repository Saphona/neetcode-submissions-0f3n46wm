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
   
    rightSideView(root) {
    let res=[];
        function dfs(node, level) {
    if (node == null) return;

    if (level == res.length)
    // the trick is here in this if statement because res.length increases and when the left node is 
    // is checked after right node, the level goes back to 0 and but res.len has inc due to addition of  
    // right side node understand
     {
        res.push(node.val);
    }

    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
}

dfs(root,0)
return res;
}}
