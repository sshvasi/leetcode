const diameterOfBinaryTree = (root) => {
  const maxDiameter = [0]

  dfs(root, maxDiameter)

  return maxDiameter[0]
}

const dfs = (node, maxDiameter) => {
  const isBaseCase = node === null
  if (isBaseCase) return 0

  const leftHeight = dfs(node.left, maxDiameter)
  const rightHeight = dfs(node.right, maxDiameter)

  const currentDiameter = leftHeight + rightHeight
  maxDiameter[0] = Math.max(maxDiameter[0], currentDiameter)

  const maxHeight = Math.max(leftHeight, rightHeight)

  return maxHeight + 1
}
