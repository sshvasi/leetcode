class Solution:
    def trap(self, height: List[int]) -> int:
        stored_water = 0 

        left_max = 0
        right_max = 0

        left = 0
        right = len(height) - 1

        while left < right:
            if height[left] < height[right]:
                if height[left] < left_max:
                    stored_water += left_max - height[left]
                else:
                    left_max = height[left]
                left += 1
            else:
                if height[right] < right_max:
                    stored_water += right_max - height[right]
                else:
                    right_max = height[right]
                right -= 1

        return stored_water
