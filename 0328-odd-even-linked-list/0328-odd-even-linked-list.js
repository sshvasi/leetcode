const oddEvenList = (head) => {
  if (head === null) {
    return null;
  }

  let odd = head;
  let even = head.next;
  let evenHead = head.next;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};