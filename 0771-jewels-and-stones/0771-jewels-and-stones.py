class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        total = 0
        
        pattern = set()
        
        for jewel in jewels:
            pattern.add(jewel)
        
        for stone in stones:
            if stone in pattern:
                total += 1
            
        return total
    