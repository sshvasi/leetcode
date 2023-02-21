const totalFruit = (fruits) => {
  const basket = new Map();
  
  let maxPicked = 0;
  let left = 0;

  for (let right = 0; right < fruits.length; right++) {
    basket.set(fruits[right], (basket.get(fruits[right]) ?? 0) + 1);

    while (basket.size > 2) {
      basket.set(fruits[left], basket.get(fruits[left]) - 1);
      if (basket.get(fruits[left]) === 0) {
        basket.delete(fruits[left]);
      }

      left++;
    }

    const nowPicked = right - left + 1;
    maxPicked = Math.max(maxPicked, nowPicked);
  }

  return maxPicked;
};