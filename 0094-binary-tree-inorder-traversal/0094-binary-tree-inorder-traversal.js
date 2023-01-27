const inorderTraversal = (root) => {
  const values = [];
  const stack = [];

  let current = root;

  while (current !== null || stack.length !== 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    const last = stack.pop();
    values.push(last.val);

    current = last.right;
  }

  return values;
};
