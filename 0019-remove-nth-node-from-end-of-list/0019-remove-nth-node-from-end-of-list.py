class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        sentinel = ListNode(0, head)

        left = sentinel
        right = sentinel

        for i in range(n + 1):
            right = right.next
        
        while (right):
            left = left.next
            right = right.next
        
        left.next = left.next.next
        
        return sentinel.next
        