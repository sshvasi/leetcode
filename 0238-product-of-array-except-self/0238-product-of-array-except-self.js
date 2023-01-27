const productExceptSelf = (nums) => {
  const n = nums.length;
  const result = Array(n).fill(1);

  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < n; i++) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};

// const productExceptSelf = (nums) => {
//   const result = [];
//   let prefix = 1;
//   let suffix = 1;

//   for (let i = 0; i < nums.length; i++) {
//     result[i] = prefix;
//     prefix *= nums[i];
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     result[i] *= suffix;
//     suffix *= nums[i];
//   }

//   return result;
// };