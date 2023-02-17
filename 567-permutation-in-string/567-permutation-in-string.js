const checkInclusion = (s1, s2) => {
  const needs = new Map()
  const window = new Map()

  let match = 0
  let left = 0
  let right = 0

  for (const char of s1) {
    needs.set(char, (needs.get(char) ?? 0) + 1)
  }

  while (right < s2.length) {
    if (needs.has(s2[right])) {
      window.set(s2[right], (window.get(s2[right]) ?? 0) + 1)

      if (window.get(s2[right]) === needs.get(s2[right])) {
        match++
      }
    }

    while (match === needs.size) {
      if (right - left + 1 === s1.length) {
        return true
      }

      if (needs.has(s2[left])) {
        window.set(s2[left], window.get(s2[left]) - 1)

        if (window.get(s2[left]) < needs.get(s2[left])) {
          match--
        }
      }

      left++
    }

    right++
  }

  return false
};