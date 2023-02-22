const mergeTrees = (root1, root2) => {
  if (!root1 && !root2) return null

  const val1 = root1 ? root1.val : 0
  const val2 = root2 ? root2.val : 0

  const val = val1 + val2
  const root = new TreeNode(val)

  root.left = mergeTrees(root1?.left ?? null, root2?.left ?? null)
  root.right = mergeTrees(root1?.right ?? null, root2?.right ?? null)

  return root
}
