class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        freq_count = {}

        for char in s:
            freq_count[char] = freq_count.get(char, 0) + 1

        for char in t:
            if char not in freq_count:
                return False

            freq_count[char] = freq_count.get(char) - 1
            if freq_count[char] == 0:
                del freq_count[char]

        return True
        