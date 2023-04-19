const hasPathSum = (root, targetSum) => {
  const check = (node, sum) => {
    if (!node) return false
    sum += node.val
    
    if (!node.left && !node.right && sum === targetSum) return true 

    return check(node.left, sum) || check(node.right, sum)
  }

  return check(root, 0)
}
