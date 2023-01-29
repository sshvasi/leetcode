class Solution:
    def pivotInteger(self, n: int) -> int:
        total_sum = n * (n + 1) // 2 
        left_sum = 0
        for num in range(n + 1):
            right_sum = total_sum - left_sum
            left_sum += num
            if left_sum == right_sum:
                return num
        return -1