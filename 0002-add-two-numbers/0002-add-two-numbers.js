/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const sentinel = new ListNode(0);

  let tail = sentinel;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const x = (l1 !== null) ? l1.val : 0;
    const y = (l2 !== null) ? l2.val : 0;
    const sum = x + y + carry;

    const val = sum % 10;
    carry = Math.floor(sum / 10);

    tail.next = new ListNode(val);
    tail = tail.next;

    l1 = (l1 !== null) ? l1.next : null;
    l2 = (l2 !== null) ? l2.next : null;
  }

  return sentinel.next;
};
