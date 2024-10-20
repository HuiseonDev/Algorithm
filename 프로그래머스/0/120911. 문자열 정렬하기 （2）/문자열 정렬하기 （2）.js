function solution(my_string) {
    str = my_string.split('')
    arr = []
    str.map((v) => arr.push(v.toLowerCase()))
    return arr.sort().join('')
}