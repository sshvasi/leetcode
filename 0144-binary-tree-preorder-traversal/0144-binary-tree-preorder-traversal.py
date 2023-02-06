class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        values = []
        stack = []

        current = root

        while current is not None or len(stack) > 0:
            if current is not None:
                values.append(current.val)
                stack.append(current)
                current = current.left
            else:
                last = stack.pop()
                current = last.right
        
        return values
