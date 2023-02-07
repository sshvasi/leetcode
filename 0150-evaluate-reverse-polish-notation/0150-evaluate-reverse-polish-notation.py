class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        values = []
        operations = {
            '+': lambda a, b: a + b,
            '-': lambda a, b: a - b,
            '*': lambda a, b: a * b,
            '/': lambda a, b: int(a / b)
        }

        for token in tokens:
            if token in operations:
                perform = operations[token]
                b, a = values.pop(), values.pop()
                values.append(perform(a, b))
            else:
                values.append(int(token))
        
        return values.pop()