const checkInclusion = (s1, s2) => {
  const needs = new Map();
  const window = new Map();

  let match = 0;
  let contains = false;

  let left = 0;
  let right = 0;

  for (const char of s1) {
    const count = needs.get(char) ?? 0;
    needs.set(char, count + 1);
  }

  while (right < s2.length) {
    const rightChar = s2[right];
    if (needs.has(rightChar)) {
      const count = window.get(rightChar) ?? 0;
      window.set(rightChar, count + 1);

      if (window.get(rightChar) === needs.get(rightChar)) {
        match++;
      }
    }

    while (match === needs.size) {
      const windowLen = right - left + 1;
      if (windowLen === s1.length) {
        contains = true;
      }

      const leftChar = s2[left];
      if (needs.has(leftChar)) {
        const count = window.get(leftChar);
        window.set(leftChar, count - 1);

        if (window.get(leftChar) < needs.get(leftChar)) {
          match--;
        }
      }

      left++;
    }

    right++;
  }

  return contains;
};