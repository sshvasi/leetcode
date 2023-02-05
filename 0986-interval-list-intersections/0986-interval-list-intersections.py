class Solution:
    def intervalIntersection(self, first_list: List[List[int]], second_list: List[List[int]]) -> List[List[int]]:
        result = []

        n = len(first_list)
        m = len(second_list)

        i = 0
        j = 0

        while i < n and j < m:
            first_start, first_end = first_list[i]
            second_start, second_end = second_list[j]

            if first_start <= second_end and second_start <= first_end:
                result.append([
                    max(first_start, second_start),
                    min(first_end, second_end)
                ])

            if first_end < second_end:
                i += 1
            else:
                j += 1

        return result