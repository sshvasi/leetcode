class Solution:
    def inorderTraversal(self, root):
        values = []
        stack = []

        current = root

        while current is not None or len(stack) > 0:
            if current is not None:
                stack.append(current)
                current = current.left
            else:
                last = stack.pop()
                values.append(last.val)
                current = last.right

        return values
