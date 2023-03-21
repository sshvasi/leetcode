const reverseString = (s) => {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    const t = s[l];
    s[l] = s[r];
    s[r] = t;

    l++;
    r--;
  }

  return s;
};