function solution(strArr) {
    arr = []
    strArr.map((v,i) => v.includes('ad') ? '' : arr.push(v) )
    return arr
}