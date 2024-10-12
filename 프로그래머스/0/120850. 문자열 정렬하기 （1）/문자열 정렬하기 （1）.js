function solution(my_string) {
    arr = []
   my_string.split('').map((v) => !isNaN(v) ? arr.push(Number(v)) : '' ) 
    return arr.sort((a,b) => a - b)
}