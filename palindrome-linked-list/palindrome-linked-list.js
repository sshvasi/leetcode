const isPalindrome = (head) => {
  let left = head
  let right = reverse(mid(head))

  while (left && right) {
    if (left.val !== right.val) {
      return false
    }

    left = left.next
    right = right.next
  }

  return true
}

const mid = (head) => {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

const reverse = (head) => {
  let next = null
  let curr = head
  let prev = null

  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}