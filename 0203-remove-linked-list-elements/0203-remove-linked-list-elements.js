const removeElements = (head, val) => {
  const sentinel = new ListNode(0, head);

  let previous = sentinel;
  let current = head;

  while (current !== null) {
    if (current.val === val) {
      previous.next = current.next;
    } else {
      previous = current;
    }

    current = current.next;
  }

  return sentinel.next;
};
