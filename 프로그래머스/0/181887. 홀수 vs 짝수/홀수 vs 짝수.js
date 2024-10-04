function solution(num_list) {
    numA = 0
    numB = 0
    
   for(i=0; i<num_list.length; i++){
       i % 2 === 0 ?  numA = numA + num_list[i] : numB = numB + num_list[i]
   }
     return Math.max(numA, numB)
}