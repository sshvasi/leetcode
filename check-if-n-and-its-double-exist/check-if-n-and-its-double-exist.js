const checkIfExist = (arr) => {
    const nums = new Set();

    for (const num of arr) {
        const mult = num * 2;
        const quotient = num / 2;

        if (nums.has(mult) || nums.has(quotient)) {
            return true;
        }

        nums.add(num);
    }

    return false;
};