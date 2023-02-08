const isPalindrome = function(s) {
    const filteredStr = s
        .toUpperCase()
        .replace(/[^A-Z0-9]/gi, '');

    let left = 0;
    let right = filteredStr.length - 1;

    while (left < right) {
        if (filteredStr[left] !== filteredStr[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};