# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        sentinel = ListNode()
        tail = sentinel
        current1 = l1
        current2 = l2
        carry = 0

        while current1 or current2 or carry:
            second_value = current1.val if current1 else 0
            first_value = current2.val if current2 else 0
            total_sum = first_value + second_value + carry

            new_node_value = total_sum % 10
            carry = total_sum // 10

            tail.next = ListNode(new_node_value)

            tail = tail.next
            current1 = current1.next if current1 else None
            current2 = current2.next if current2 else None

        return sentinel.next
