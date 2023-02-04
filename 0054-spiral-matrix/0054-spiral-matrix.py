class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        left, right = 0, len(matrix[0]) - 1
        top, bottom = 0, len(matrix) - 1
        result = []

        while left < right and top < bottom:
            for col in range(left, right):
                result.append(matrix[top][col])

            for row in range(top, bottom):
                result.append(matrix[row][right])

            for col in range(right, left, -1):
                result.append(matrix[bottom][col])

            for row in range(bottom, top, -1):
                result.append(matrix[row][left])

            left += 1
            right -= 1
            top += 1
            bottom -= 1

        for row in range(top, bottom + 1):
            for col in range(left, right + 1):
                result.append(matrix[row][col])

        return result