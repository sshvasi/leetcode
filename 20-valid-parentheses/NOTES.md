<p>
<b>
<a href="https://leetcode.com/problems/valid-parentheses/">
LC00020 Valid Parentheses
</a>
</b>
</p>
​
<p>
<i>Stack</i>, <i>String</i>
</p>
​
<p>
Перебираем скобки в цикле, используем стек для отслеживания валидности скобок.
</p>
​
<p>
Если очередная скобка открывающаяся, то просто добавляем её в стек. Если скобка закрывающаяся и подходит к последней добавленной в стек открывающейся, удаляем открывающуюся из стека. Если скобка закрывающаяся, но не подходходящая, сразу возвращаем <code>false</code>.
</p>
​
<p>
После перебора проверяем, остались ли в стеке скобки. Если да, значит не для всех открывающихся скобок нашлись закрывающиеся; возвращаем <code>false</code>. Если стек пустой, значит для всех открывающихся скобок были закрывающихся и не встретилось ни одной неподходящей закрывающейся; возвращаем <code>true</code>.
</p>
​