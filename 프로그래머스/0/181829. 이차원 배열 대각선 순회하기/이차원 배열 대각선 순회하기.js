function solution(board, k) {
    num = 0
    board.map((v,i) => v.map((w, j) =>  i + j <= k  ? num = num+ w : ''))
    return num
}