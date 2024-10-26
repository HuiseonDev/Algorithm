function solution(n) {
    let num = 1;
    while(true){
        if(num % n === 0 && num % 6 === 0){
            break
        }
        num += 1
    }
    return num / 6
}