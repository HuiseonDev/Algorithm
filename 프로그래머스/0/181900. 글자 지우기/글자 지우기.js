function solution(my_string, indices) {
    return [...my_string].map((v,i) => indices.includes(i) ? '' : v).join('')
}