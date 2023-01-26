const removeElements = (head, val) => {
  const sentinel = new ListNode(0, head);

  let previous = sentinel;
  let current = head;

  while (current !== null) {
    // Если значение «плохое», меняем ссылку предыдущего узла,
    // и оставляем указатель на нём.
    if (current.val === val) {
      previous.next = current.next;
    // Если значение «хорошее», перемещаем указатель на узел с «хорошим» значением.  
    } else {
      previous = current;
    }

    // В любом случае двигаем текущий указатель.
    current = current.next;
  }

  // Возвращаем следующий узел после заглушки,
  // так как она не входит в реальный список.
  return sentinel.next;
};
