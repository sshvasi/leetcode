const detectCycle = (head) => {
    let slow = head
    let fast = head
    let entry = head
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        
        if (slow === fast) {
            while (slow !== entry) {
                slow = slow.next
                entry = entry.next
            }
            
            return slow
        }
    }
    
    return null
};