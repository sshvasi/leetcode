class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        needs = {}
        window = {}
        match = 0
        contains = False
        left = 0
        right = 0

        for char in s1:
            needs[char] = needs.get(char, 0) + 1

        while right < len(s2):
            right_char = s2[right]
            if right_char in needs:
                window[right_char] = window.get(right_char, 0) + 1
                if window[right_char] == needs[right_char]:
                    match += 1

            while match == len(needs):
                if right - left + 1 == len(s1):
                    contains = True
                    break

                left_char = s2[left]
                if left_char in needs:
                    window[left_char] -= 1
                    if window[left_char] < needs[left_char]:
                        match -= 1

                left += 1

            right += 1

        return contains
