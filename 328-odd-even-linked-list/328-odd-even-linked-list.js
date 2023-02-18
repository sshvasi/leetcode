const oddEvenList = (head) => {
  if (!head) return null
  
  let evenHead = head.next

  let odd = head
  let even = head.next

  while (even && even.next) {
    odd.next = even.next
    odd = odd.next

    even.next = odd.next
    even = even.next
  }

  odd.next = evenHead

  return head
}