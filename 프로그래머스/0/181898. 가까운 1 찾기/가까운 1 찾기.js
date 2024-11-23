function solution(arr, idx) {
    return arr.findIndex((v, i) => v === 1 && i >= idx) !== -1 ?
        arr.findIndex((v, i) => v === 1 && i >= idx) : -1
        
}