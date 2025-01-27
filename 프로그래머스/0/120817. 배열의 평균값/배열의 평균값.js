function solution(numbers) {
  const num = numbers.reduce((acc, cur) => acc + cur)
  return num / numbers.length
}
