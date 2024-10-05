function solution(a, b) {
    
   if( a % 2 === 0) {
      return  b % 2 === 0 ? Math.abs( a - b ) : 2 * ( a + b )
   } else {
       return b % 2 === 0 ? 2 * ( a + b ) : a**2 + b**2
   }
}