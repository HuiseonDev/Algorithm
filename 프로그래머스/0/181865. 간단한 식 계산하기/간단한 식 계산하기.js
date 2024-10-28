function solution(binomial) {
    const [a,op,b] = binomial.split(' ')
    return (op === '-' ? a - b : op === '+' ? Number(a) + Number(b) : a * b)
}