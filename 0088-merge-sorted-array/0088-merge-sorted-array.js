const merge = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = n + m - 1;

  while (j >= 0) {
    const isFirstGreater = nums1[i] > nums2[j];
    // nums1[k--] = isFirstGreater ? nums1[i--] : nums2[j--];
    if (i >= 0 && isFirstGreater) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }
};