function solution(n) {
    arr = 0
    var num = String(n).split('').map(Number)
    
    for(i=0; i<num.length; i++){
      arr = arr + num[i]
    }
return arr
}