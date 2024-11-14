function solution(myString, pat) {
    let num= myString.split('').reduce((acc, cur, idx) => 
             {acc.push(myString.split('').slice(idx, idx + pat.length).join('')) 
              return acc}, [])
   return num.filter(v =>v==pat).length

}