const insert = (intervals, newInterval) => {
    const beforeIntervals = [];

    const hasGap = ([, prevEnd], [currStart]) => prevEnd < currStart;
    const hasOverlap = ([prevStart,], [, currEnd]) => prevStart <= currEnd;

    let index = 0;

    while (
        index < intervals.length &&
        hasGap(intervals[index], newInterval)
    ) {
        beforeIntervals.push(intervals[index]);
        index++;
    }

    while (
        index < intervals.length &&
        hasOverlap(intervals[index], newInterval)
    ) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }

    const afterIntervals = intervals.slice(index);
    return [...beforeIntervals, newInterval, ...afterIntervals];
};
