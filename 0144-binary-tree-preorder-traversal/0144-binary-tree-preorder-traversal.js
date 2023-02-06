const preorderTraversal = (root) => {
    const values = [];
    const stack = [];

    let current = root;

    while (current !== null || stack.length !== 0) {
        if (current !== null) {
            values.push(current.val);
            stack.push(current);
            current = current.left;
        } else {
            const last = stack.pop();
            current = last.right;
        }
    }

    return values;
};