/**
 * Перебор всех узлов, доп. память для стека вызовов.
 * 
 * Time: O(N) | Space: O(H)
 */
const maxDepth = (root) => {
  // Базовый случай. Глубина пустого узла равна 0.
  if (root === null) return 0

  const ROOT_LEVEL = 1

  const maxLeftDepth = maxDepth(root.left)
  const maxRightDepth = maxDepth(root.right)

  const depth = Math.max(maxLeftDepth, maxRightDepth)

  return depth + ROOT_LEVEL
}