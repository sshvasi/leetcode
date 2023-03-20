const heightChecker = (heights) => {
  let counter = 0

  const expected = [...heights].sort((a, b) => a - b)

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      counter++
    }
  }

  return counter
}