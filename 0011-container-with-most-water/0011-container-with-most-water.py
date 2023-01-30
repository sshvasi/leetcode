class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area = 0
        left = 0
        right = len(height) - 1

        while left < right:
            # вычисляем площадь текущего контейнера
            # в качестве его высоты используем высоту более низкой линии
            cur_width = right - left
            cur_height = min(height[left], height[right])
            cur_area = cur_width * cur_height

            # проверяем, больше ли текущая площадь максимальной
            max_area = max(max_area, cur_area)

            # сдвигаем указатель с более низкой линией, чтобы получить площадь больше
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return max_area

