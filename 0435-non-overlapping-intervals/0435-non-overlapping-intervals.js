const eraseOverlapIntervals = (intervals) => {
    intervals.sort(([startA, endA], [startB, endB]) =>
        endA !== endB ? endA - endB : startA - startB
    );

    let countToRemove = 0;
    let lastEnd = -Infinity;

    for (const [start, end] of intervals) {
        if (lastEnd <= start) {
            lastEnd = end;
        } else {
            countToRemove++;
            lastEnd = Math.min(lastEnd, end);
        }
    }

    return countToRemove;
};