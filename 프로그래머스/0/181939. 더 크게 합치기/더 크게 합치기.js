function solution(a, b) {
    numA = (a+'' + b+'')
    numB = (b+'' + a+'')
    return numA > numB ? Number(numA) : Number(numB)
}