const oddEvenList = (head) => {
  if (!head) return null
  
  const evenHead = head.next

  let odd = head
  let even = evenHead

  while (even && even.next) {
    odd.next = even.next
    odd = odd.next

    even.next = odd.next
    even = even.next
  }

  odd.next = evenHead

  return head
}