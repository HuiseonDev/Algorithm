function solution(start_num, end_num) {
    arr = []
    for(i=0; i<=start_num - end_num; i++){
       arr.push(start_num - i)
    }
    return arr
}