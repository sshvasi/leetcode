class NumArray:
    def __init__(self, nums):
        self.prefix_sums = [0] * (len(nums) + 1)

        for i in range(1, len(nums) + 1):
            self.prefix_sums[i] = self.prefix_sums[i-1] + nums[i-1]

    def sumRange(self, left, right):
        return self.prefix_sums[right+1] - self.prefix_sums[left]        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)