function solution(sides) {
    const tr = sides.sort((a, b) => b - a);
    return tr[0] < tr[1] + tr[2] ? 1 : 2
}