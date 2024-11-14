function solution(myString, pat) {
    let num= myString.split('').reduce((acc, cur, idx) => 
             {myString.split('').slice(idx, idx + pat.length).join('') === pat 
              ? acc.push(myString.split('').slice(idx, idx + pat.length).join('')) : ''
              return acc}, [])
    
    return num.length


}