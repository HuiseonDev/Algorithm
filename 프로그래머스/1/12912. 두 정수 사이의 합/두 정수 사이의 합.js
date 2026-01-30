function solution(a, b) {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  
  const count = max - min + 1;
    return (max + min) * count / 2
}