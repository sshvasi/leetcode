const removeNthFromEnd = (head, n) => {
  const sentinel = new ListNode(0, head);

  let left = sentinel;
  let right = sentinel;

  for (let i = 0; i < n + 1; i++) {
    right = right.next;
  }

  while (right !== null) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return sentinel.next;
};