function solution(str_list, ex) {
    const arr =[]
    str_list.map((v) => v.includes(ex) ? '' : arr.push(v))
    return arr.join('')
}