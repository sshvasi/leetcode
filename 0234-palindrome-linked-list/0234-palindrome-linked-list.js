const isPalindrome = (head) => {
  let left = head;
  let right = reverse(mid(head));

  while (right !== null) {
    if (left.val !== right.val) {
      return false;
    }

    left = left.next;
    right = right.next;
  }

  return true;
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
    const { next } = current;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};