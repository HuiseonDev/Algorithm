function solution(arr, divisor) {
let num=[];
    arr.map((v,i) => v % divisor === 0 ? num.push(v) : '')
    
    if(num.length === 0){
        num.push(-1)
        return num
    } else {
         return num.sort((a,b) => a - b)
    }
}