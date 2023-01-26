const minSubArrayLen = (target, nums) => {
  let minLength = Infinity;
  let currentSum = 0;

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    currentSum += nums[right];

    // Пока подмассив «хороший», проверяем минимальную длину
    // и пытаемся её уменьшить, сдвигая левый указатель.
    while (currentSum >= target) {
      const currentLength = right - left + 1;
      minLength = Math.min(minLength, currentLength);

      currentSum -= nums[left];
      left++;
    }

    right++;
  }

  // Если не нашлось ни одного «хорошего» подмассива, возвращаем 0.
  // Иначе — минимальную длину подмассива.
  return minLength === Infinity ? 0 : minLength;
};