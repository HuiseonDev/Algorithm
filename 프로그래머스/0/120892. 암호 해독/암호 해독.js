function solution(cipher, code) {
    arr = []
    cipher.split('').map((v,i) => (i+1) % code === 0 ? arr.push(v) : '')
    return arr.join('')
}