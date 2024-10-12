function solution(num_list) {
    even = []
    odd = []
    num_list.map((v) => v % 2 === 0 ? even.push(v) : odd.push(v)) 
    return Number(even.join('')) + Number(odd.join(''))
}