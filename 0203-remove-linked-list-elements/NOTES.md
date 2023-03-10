Задача повторяет [аналогичную](https://leetcode.com/problems/remove-element/), в которой нужно удалять элементы из массива, и способ решения тоже совпадает. Мы итерируемся по всем элементам (в данном случае — узлам) и удаляем те, значение которых равно «плохому» значению. Отличаются подходы только тем, что в массивах и связных списках удаление организовано различным образом.
<br><br>
Сценариев удаления узла из связного списка два:
* если это первый узел, то нужно поменять переменную указывающую на первый узел, — на второй, то есть `head = head.next`.
* если это произвольный узел (в т.ч. последний), нужно поменять ссылку предыдущего узла на следующий после удаляемого: `previous.next = current.next`.
<br><br>
Проблема в том, что если первые `k` узлов имеют плохое значение, то удалять их придётся первым способом. То есть, нам не поможет условная конструкция, а придётся писать цикл:
​
```javascript
while (head !== null && head.val === val) {
head = head.next;
}
```
​
Чтобы этого не делать можно воспользоваться узлом-заглушкой, который мы подставим перед первым узлом, чтобы унифицировать процедуру удаления.