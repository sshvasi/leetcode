<b><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/">LC00026 Remove Duplicates from Sorted Array</a>&nbsp;</b>
​
<br>
​
<i>Array</i>, <i>Two pointers</i>
​
<br><br>
​
Используем два указателя: правый — <i>для чтения</i> очередного числа, левый — <i>для вставки</i> уникального числа. Если правое число уникально, то есть не равно предыдущему, вставляем его на место левого.
​