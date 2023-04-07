const copyRandomList = (head) => {
  if (!head) return null

  let curr = head
  let copy = new Node(curr.val)

  const seen = new Map([[curr, copy]])

  const getClone = (node) => {
    if (!node) return null
    if (!seen.has(node)) seen.set(node, new Node(node.val))
    return seen.get(node)
  }

  while (curr) {
    copy.random = getClone(curr.random)
    copy.next = getClone(curr.next)

    curr = curr.next
    copy = copy.next
  }

  return seen.get(head)
}
