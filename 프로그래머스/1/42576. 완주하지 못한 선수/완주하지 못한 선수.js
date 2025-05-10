function solution(participant, completion) {
    const map = new Map(); 

    participant.forEach((p) => {
        const value = (map.get(p) || 0) + 1; 
        map.set(p, value);
    });

    completion.forEach((p) => {
        if(map.has(p)) { 
            map.set(p, map.get(p) -1)
        }
    })

    for(const [key, value] of map.entries()) {
        if(value > 0) return key; 
    }
}
