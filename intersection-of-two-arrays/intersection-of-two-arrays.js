const intersection = (nums1, nums2) => {
  const result = []
  const set = new Set()

  for (const num of nums1) {
    set.add(num)
  }

  for (const num of nums2) {
    if (set.has(num)) {
      result.push(num)
      set.delete(num)
    }
  }

  return result
}
