const uncommonFromSentences = (s1, s2) => {
    const uncommonWords = [];
    const wordFrequencyMap = new Map();

    // Cчитаем суммарное число вхождений каждого слова в обе строки.
    for (const word of s1.split(' ')) {
        wordFrequencyMap.set(word, (wordFrequencyMap.get(word) ?? 0) + 1);
    }
    for (const word of s2.split(' ')) {
        wordFrequencyMap.set(word, (wordFrequencyMap.get(word) ?? 0) + 1);
    }

    // Оставляем только те слова, которые появлялись всего один раз.
    for (const [word, frequency] of wordFrequencyMap.entries()) {
        if (frequency === 1) uncommonWords.push(word);
    }

    return uncommonWords;
};