function solution(order) {
    num = (order + '').split('')
    arr = 0
    num.map((v) => v == 3 || v == 6 || v == 9 ? arr += 1 : '')
    return arr
}