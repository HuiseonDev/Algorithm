function solution(num_str) {
    arr = 0
    str = num_str.split('').map(Number)
    for(i=0; i<str.length; i++){
        arr = arr + str[i]
    }
    return arr
}