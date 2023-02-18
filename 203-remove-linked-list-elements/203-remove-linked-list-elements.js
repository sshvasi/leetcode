const removeElements = (head, val) => {
  const sentinel = new ListNode(0, head)

  let slow = sentinel

  while (slow) {
    let fast = slow.next

    while (fast && fast.val === val) {
      fast = fast.next
    }

    slow.next = fast
    slow = fast
  }

  return sentinel.next
};