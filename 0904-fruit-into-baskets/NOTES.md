<b><a href="https://leetcode.com/problems/fruit-into-baskets">LC00904 Fruit Into Baskets</a>&nbsp;</b>
​
<br>
Array, <i>Hash table</i>, <i>Sliding window</i>
​
<br><br>Используем хэш-таблицу для подсчёта фруктов и два указателя. На каждой итерации добавляем фрукт под правым указателем в корзину. Если разных фруктов стало больше двух, то удаляем фрукт под левым указателем, пока видов фруктов снова не станет два. Когда удалили достаточно фруктов, обновляем результат.<br><br>Два указателя позволяют не пересчитывать повторно те фрукты, которые мы уже считали на предыдущих итерациях.<br><br>
​
Вместо вложенного цикла <code>while</code> можно использовать условную конструкцию с&nbsp;<code>if</code>. Решение будет корректным, но тогда корзина сможет единовременно содержать более трёх видов фруктов. В худшем случае в корзине будут находится все виды фруктов (Если в начала будет много фруктов одного типа, а в конце разные, то при встрече фруктов, которые не помещаются, удаление фруктов под левым указателем не будет сокращать размер хэш-таблицы.), что приведёт к линейной сложности по памяти.
​