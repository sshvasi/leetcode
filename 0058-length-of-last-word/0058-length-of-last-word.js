const lengthOfLastWord = (s) => {
  let lastWordLength = 0;
  let currentWordLength = 0;
  
  for (const char of s) {
    if (char === ' ') {
      currentWordLength = 0;
    } else {
      currentWordLength += 1;
      lastWordLength = currentWordLength;
    }
  }
  
  return lastWordLength;
};