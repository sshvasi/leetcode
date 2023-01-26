const deleteDuplicates = (head) => {
  const sentinel = new ListNode(0, head);

  let previous = sentinel;
  let current = sentinel.next;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      while (current.next !== null && current.val === current.next.val) {
        current = current.next;
      }

      previous.next = current.next;
    } else {
      previous = current;
    }

    current = current.next;
  }

  return sentinel.next;
};
