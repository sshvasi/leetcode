const isPalindrome = (s) =>{
    s = s.toUpperCase().replace(/[^a-z0-9]/gi, '')
    
    for (let i = 0; i < s.length / 2; i++) {
        const j = s.length - i - 1
        
        if (s[i] !== s[j]) {
            return false
        }
    }
    
    return true
}