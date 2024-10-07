function solution(numbers, n) {
    arr = 0
   for(i=0; i<numbers.length; i++){
       arr <= n ? arr += numbers[i] : arr
   }
    return arr
}