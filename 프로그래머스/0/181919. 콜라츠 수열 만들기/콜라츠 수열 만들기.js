function solution(n) {
    arr = [n]
    return solutionTest(n)

    function solutionTest(n){
         if(n === 1 ){
             return arr
         } else {   
        if(n % 2 === 0 ){
            n = n / 2 
            arr.push(n)
            return solutionTest(n)
            
        }else{
            n = 3 * n + 1
            arr.push(n)
            return solutionTest(n)
        }
    }   
        
    }
    
}