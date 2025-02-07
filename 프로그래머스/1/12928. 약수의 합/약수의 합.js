function solution(n) {
   return Array(n).fill(0).map((v, i) => v + i + 1).filter((v) => n % v === 0).reduce((acc, arr) => acc += arr, 0)
}