function solution(n) {
return n % 2 === 0 ? [...Array(Math.floor(n / 2 + 1))].reduce((acc, _, idx) => acc + (n - idx * 2) ** 2 ,0) : [...Array(Math.floor(n / 2 + 1))].reduce((acc, _, idx) => acc + (n - idx * 2),0)
}