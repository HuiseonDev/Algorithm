function solution(num_list) {
    const s =num_list.sort((a,b) => a-b)
    return s.slice(5, s.length)
    
}