Используем два указателя. Если число под правым указателем не равно «плохому» числу, записываем его на место левого указателя и сдвигаем его. Правый указатель двигаем на каждой итерации.
<br><br>
После того, как правый указатель достигнет конца массива, в левой части будут находиться только подходящие числа. Числа, которые находятся в массиве справа, по условию задачи не имеют значения.
<br><br>
Перезаписывать числа безопасно, потому что под левым указателем будет находиться либо то число, которые мы уже записали на предыдущей итерации, либо «плохое» число.