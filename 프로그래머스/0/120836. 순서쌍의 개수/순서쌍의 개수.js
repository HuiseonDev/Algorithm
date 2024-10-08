function solution(n) {
    arr = []
    for(i=0;i<n; i++){
       Number.isInteger(n / i) ? arr.push(n / i) : ''
    }
    return arr.length + 1
}
