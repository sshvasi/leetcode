const rotate = (matrix) => {
    transpose(matrix);
    reflect(matrix);
};

const transpose = (matrix, n = matrix.length) => {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [
                matrix[i][j],
                matrix[j][i]
            ] = [
                matrix[j][i],
                matrix[i][j]
            ];
        }
    }
};

const reflect = (matrix, n = matrix.length) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            [
                matrix[i][j],
                matrix[i][n - j - 1]
            ] = [
                matrix[i][n - j - 1],
                matrix[i][j]
            ];
        }
    }
};

// const rotate = (matrix) => {
//     let left = 0;
//     let right = matrix.length - 1;

//     while (left < right) {
//         for (let i = 0; i < right - left; i++) {
//             let top = left;
//             let bottom = right;

//             let leftTop = matrix[top][left + i];

//             matrix[top][left + i] = matrix[bottom - i][left];
//             matrix[bottom - i][left] = matrix[bottom][right - i];
//             matrix[bottom][right - i] = matrix[top + i][right];
//             matrix[top + i][right] = leftTop;
//         }

//         left++;
//         right--;
//     }
// };