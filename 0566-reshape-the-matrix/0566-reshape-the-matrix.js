const matrixReshape = (mat, r, c) => {
    const reshapedMat = Array
        .from({ length: r })
        .map(() => Array.from({ length : c }));

    const n = mat.length;
    const m = mat[0].length;

    if (n * m !== r * c) return mat;

    for (let i = 0; i < n * m; i++) {
        reshapedMat[Math.floor(i / c)][i % c] = mat[Math.floor(i / m)][i % m];
    }

    return reshapedMat;
};