class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        basket = {}
        max_picked = 0
        left = 0

        for right, fruit in enumerate(fruits):
            # добавляем фрукт под правым указателем
            basket[fruit] = basket.get(fruit, 0) + 1

            # пока типов фруктов больше, чем нужно
            while len(basket) > 2:
                # удаляем фрукт под левым указателем
                basket[fruits[left]] -= 1

                # удаляем запись, если фруктов этого типа не осталось
                if basket[fruits[left]] == 0:
                    del basket[fruits[left]]

                # cдвигаем левый указатель
                left += 1

            # обновляем максимум
            max_picked = max(max_picked, right - left + 1)

        return max_picked