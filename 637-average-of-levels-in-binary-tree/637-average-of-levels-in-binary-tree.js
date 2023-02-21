const averageOfLevels = function(root) {
  if (root === null) return []

  const result = []
  const queue = [root]

  while (queue.length > 0) {
    let levelSize = queue.length
    let levelSum = 0

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()

      levelSum += node.val

      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }

    result.push(levelSum / levelSize)
  }

  return result
};