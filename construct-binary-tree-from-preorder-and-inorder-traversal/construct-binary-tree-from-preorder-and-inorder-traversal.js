const buildTree = (preorder, inorder) => {
  const inorderIndexMap = inorder.reduce(
    (map, val, i) => map.set(val, i),
    new Map()
  )
  let preorderIndex = 0

  const handle = (left, right) => {
    if (left > right) return null

    const rootValue = preorder[preorderIndex]
    const root = new TreeNode(rootValue)

    preorderIndex++

    root.left = handle(left, inorderIndexMap.get(rootValue) - 1)
    root.right = handle(inorderIndexMap.get(rootValue) + 1, right)

    return root
  }

  return handle(0, inorder.length - 1)
}
