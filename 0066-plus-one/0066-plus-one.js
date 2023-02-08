const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
          digits[i]++;
          return digits;
        }

        digits[i] = 0;
    }

    const updatedDigits = Array(digits.length + 1).fill(0);
    updatedDigits[0] = 1;

    return updatedDigits;
};