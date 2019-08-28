var longestPalindrome = function(s) {
    let map = {};
    for (c of s) {
        map[c] = (map[c] || 0) + 1
    }
    
    let odds = 0
    for (let c in map) {
        if (map[c] % 2 === 1) odds++
    }
    if (odds > 0) odds = odds - 1
    return s.length - odds 
};
