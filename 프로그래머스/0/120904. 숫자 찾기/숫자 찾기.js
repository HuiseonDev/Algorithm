function solution(num, k) {
    list = num.toString().split('')
    arr = []
    list.map((v, i) => v == k ? arr += i + 1 :  '')
    return arr[0] ? Number(arr[0]) : -1
    
}