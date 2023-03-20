const replaceElements = (arr) => {
  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let num = arr[i];
    arr[i] = max;
    max = Math.max(num, max);
  }

  return arr;
};