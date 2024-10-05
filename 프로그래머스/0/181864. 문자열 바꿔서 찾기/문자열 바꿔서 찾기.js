function solution(myString, pat) {
    
    arr = myString.split('')
    newArr = arr.map((i) => i === 'A' ? 'B' : 'A')
   return newArr.join('').includes(pat) ? 1 : 0
}