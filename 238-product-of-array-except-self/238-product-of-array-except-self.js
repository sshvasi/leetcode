const productExceptSelf = (nums) => {
  const n = nums.length
  const products = []

  let prefix = 1
  let suffix = 1

  for (let i = 0; i < n; i++) {
    products[i] = prefix
    prefix *= nums[i]
  }

  for (let i = (n - 1); i >= 0; i--) {
    products[i] *= suffix
    suffix *= nums[i]
  }

  return products
}