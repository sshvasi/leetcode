const checkInclusion = (s1, s2) => {
  const needs = new Map();
  const window = new Map();

  let left = 0;
  let right = 0;
  let match = 0;
  let contains = false;

  for (const char of s1) {
    const count = needs.get(char) ?? 0;
    needs.set(char, count + 1);
  }

  while (right < s2.length) {
    if (needs.has(s2[right])) {
      const count = window.get(s2[right]) ?? 0;
      window.set(s2[right], count + 1);

      if (window.get(s2[right]) === needs.get(s2[right])) {
        match++;
      }
    }

    while (match === needs.size) {
      if (right - left + 1 === s1.length) {
        contains = true;
      }

      const count = window.get(s2[left]);
      window.set(s2[left], count - 1);
      
      if (window.get(s2[left]) < needs.get(s2[left])) {
        match--;
      }

      left++;
    }

    right++;
  }

  return contains;
};