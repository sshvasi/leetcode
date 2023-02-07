const setZeroes = function(matrix) {
    const isFirstColZero = setEdgesToZero(matrix);
    const isFirstRowZero = matrix[0][0] === 0;

    setCellsZero(matrix);

    if (isFirstRowZero) setFirstRowZero(matrix);
    if (isFirstColZero) setFirstColZero(matrix);

    return matrix; 
};

const setEdgesToZero = (matrix) => {
    const [rowsSize, colsSize] = [matrix.length, matrix[0].length];

    let isFirstColZero = false;

    for (let r = 0; r < rowsSize; r++) {
        if (matrix[r][0] === 0) isFirstColZero = true;

        for (let c = 1; c < colsSize; c++) {
            if (matrix[r][c] === 0) {
                matrix[0][c] = 0;
                matrix[r][0] = 0;
            }
        }
    }

    return isFirstColZero;
};

const setCellsZero = (matrix) => {
    const [rowsSize, colsSize] = [matrix.length, matrix[0].length];

    for (let r = 1; r < rowsSize; r++) {
        for (let c = 1; c < colsSize; c++) {
            if (matrix[0][c] === 0 || matrix[r][0] === 0) {
                matrix[r][c] = 0;
            }
        }
    }
};

const setFirstColZero = (matrix, rowsSize = matrix.length) => {
    for (let r = 0; r < rowsSize; r++) {
        matrix[r][0] = 0;
    }
};

const setFirstRowZero = (matrix, colsSize = matrix[0].length) => {
    for (let c = 0; c < colsSize; c++) {
        matrix[0][c] = 0;
    }
};