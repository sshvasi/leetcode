const maxLevelSum = (root) => {
  if (root === null) return []

  let curLevel = 1
  let maxLevel = 1
  let maxSum = -Infinity

  const queue = [root]

  while (queue.length !== 0) {
    let levelSum = 0

    for (let i = queue.length - 1; i >= 0; i--) {
      const node = queue.shift()

      levelSum += node.val

      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }

    if (levelSum > maxSum) {
      maxSum = levelSum
      maxLevel = curLevel
    }

    curLevel++
  }

  return maxLevel
}