const getIntersectionNode = (headA, headB) => {
    let currA = headA;
    let currB = headB;

    while (currA !== currB) {
        currA = currA !== null ? currA.next : headB;
        currB = currB !== null ? currB.next : headA;
    }

    return currA;
};