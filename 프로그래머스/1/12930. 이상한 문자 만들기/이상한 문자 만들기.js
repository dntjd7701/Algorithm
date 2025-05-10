function solution(s) {
    const wordArr = s.split(' ')
    const result = wordArr.map((word) => {
        return [...word].map((w, i) => {
            if(i % 2 === 0)  {
                return String(w).toUpperCase()
            } 
              return String(w).toLowerCase();
        }).join('')
    }).join(' ')
    return result; 
}
