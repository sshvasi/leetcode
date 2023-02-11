const isValid = (s) => {
  const stack = []
  const openToClosed = {
    '(': ')',
    '[': ']',
    '{': '}',
    empty: '-'
  }

  const isStackEmpty = () => stack.length === 0

  for (const bracket of s) {
    const isOpen = bracket in openToClosed
    const lastOpen = !isStackEmpty() ? stack.at(-1) : 'empty'
    const isClosedPair = openToClosed[lastOpen] === bracket

    if (isOpen) {
      stack.push(bracket)
    } else if (isClosedPair) {
      stack.pop()
    } else {
      return false
    }
  }

  return isStackEmpty()
}