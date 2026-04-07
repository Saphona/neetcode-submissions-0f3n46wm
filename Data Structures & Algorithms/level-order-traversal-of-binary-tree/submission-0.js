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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res=[];
        function dfs(val,level){
            if(val==null)return;

            if(res.length===level){
                res.push([]);
                }

            res[level].push(val.val);
            dfs(val.left,level+1);
            dfs(val.right,level+1);

        }
        dfs(root,0);
        return res;


              
            
        }
    }

