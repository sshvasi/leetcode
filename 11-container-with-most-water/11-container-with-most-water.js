const maxArea = (height) => {
  let maxArea = 0
  
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const curHeight = Math.min(height[left], height[right])
    const curWidth = right - left
    const curArea = curHeight * curWidth

    maxArea = Math.max(maxArea, curArea)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
};

