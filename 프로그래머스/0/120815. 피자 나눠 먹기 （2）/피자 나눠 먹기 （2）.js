function solution(n) {
    let num = 6;
    while(true){
        if(num % n === 0){
            break
        }
        num += 6
    }
    return num / 6
}