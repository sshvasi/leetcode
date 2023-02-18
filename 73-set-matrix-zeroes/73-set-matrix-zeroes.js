const setZeroes = (matrix) => {
  const [rowsSize, colsSize] = [matrix.length, matrix[0].length]

  let firstCol = -1

  for (let row = 0; row < rowsSize; row++) {
    if (matrix[row][0] === 0) {
      firstCol = 0
    }

    for (let col = 1; col < colsSize; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0
        matrix[row][0] = 0
      }
    }
  }

  for (let row = 1; row < rowsSize; row++) {
    for (let col = 1; col < colsSize; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let col = 0; col < colsSize; col++) {
      matrix[0][col] = 0
    }
  }

  if (firstCol === 0) {
    for (let row = 0; row < rowsSize; row++) {
      matrix[row][0] = 0
    }
  }
}