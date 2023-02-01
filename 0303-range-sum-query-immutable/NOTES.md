<b><a href="https://leetcode.com/problems/range-sum-query-immutable/">LC00303 Range Sum Query - Immutable</a></b>
<br>
<i>Array</i>, <i>Prefix sum</i>
<br><br>
​
Считаем префиксную сумму для запросов на полуинтервале, то есть создаём массив с длиной n + 1 и с нулём на месте нулевого индекса. Тогда для получения сумму на интервале нужно будет к правой границу прибавить единицу.
​