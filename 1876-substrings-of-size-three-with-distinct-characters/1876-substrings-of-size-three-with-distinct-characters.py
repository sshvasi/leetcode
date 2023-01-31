class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        # счётчик для символов
        chars = Counter()
        
        # число «хороших» подстрок
        total = 0
        
        # указатели
        left = 0
        right = 0
        
        while right < len(s):
            # добавляем символ под правым указателем
            chars[s[right]] += 1
            
            # если длина подстроки равна трём
            if right - left + 1 == 3:
                # и если число разных символов равно трём
                # (если меньше, значит были дубли, а больше быть не может)
                if len(chars) == 3:
                    # значит подстрока «хорошая»
                    total += 1
                    
                # удаляем символ под левым указателем
                chars[s[left]] -= 1
                if chars[s[left]] == 0:
                    del chars[s[left]]
                left += 1
            
            right += 1
                
        return total
