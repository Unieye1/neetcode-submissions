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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return null;
        const queue = [root]
        while (queue.length) {
            let curr = queue.shift();
            let tempRight = curr.right;
            let tempLeft = curr.left;
            curr.left = tempRight;
            curr.right = tempLeft;

            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }

        }
        return root
    }
}
