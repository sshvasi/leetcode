# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # чтобы не определять, с какого узла начинать, используем узел-заглушку
        tail = sentinel = ListNode()

        # пока в каком-либо списке не кончились узлы
        while list1 and list2:
            # берём узел с меньшим значением и перемещаем указатели
            if list1.val < list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next

        # если в одном из списков остались узлы, присоединяем их
        if list1 or list2:
            tail.next = list1 if list1 else list2

        return sentinel.next
