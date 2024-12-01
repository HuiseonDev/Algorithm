function solution(my_string) {
//     const regExp = /[0-9]/g;
//     const answer = my_string.match(regExp)
//     const array = answer.map((a) => Number(a))
//     const total = array.reduce((a,b) =>(a+b))
    

//     return total;
    
    return my_string.match(/[0-9]/g).map((a) => Number(a)).reduce((a,b) =>(a+b))
}