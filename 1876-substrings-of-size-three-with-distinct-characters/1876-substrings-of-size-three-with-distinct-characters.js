const countGoodSubstrings = function(s) {
  const counter = new Map()

  let total = 0
  
  let left = 0
  let right = 0

  while (right < s.length) {
    counter.set(s[right], (counter.get(s[right]) ?? 0) + 1)

    if (right - left + 1 === 3) {
      if (counter.size === 3) total++

      counter.set(s[left], counter.get(s[left]) - 1)
      if (counter.get(s[left]) === 0) counter.delete(s[left])

      left++
    }

    right++
  }

  return total
}