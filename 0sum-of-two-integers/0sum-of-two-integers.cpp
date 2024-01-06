class Solution {
public:
    // a ^ b        - sum without carry
    // (a & b) << 1 - carry without sum
    // stop when carry becomes zero, meaning we have nothing more to add
    // int getSum(int a, int b) { // use 'a' as a sum and 'b' as a carry
    //     return  b == 0 ? a : getSum(a ^ b, (a & b) << 1);
    // }
    int getSum(int a, int b) {
        while (b != 0) {
            int sum = a ^ b;
            int carry = (a & b) << 1;
            a = sum;
            b = carry;
        }

        return a;
    }
};
