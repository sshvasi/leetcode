const isPalindrome = (s) =>{
    s = s.toUpperCase().replace(/[^a-z0-9]/gi, '')
    
    let i = 0
    let j = s.length - 1
    
    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }
        
        i++
        j--
    }
    
    return true
};