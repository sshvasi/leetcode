<p>
<b>
<a href="https://leetcode.com/problems/linked-list-cycle-ii/">
LC00142 Linked List Cycle II
</a>
</b>
</p>
​
<p>
<i>Linked list</i>, <i>Two pointers</i>, <i>Fast/slow</i>
</p>
​
​
<p>
Используем два указателя — быстрый и медленный — для проверки списка на наличие цикла. Если цикл есть, то после встречи указателей весь список можно разбить на три части:
</p>
​
<ul>
<li>
A — растояние от начала списка до начала цикла.
</li>
<li>
B — растояние от начала цикла до места встречи указателей.
</li>