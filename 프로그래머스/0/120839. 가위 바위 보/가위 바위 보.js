function solution(rsp) {
    const arr = []
   const ff = rsp.split('').map((item) => item === '2' ? arr.push('0') : item === '0' ? arr.push('5') : item === '5' ? arr.push('2') : '')
    
    return arr.join('')
}