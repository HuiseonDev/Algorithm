function solution(numbers) {
    const min = numbers.sort((a,b) => a - b).slice(0,2)
    const max = numbers.sort((a,b) => b- a).slice(0,2)
    return min[0] * min[1] > max[0] * max[1] ? min[0] * min[1] : max[0] * max[1]
}