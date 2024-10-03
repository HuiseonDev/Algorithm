function solution(n) {
    var answer = [];
    
    for(i=0; i<=n; i++){
        console.log(n % i === 0 ? answer.push(i) : '')
    }
    return answer;
}