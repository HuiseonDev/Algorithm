function solution(a, b) {
    var answer = [[a,b].join(''), (2 * a * b)].sort((a,b) => b -a);
    return Number(answer[0])

}