const intervalIntersection = (firstList, secondList) => {
  const intersection = []

  let firstIdx = 0
  let secondIdx = 0

  while (firstIdx < firstList.length && secondIdx < secondList.length) {
    const [firstStart, firstEnd] = firstList[firstIdx]
    const [secondStart, secondEnd] = secondList[secondIdx]

    if (firstStart <= secondEnd && secondStart <= firstEnd) {
      intersection.push([
        Math.max(firstStart, secondStart),
        Math.min(firstEnd, secondEnd)
      ])
    }

    if (firstEnd < secondEnd) {
      firstIdx++
    } else {
      secondIdx++
    }
  }

  return intersection
};