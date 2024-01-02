const string HEX = "0123456789abcdef";

class Solution {
public:
    string toHex(int num) {
      int count = 0;
      string hex = "";

      if (num == 0) {
        return "0";
      }

      while (num && count < 8) {
        hex = HEX[num & 0xf] + hex;
        num >>= 4;
        count++;
      }

      return hex;
    }
};