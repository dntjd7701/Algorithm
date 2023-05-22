function solution(keyinput, board) {
    const maxX = ~~(board[0] / 2);
    const maxY = ~~(board[1] / 2);
    let x = 0, y = 0;
    
    for(let k=0; k < keyinput.length; k++){
        const w = keyinput[k];
        if(w === 'left' && x > -maxX) {
            --x;
        } else if(w === 'right' && x < maxX) {
            ++x;
        } else if(w === 'up' && y < maxY) {
            ++y;
        } else if(w === 'down' && y > -maxY) {
            --y;
        }
    }
    return [x, y];
}