/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
 let fast = head;
  while (fast && fast.next) {
    head = head.next; //0 1 2
    fast = fast.next.next; //1 2

    if (head === fast) return true;
  }
  return false;
};