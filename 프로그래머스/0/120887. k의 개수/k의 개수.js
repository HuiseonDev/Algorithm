function solution(i, j, k) {
    arr = [i]
    for(x=i; x<=j; x++){
        x < j ? arr.push(x + 1) : ''
    }
    return arr.join('').split('').filter((n) => n === k + '').length
}