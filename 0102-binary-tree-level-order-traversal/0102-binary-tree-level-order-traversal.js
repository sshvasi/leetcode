const levelOrder = (root) => {
    const levels = [];

    dfs(root, levels, 0);

    return levels;
};

const dfs = (node, levels, level) => {
    const isBaseCase = node === null;
    if (isBaseCase) return;

    const isFirstNode = level === levels.length;
    if (isFirstNode) levels.push([]);

    levels[level].push(node.val);

    dfs(node.left, levels, level + 1);
    dfs(node.right, levels, level + 1);
};
