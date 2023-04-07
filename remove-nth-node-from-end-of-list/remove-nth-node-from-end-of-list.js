const removeNthFromEnd = (head, n) => {
  let right = head
  let left = head

  for (let i = 0; i < n; i++) {
    right = right.next
  }

  if (!right) return head.next

  while (right.next) {
    left = left.next
    right = right.next
  }

  left.next = left.next.next

  return head
};