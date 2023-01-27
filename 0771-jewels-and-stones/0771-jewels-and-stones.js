const numJewelsInStones = (jewels, stones) => {
  let total = 0;

  const map = new Map();

  for (const jewel of jewels) {
    const count = map.get(jewel) ?? 0;
    map.set(jewel, count + 1);
  }

  for (const stone of stones) {
    if (map.has(stone)) {
      total++;
    }
  }

  return total;
};