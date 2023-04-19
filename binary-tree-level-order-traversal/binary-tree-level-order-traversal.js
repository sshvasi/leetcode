const levelOrder = (root) => {
  if (!root) return [];
  const values = [];
  const queue = [root];
  while (queue.length) {
    const level = [];
    for (let i = queue.length - 1; i >= 0; i--) {
      const node = queue.shift();

      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    values.push(level);
  }
  return values;
};
