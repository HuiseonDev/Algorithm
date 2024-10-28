function solution(number) {
    arr = 0
    number.split('').map((v) => arr = arr + Number(v))
    return arr % 9
}