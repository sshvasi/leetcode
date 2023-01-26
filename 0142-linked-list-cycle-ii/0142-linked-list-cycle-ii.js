const detectCycle = (head) => {
  let slow = head;
  let fast = head;
  let entry = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      while (entry !== slow) {
        entry = entry.next;
        slow = slow.next;
      }
      
      return entry;
    }
  }

  return null;
};
