# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        sentinel = ListNode(0, head)
        previous = sentinel
        current = sentinel.next
        while current and current.next:
            if current.val == current.next.val:
                while current.next and current.val == current.next.val:
                    current = current.next
                previous.next = current.next
            else:
                previous = current
            current = current.next
        return sentinel.next
