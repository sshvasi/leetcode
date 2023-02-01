/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefix = [0];
    for (let i = 1; i < nums.length + 1; i++) {
        this.prefix[i] = this.prefix[i - 1] + nums[i - 1]; 
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */