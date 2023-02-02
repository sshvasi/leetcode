class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        digits_sum = 0
        digits_product = 1

        number = n

        while number > 0:
            last_digit = number % 10
            digits_sum += last_digit
            digits_product *= last_digit
            number //= 10

        return digits_product - digits_sum
