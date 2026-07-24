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
       if (!root) return null;

        const queue = [root];

        while (queue.length) {
            let curr = queue.shift();

            // Swap left and right children
            let temp = curr.left;
            curr.left = curr.right;
            curr.right = temp;

            // Push non-null children to the queue to process lower levels
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        return root;
    }
}
