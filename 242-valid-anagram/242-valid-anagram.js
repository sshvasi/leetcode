const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false
  }

  const needs = new Map()
  for (const char of s) {
    needs.set(char, (needs.get(char) ?? 0) + 1)
  }

  for (const char of t) {
    if (!needs.has(char)) {
      return false
    }

    needs.set(char, needs.get(char) - 1)
    if (needs.get(char) === 0) {
      needs.delete(char)
    }
  }

  return true
};
