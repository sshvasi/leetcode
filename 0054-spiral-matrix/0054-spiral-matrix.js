const spiralOrder = (matrix) => {
  const result = [];
  
  const [rowsSize, colsSize] = [matrix.length - 1, matrix[0].length - 1];
  let [left, right, top, bottom] = [0, colsSize, 0, rowsSize];

  const isInBounds = () => ((left <= right) && (top <= bottom));

  while (isInBounds()) {
    addTop({ matrix, result, left, right, top });
    top++;

    addRight({ matrix, result, right, top, bottom });
    right--;

    if (!isInBounds()) break;

    addBottom({ matrix, result, left, right, bottom });
    bottom--;

    addLeft({ matrix, result, left, top, bottom });
    left++;
  }

  return result;
};

const addTop = ({ matrix, result, left, right, top }) => {
  for (let col = left; col <= right; col++) {
    result.push(matrix[top][col]);
  }
};

const addRight = ({ matrix, result, right, top, bottom }) => {
  for (let row = top; row <= bottom; row++) {
    result.push(matrix[row][right]);
  }
};

const addBottom = ({ matrix, result, left, right, bottom }) => {
  for (let col = right; col >= left; col--) {
    result.push(matrix[bottom][col]);
  }
};

const addLeft = ({ matrix, result, left, top, bottom }) => {
  for (let row = bottom; row >= top; row--) {
    result.push(matrix[row][left]);
  }
};
