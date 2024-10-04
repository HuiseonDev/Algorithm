function solution(arr, k) {
    
    newArr = []
    for(i=0; i<arr.length; i++){
        k % 2 === 0 ?
             newArr.push(arr[i] + k)
        : newArr.push(arr[i] * k)
    }
    return newArr
}