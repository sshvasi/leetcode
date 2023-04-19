function countUnivalSubtrees(root) {
  let count = 0;

  dfs(root, 0)

  return count;

  function dfs(node, val) {
    if (!node) return true;

    const isLeftValid = dfs(node.left, node.val);
    const isRightValid = dfs(node.right, node.val);

    if (!isLeftValid || !isRightValid) return false;

    count++;

    return node.val === val;
  }
}