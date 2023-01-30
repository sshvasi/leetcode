class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        open_to_closed = {
            '(': ')',
            '[': ']',
            '{': '}'
        }

        for token in s:
            if token in open_to_closed:  # 1
                stack.append(token)
            elif len(stack) == 0 or token != open_to_closed[stack.pop()]:  # 2
                return False

        return len(stack) == 0  # 3

