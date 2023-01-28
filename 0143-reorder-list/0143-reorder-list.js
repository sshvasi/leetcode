const reorderList = (head) => {
  let left = head;
  let right = reverse(mid(head));

  while (right.next !== null) {
    let next = left.next;
    left.next = right;
    left = next;

    next = right.next;
    right.next = left;
    right = next;
  }

  return head;
};

const mid = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const reverse = (head) => {
  let previous = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};
