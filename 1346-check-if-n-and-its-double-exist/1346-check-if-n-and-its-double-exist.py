class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        seen = set()
        
        for num in arr:
            mult = num * 2
            quot = num / 2
            
            if mult in seen or quot in seen:
                return True
            
            seen.add(num)
        
        return False
        