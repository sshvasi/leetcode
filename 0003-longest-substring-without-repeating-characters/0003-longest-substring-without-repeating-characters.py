class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # хэш-таблица для подсчёта символов
        chars = Counter()

        # максимальная длина «хорошей» подстроки
        max_len = 0

        # указатели
        left = 0
        right = 0

        while right < len(s):
            # добавляем символ под правым указателем
            chars[s[right]] += 1

            # если такой символ уже встречался, удаляем символ под левым указателем,
            # чтобы подстрока стала «хорошей»
            while chars[s[right]] > 1:
                chars[s[left]] -= 1
                left += 1

            # обновляем максимальную длину «хорошей» подстроки
            max_len = max(max_len, right - left + 1)

            right += 1

        return max_len
