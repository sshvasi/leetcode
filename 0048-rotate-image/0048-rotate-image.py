class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        self.transpose(matrix)
        self.reflect(matrix)

    @staticmethod
    def transpose(matrix):
        for i, row in enumerate(matrix):
            for j in range(i + 1, len(row)):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    @staticmethod
    def reflect(matrix):
        for i, row in enumerate(matrix):
            for j in range(len(row) // 2):
                matrix[i][j], matrix[i][-j-1] = matrix[i][-j-1], matrix[i][j]       