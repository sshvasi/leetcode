const rotateRight = (head, k) => {
  if (!head || !head.next) return head

  let oldTail = head
  let newTail = head
  let n = 1
  
  while (oldTail.next) {
    oldTail = oldTail.next
    n++
  }

  oldTail.next = head

  for (let i = 0; i < n - (k % n) - 1; i++) {
    newTail = newTail.next
  }

  const newHead = newTail.next
  newTail.next = null

  return newHead
}