function solution(arr, intervals) {
    const [a,b] = intervals
    return [arr.slice(a[0], a[1] + 1), arr.slice(b[0], b[1] + 1)].flat()
    
}