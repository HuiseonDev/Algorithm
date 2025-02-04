function solution(a, d, included) {
    return included.map((v,i) => v ? a + d * i : '').reduce((a,b) => +a + +b)
}