/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head;
        let length = 0 ;
        while(curr){
            curr = curr.next;
            length++
        }
        
        let prev =head
        if (n=== length){
            return head.next
        }
        for(let i=0;i<length-n-1;i++){
            
            prev= prev.next
        }
        let removeNode = prev.next
        prev.next = removeNode.next
        return head
    }
}
