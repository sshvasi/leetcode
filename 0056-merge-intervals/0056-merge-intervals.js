const merge = (intervals) => {
    const merged = []

    intervals.sort(([startA], [startB]) => startA - startB)


    for (const [start, end] of intervals) {
        if (merged.length === 0 || merged.at(-1)[1] < start) {
            merged.push([start, end])
        } else {
            merged.at(-1)[1] = Math.max(merged.at(-1)[1], end)
        }
    }

    return merged
};