// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let orignalNode = head;
        const map = new Map();
        let copyHead = null
        let copyTail = null;
        while (orignalNode) {
            let copyNode = new Node(orignalNode.val)
            if (copyHead === null) {
                copyHead = copyNode;
                copyTail = copyNode;
            } else {
                copyTail.next = copyNode;
                copyTail = copyNode;
            }
            map.set(orignalNode, copyNode)
            orignalNode = orignalNode.next;

        }
        let copyNode = copyHead;
        orignalNode = head;
        while (orignalNode) {

            copyNode.random = map.get(orignalNode.random);
            copyNode = copyNode.next;
            orignalNode = orignalNode.next;
        }
        return copyHead
    }
}
