function solution(n) {
    result=[]
    for(let i=0; i< n; i++){
        arr = []
       for(let j=0; j<n; j++){
           i===j? arr.push(1) : arr.push(0);
       }
       result.push(arr)
   }
    return result
}