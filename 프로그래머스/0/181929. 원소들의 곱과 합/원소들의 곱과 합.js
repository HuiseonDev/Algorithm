function solution(num_list) {
    
    mul = 1
    plus = 0

    
    for(i=0; i<num_list.length; i++){
    mul = mul * num_list[i]
    plus = plus + num_list[i]
    
        
    }
     return mul > (plus * plus) ?  0 :  1
}