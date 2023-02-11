const isValid = (s) => {
  const stack = []
  const openToClosed = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  const isStackEmpty = () => stack.length === 0

  for (const bracket of s) {
    const lastOpen = stack.at(-1)
    const isOpen = bracket in openToClosed
    const isClosedPair = !isStackEmpty()
      ? openToClosed[lastOpen] === bracket
      : null

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