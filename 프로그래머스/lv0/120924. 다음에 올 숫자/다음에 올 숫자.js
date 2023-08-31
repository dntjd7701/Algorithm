function solution(common) {
    const lastVal = common[common.length - 1];
    
    if((common[1] - common[0]) === (common[2] - common[1])) {
        return lastVal + (common[2] - common[1])
    }
    return lastVal * (common[1] / common [0])
}