const sortedSquares = (nums) => {
  const n = nums.length;
  
  const squares = Array(n);
  
  let left = 0;
  let right = n - 1;

  for (let high = n - 1; high >= 0; high--) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      squares[high] = leftSquare;
      left++;
    } else {
      squares[high] = rightSquare;
      right--;
    }
  }

  return squares;
};