class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        rows_len = len(matrix)
        cols_len = len(matrix[0])
        first_col = -1

        for r in range(rows_len):
            if matrix[r][0] == 0:
                first_col = 0

            for c in range(1, cols_len):
                if matrix[r][c] == 0:
                    matrix[r][0] = 0
                    matrix[0][c] = 0

        for r in range(1, rows_len):
            for c in range(1, cols_len):
                if matrix[r][0] == 0 or matrix[0][c] == 0:
                    matrix[r][c] = 0

        if matrix[0][0] == 0:
            for c in range(cols_len):
                matrix[0][c] = 0

        if first_col == 0:
            for r in range(rows_len):
                matrix[r][0] = 0
