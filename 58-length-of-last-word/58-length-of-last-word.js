const lengthOfLastWord = (s) => {
  let lastWordLen = 0
  let currWordLen = 0

  for (const char of s) {
    if (char === ' ') {
      currWordLen = 0
    } else {
      currWordLen += 1
      lastWordLen = currWordLen
    }
  }

  return lastWordLen
}
