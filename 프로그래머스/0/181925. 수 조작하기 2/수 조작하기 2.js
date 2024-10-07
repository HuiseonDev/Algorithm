function solution(numLog) {
    arr = []
    for(i=0; i<numLog.length; i++){
        let num = numLog[i+1] - numLog[i]
        num === 1 ? arr.push('w') 
        : num === -1 ? arr.push('s') 
        : num === 10 ? arr.push('d') 
        : num === -10 ? arr.push('a') 
        : ''
    }
    return arr.join('')
}