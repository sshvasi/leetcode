<p>
<b>
<a href="https://leetcode.com/problems/non-overlapping-intervals/">
LC00435 Non-overlapping Intervals
</a>
</b>
</p>
​
<p>
<i>Array</i>, <i>Intervals</i>
</p>
​
<p>
Сортируем интервалы, чтобы можно было сравнивать соседние и проверять, пересекаются ли они.
</p>
​
<p>
Запоминаем конец последнего интервала, и считаем интервалы, которые нужно удалить. Инициализируем перенную с концом последнего интервала как <code>-Infinity</code>, потому что уже на первой итерации цикла будет присвоено адекватное значение (также можно сохранить конец первого интервала и начать итерацию со второго).
</p>
​
<p>
На каждой итерации проверяем пересекается ли начало текущего интервала с концом последнего сохранённого. Если пересекаются, значит нужно увеличить счётчик и удалить один из интервалов: <b>выбираем тот интервал, который заканчивается раньше</b> — так с меньшей вероятностью будет пересечение со следующим интервалом. Иначе просто устанавливаем конец текущего интервала как последний (здесь будет перезаписана отрицательная бесконечность).
</p>
​