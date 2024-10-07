function solution(num_list) {
    arr= []
   num_list.map((v, i) => v<0 ? arr.push(i) : '')
    return arr.length > 0 ? arr[0] : -1
   
}