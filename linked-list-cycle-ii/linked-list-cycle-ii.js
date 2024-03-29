const detectCycle = (head) => {
  let slow = head
  let fast = head
  let start = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      while (slow !== start) {
        slow = slow.next
        start = start.next
      }

      return start
    }
  }

  return null
}