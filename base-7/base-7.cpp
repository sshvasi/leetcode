class Solution {
public:
  string convertToBase7(int num) {
      int divisor = 7;
      int quotient = abs(num);
      int remainder;
      string str;

      if (num == 0) {
        return "0";
      }

      while (quotient > 0) {
        remainder = quotient % divisor;
        quotient /= divisor;
        str = to_string(remainder) + str;
      }

      return num < 0 ? "-" + str : str;
  }
};