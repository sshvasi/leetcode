const isSymmetric = (root) => {
  const stack = [[root.left, root.right]]
  
  while (stack.length > 0) {
    const [left, right] = stack.pop()
    
    if (!left && !right) continue
    if (!left || !right) return false
    if (left.val !== right.val) return false
    
    stack.push([left.left, right.right])
    stack.push([left.right, right.left])
  }
  
  return true
}
