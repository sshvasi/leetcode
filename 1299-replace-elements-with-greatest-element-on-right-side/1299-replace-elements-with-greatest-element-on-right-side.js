const replaceElements = (arr) => {
  let lastMax = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    [arr[i], lastMax] = [lastMax, Math.max(lastMax, arr[i])];
  }

  return arr;
};