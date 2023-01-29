const subarraySum = (nums, k) => {
  const map = new Map([[0, 1]]);
  let total = 0;
  let sum = 0;

  for (const num of nums) {
    // Увеличиваем сумму.
    sum += num;

    // Если уже встречалась сумма равная sum[end] - k,
    // увеличиваем счётчик на то, сколько раз она встречалась.
    if (map.has(sum - k)) {
      total += map.get(sum - k);
    }

    // Записываем сумму.
    const count = map.get(sum) ?? 0;
    map.set(sum, count + 1);
  }

  return total;
};
