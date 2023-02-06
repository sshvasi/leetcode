class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        last_max = -1
        
        for i in range(len(arr) - 1, -1, -1):
            arr[i], last_max = last_max, max(last_max, arr[i])
        
        return arr
        