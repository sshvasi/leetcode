const deleteDuplicates = (head) => {
  const sentinel = new ListNode(0, head);

  let prev = sentinel;
  let curr = sentinel.next;

  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      while (curr.next !== null && curr.val === curr.next.val) {
        curr = curr.next;
      }
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return sentinel.next;
};
