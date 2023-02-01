const characterReplacement = (s, k) => {
    const counter = new Map();

    let maxFrequency = 0;
    let maxLength = 0;

    let start = 0;
    let end = 0;

    while (end < s.length) {
        counter.set(s[end], (counter.get(s[end]) ?? 0) + 1);
        maxFrequency = Math.max(maxFrequency, counter.get(s[end]));

        while (end - start + 1 - maxFrequency > k) {
            counter.set(s[start], counter.get(s[start]) - 1);
            start++;
        }

        maxLength = Math.max(maxLength, end - start + 1);
        end++;
    }

    return maxLength;
};