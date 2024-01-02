class Solution {
public:
    // int hammingWeight(uint32_t n) {
    //   int bits = 0;
    //   int mask = 1;

    //   for (int i = 0; i < 32; i++) {
    //     if (n & mask) bits++;
    //     mask <<= 1;
    //   }

    //   return bits;
    // }
    int hammingWeight(uint32_t n) {
      int bits = 0;

      while (n > 0) {
        bits++;
        n &= (n - 1);
      }

      return bits;
    }
};
