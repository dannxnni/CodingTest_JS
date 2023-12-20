function solution(keyinput, board) {
    const cur = [0, 0]
    const key = {
        up : [0, 1],
        down : [0, -1], 
        left : [-1, 0],
        right : [1, 0]
    }
    const max = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)]
    
    keyinput.forEach(i => {
        if (Math.abs(cur[0] + key[i][0]) <= max[0] && Math.abs(cur[1] + key[i][1]) <= max[1]) {
            cur[0] += key[i][0]
            cur[1] += key[i][1]
        }
    })
    return cur;
}