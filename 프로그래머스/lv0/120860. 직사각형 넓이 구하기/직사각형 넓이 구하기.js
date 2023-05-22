function solution(dots) {
    let X = 0, Y = 0;
    for(let i=0; i < dots.length -1; i++) {
        const [x, y] = dots[i];
        const [nx, ny] = dots[i+1];
        
        X = Math.max(Math.abs(nx-x), X);
        Y = Math.max(Math.abs(ny-y), Y);
    }
    
    return X*Y
}