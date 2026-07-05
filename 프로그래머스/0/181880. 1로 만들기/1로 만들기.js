function solution(num_list) {
    let count = 0
    for(i=0; i<num_list.length; i++){
    let num = num_list[i]
    while(num !== 1){
        if(num % 2 === 0 ){
            num /= 2
            count ++
        }else{
           num -= 1
            num /= 2
            count ++
        }
    }
        
    }
    return count
}