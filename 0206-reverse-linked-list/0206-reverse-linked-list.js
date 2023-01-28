const reverseList = (head) => {
  let previous = null;
  let current = head;

  while (current !== null) {
    const { next } = current;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};
