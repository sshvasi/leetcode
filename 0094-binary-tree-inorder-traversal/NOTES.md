<p>
<b>
<a href="https://leetcode.com/problems/binary-tree-inorder-traversal">
LC00094 Binary Tree Inorder Traversal
</a>
</b>
</p>
​
<p>
<i>Tree</i>, <i>Binary tree</i>, <i>Stack</i>, <i>DFS</i>
</p>
​
<p>
Два подхода: рекурсия и цикл.
</p>
​
<p>
Итеративный подход. Перебираем узлы, пока указатель не ссылается на пустой узел или стек не пустой. Если указатель ссылается не на пустой узел, добавляем текущий узел в стек и переходим по его левому ребру. Если указатель ссылается на пустой узел, значит мы дошли до листового узла по левым рёбрам (или у узла нет левого дочернего узла), достаём из стека последний узел, добавляем его значение в результат и переходим по правому ребру.
</p>
​
<p>
Важно: чтобы порядок был именно inorder, добавляем значение, когда достаём узел из стека, а не когда добавляем. Так мы сперва пройдём по левым рёбрам узла (и добавим их значения), а затем добавим его значение.
</p>
​