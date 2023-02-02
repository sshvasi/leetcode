class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        total = 0
        product = 1
        left = 0
        right = 0
        while right < len(nums):
            product *= nums[right]
            right += 1
            while product >= k:
                product /= nums[left]
                left += 1
            total += right - left
        return total
