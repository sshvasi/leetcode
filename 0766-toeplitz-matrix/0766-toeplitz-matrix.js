const isToeplitzMatrix = (matrix) => {
    const n = matrix.length;
    const m = matrix[0].length;

    for (let r = 1; r < n; r++) {
        for (let c = 1; c < m; c++) {
            if (matrix[r][c] !== matrix[r - 1][c - 1]) {
                return false;
            }
        }
    }

    return true;
};