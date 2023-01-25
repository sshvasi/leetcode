
/**
 * Располагаем нечётные узлы в одном списке, чётные — в другом.
 * Затем соединяем последний узел первого списка с первым узлом второго.
 *
 * Итерируемся по списку пока чётный узел не станет равен `null`,
 * так как именно чётные узлы будут находиться в конце списка.
 * На каждой итерации меняем ссылку нечётного узла на следующий узел после чётного и перемещаем его вперёд.
 * Проделываем аналогичные действия для чётного узла.
 *
 * После итерации соединяем обе части списка.
 *
 * - Сложность по времени — `O(n)`. Один проход по списку.
 * - Сложность по памяти — `О(n)`. Мы не сохраняем новые списки, только меняем ссылки.
 */
const oddEvenList = (head) => {
  if (head === null) {
    return null;
  }

  let odd = head;
  let even = head.next;
  let evenHead = head.next;

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};