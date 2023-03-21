const addTwoNumbers = (l1, l2) => {
  const sentinel = new ListNode()

  let tail = sentinel
  let curr1 = l1
  let curr2 = l2
  let carry = 0

  while (curr1 || curr2 || carry) {
    const val1 = curr1?.val ?? 0
    const val2 = curr2?.val ?? 0
    const sum = val1 + val2 + carry

    carry = Math.floor(sum / 10)
    const val = sum % 10

    tail.next = new ListNode(val)

    tail = tail.next
    curr1 = curr1?.next ?? null
    curr2 = curr2?.next ?? null
  }

  return sentinel.next
}