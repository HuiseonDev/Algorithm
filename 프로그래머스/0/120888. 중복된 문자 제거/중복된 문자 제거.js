function solution(my_string) {
    arr = []
    let a = [...my_string].map((v) => arr.includes(v) ? '' : arr.push(v))
    return arr.join('')
    
}